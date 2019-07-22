import React from 'react';
import CreateEvent from '../src/views/CreateEvent';
import { NextPageContext } from 'next';

function CreateEventPage() {
  return <CreateEvent />;
}

// CreateEventPage.getInitialProps = async (_ctx: NextPageContext) => {
//   return {};
// };

export default CreateEventPage;
