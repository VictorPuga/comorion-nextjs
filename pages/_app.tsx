import React from 'react';
import {
  Container,
  AppInitialProps,
  AppProps,
  // NextAppContext,
} from 'next/app';
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

// MyApp.getInitialProps = async function getInitialProps({
//   Component,
//   ctx,
// }: {
//   Component: any;
//   ctx: NextAppContext;
// }): Promise<DefaultAppIProps> {
//   let pageProps = {};

//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }

//   return { pageProps };
// };

export default MyApp;
