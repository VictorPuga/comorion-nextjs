import React from 'react';
import TeamsView from '../src/views/Teams';
import { NextPageContext } from 'next';

function Teams() {
  return <TeamsView />;
}

Teams.getInitialProps = async (_ctx: NextPageContext) => {
  return {};
};

export default Teams;
