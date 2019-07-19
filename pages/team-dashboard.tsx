import React from 'react';
import TeamDashboardView from '../src/views/TeamDashboard';
import { NextPageContext } from 'next';

function TeamDashboard() {
  return <TeamDashboardView />;
}

TeamDashboard.getInitialProps = async (_ctx: NextPageContext) => {
  return {};
};

export default TeamDashboard;
