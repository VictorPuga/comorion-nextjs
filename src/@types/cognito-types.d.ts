interface CognitoUser {
  attributes: {
    sub: string;
    identities: string;
    name: string;
    email: string;
  };
  authenticationFlowType: string;
  client: object;
  keyPrefix: string;
  pool: object;
  preferredMFA: string;
  signInUserSession: object;
  storage: object;
  userDataKey: string;
  username: string;
}
