import Document, { Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link
            rel="icon"
            type="image/x-icon"
            href="../static/img/favicon.ico"
          />
        </Head>
        <body>
          <div className="container">
            <Main />
          </div>
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CustomDocument;
