import React from 'react';
import Events from '../src/views/Events';
import { NextPageContext } from 'next';

function Home() {
  return <Events />;
}

// Home.getInitialProps = async (_ctx: NextPageContext) => {
//   return {};
// };

export default Home;
