import React from 'react';
import NotFoundView from '../src/views/NotFound';
type ErrorProps = {
  statusCode: any;
};
function Error({ statusCode }: ErrorProps) {
  console.log('Error status code', statusCode);
  return <NotFoundView />;
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};

export default ErrorEvent;
