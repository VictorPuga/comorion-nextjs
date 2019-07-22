import React from 'react';
import Team from '../../src/views/Team';
// import { NextPageContext } from 'next';
import { useRouter } from 'next/router';

// type TeamProps = {
//   id: string;
// };

function TeamPage() {
  const { query } = useRouter();
  return <Team id={query.id as string} />;
}

// TeamPage.getInitialProps = async (
//   _ctx: NextPageContext,
// ): Promise<TeamProps> => {
//   const { query } = _ctx;
//   return { id: query.id as string };
// };

export default TeamPage;
