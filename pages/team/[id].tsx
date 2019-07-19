import React from 'react';
import TeamView from '../../src/views/Team';
import { NextPageContext } from 'next';

function Team({ id }: { id: string }) {
  return <TeamView id={id} />;
}

Team.getInitialProps = async (_ctx: NextPageContext) => {
  const { query } = _ctx;
  return { id: query.id };
};

export default Team;
