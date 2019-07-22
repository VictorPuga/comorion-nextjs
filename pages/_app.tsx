import React from 'react';
import { Container, AppInitialProps, AppProps } from 'next/app';
import { AppContextType } from 'next-server/dist/lib/utils';
import { Router } from 'next/dist/client/router';

import Template from '../src/components/Template';
import '../src/responsive.scss';

function MyApp<P>(props: P & AppInitialProps & AppProps) {
  const { Component, pageProps } = props;
  return (
    <Container>
      <Template>
        <Component {...pageProps} />
      </Template>
    </Container>
  );
}

// MyApp.getInitialProps = async ({
//   Component,
//   ctx,
// }: AppContextType<Router>): Promise<AppInitialProps> => {
//   let pageProps = {};
//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }
//   return { pageProps };
// };

export default MyApp;
