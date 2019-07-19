import React from 'react';
import TakeAttendanceView from '../src/views/AdminTakeAttendance';
import { NextPageContext } from 'next';

function TakeAttendance() {
  return <TakeAttendanceView />;
}

TakeAttendance.getInitialProps = async (_ctx: NextPageContext) => {
  return {};
};

export default TakeAttendance;
