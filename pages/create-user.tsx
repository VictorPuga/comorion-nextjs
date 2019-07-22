import React from 'react';
import CreateUser from '../src/views/CreateUser';
import { NextPageContext } from 'next';

function CreateUserPage() {
  return <CreateUser />;
}

// CreateUserPage.getInitialProps = async (_ctx: NextPageContext) => {
//   return {};
// };

export default CreateUserPage;
