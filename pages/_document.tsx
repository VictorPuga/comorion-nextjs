import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  // static async getInitialProps(ctx: any) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   return { ...initialProps };
  // }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <link rel='shortcut icon' href='static/favicon.ico' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
          <meta name='theme-color' content='#000000' />
          <script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyCYWJAm65m7DJP2kC-AVIc-JzFnkWJYDSs&libraries=places' />
          <link rel='manifest' href='static/manifest.json' />
          {/* <link
      href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/flatly/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-T5jhQKMh96HMkXwqVMSjF3CmLcL1nT9//tCqu9By5XSdj7CwR0r+F3LTzUdfkkQf"
      cross=rigin="anonymous"
    /> */}
          {/* <link
            href='https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/lux/bootstrap.min.css'
            rel='stylesheet'
            integrity='sha384-hVpXlpdRmJ+uXGwD5W6HZMnR9ENcKVRn855pPbuI/mwPIEKAuKgTKgGksVGmlAvt'
            crossOrigin='anonymous'
          /> */}
          <link
            rel='stylesheet'
            href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
            integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
            crossOrigin='anonymous'
          />
        </Head>
        <body style={{ backgroundColor: '#f5f5f5' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
