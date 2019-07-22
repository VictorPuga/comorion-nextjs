import React from 'react';
import TakeAttendance from '../src/views/AdminTakeAttendance';
import { NextPageContext } from 'next';
import NoSSR from 'react-no-ssr';

function TakeAttendancePage() {
  return (
    <NoSSR>
      <TakeAttendance />
    </NoSSR>
  );
}

// TakeAttendancePage.getInitialProps = async (_ctx: NextPageContext) => {
//   return {};
// };

export default TakeAttendancePage;
