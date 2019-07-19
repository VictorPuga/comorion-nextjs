import React from 'react';
import CreateTeamView from '../src/views/CreateTeam';
import { NextPageContext } from 'next';

function CreateTeam() {
  return <CreateTeamView />;
}

CreateTeam.getInitialProps = async (_ctx: NextPageContext) => {
  return {};
};

export default CreateTeam;
