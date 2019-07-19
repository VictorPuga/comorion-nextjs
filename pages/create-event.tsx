import React from 'react';
import CreateEventView from '../src/views/CreateEvent';
import { NextPageContext } from 'next';

function CreateEvent() {
  return <CreateEventView />;
}

CreateEvent.getInitialProps = async (_ctx: NextPageContext) => {
  return {};
};

export default CreateEvent;
