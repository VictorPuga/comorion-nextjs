import React from 'react';
import CreateUserView from '../src/views/CreateUser';
import { NextPageContext } from 'next';

function CreateUser() {
  return <CreateUserView />;
}

CreateUser.getInitialProps = async (_ctx: NextPageContext) => {
  return {};
};

export default CreateUser;
