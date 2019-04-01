import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }
  render() {
    const { pageContext } = this.props;
    return (
      <html>
        <Head>
          <meta
            name="theme-color"
            content={
              pageContext ? pageContext.theme.palette.primary.main : null
            }
          />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <link rel="stylesheet" href="/static/style.css" />
        </Head>
        <body>
          <div className="wrap">
            <Main />
          </div>
          <NextScript />
        </body>
      </html>
    );
  }
}

CustomDocument.getInitialProps = ctx => {
  let pageContext;
  let css;

  if (pageContext) {
    css = pageContext.sheetsRegistry.toString();
  }

  return {
    pageContext,
    styles: (
      <React.Fragment>
        <style id="jss-server-side" dangerouslySetInnerHTML={{ __html: css }} />
        {flush() || null}
      </React.Fragment>
    )
  };
};
export default CustomDocument;
