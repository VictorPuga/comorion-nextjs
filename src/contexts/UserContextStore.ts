import React from 'react';
import { Auth } from 'aws-amplify';
import UserRepository from '../repositories/UserRepository';
export type UserState = {
  isAuthenticated: boolean;
  isVerified: boolean;
  currentAuthenticatedUser?: ComorionUser;
};
export const userInitialState: UserState = {
  isAuthenticated: false,
  isVerified: false,
};
export default React.createContext(userInitialState);
export async function userReducer(
  state: UserState,
  action: {
    type:
      | 'application_open'
      | 'signin'
      | 'signup'
      | 'confirm_signup_code'
      | 'resend_signup_code'
      | 'send_verification_code'
      | 'verify_email_with_code'
      | 'signout';
    payload?: any;
  },
): Promise<UserState> {
  const repo = new UserRepository();
  const initialState = { ...state };
  if (action.type === 'application_open') {
    let cognitoUser, error;
    try {
      cognitoUser = await Auth.currentUserInfo();
    } catch (e) {
      error = e;
    }
    console.log(cognitoUser);
    if (cognitoUser && !error) {
      const user = await repo.getUserWithEmail(cognitoUser.username);
      return {
        isAuthenticated: true,
        isVerified: true,
        currentAuthenticatedUser: user,
      };
    }
    return initialState;
  }
  if (action.type === 'signin') {
    const { email, id, phone, username, password } = action.payload;
    let user: ComorionUser | undefined = undefined;
    if (email || username) {
      user = await repo.getUserWithEmail(email ? email : username);
    } else if (id) {
      user = await repo.getUserWithId(id);
    } else if (phone) {
      user = await repo.getUserWithPhone(phone);
    }
    if (!user) throw new Error('No user could be found');
    const cognitoUser = await Auth.signIn(user.email, password);
    if (cognitoUser) {
      return {
        isAuthenticated: true,
        currentAuthenticatedUser: user,
        isVerified: true,
      };
    }
  }
  if (action.type === 'signup') {
    const { user, password } = action.payload;
    const cognitoUser = await Auth.signUp({
      username: user.email,
      password,
      attributes: {
        email: user.email,
        phone_number: user.phone,
        preferred_username: user.id,
      },
    });
    if (!cognitoUser) throw new Error('Cognito Error');
    const createdUser = await repo.createUser(user);
    if (!createdUser) throw new Error('Error creating user in AppSync');
  }
  if (action.type === 'confirm_signup_code') {
    const { username, code } = action.payload;
    const data = await Auth.confirmSignUp(username, code);
    if (!data) throw new Error('Confirmation failed');
  }
  if (action.type === 'resend_signup_code') {
    const {
      username,
      // , code
    } = action.payload;
    const data = await Auth.resendSignUp(username);
    if (!data) throw new Error('Resending failed');
  }
  if (action.type === 'send_verification_code') {
    if (!initialState.currentAuthenticatedUser)
      throw new Error('User needs to be authenticated to verify its email');
    await Auth.verifyCurrentUserAttribute('email');
  }
  if (action.type === 'verify_email_with_code') {
    const {
      //  username,
      code,
    } = action.payload;
    if (!initialState.currentAuthenticatedUser)
      throw new Error('User needs to be authenticated to verify its email');
    const data = await Auth.verifyCurrentUserAttributeSubmit('email', code);
    if (data) {
      return {
        isVerified: true,
        ...initialState,
      };
    }
  }
  if (action.type === 'signout') {
  }
  return initialState;
}
