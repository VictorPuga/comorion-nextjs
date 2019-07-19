import React from 'react';
import Navbar from './Navbar';
import Head from 'next/head';
import Footer from './Footer';
export default function Template({
  children,
  title = 'React App',
}: {
  children: JSX.Element;
  title?: string;
}): JSX.Element {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <div className='content'>
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
}
