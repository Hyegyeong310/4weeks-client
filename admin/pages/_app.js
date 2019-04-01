// _app.js

import App, { Container } from 'next/app';
import Head from 'next/head';
import withReduxStore from '../lib/with-redux-store';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import getPageContext from '../src/getPageContext';

class AdminApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const isServer = typeof window === 'undefined';

    if (isServer) {
      let pageProps = {};
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }
      return { pageProps };
    }
  }
  constructor() {
    super();
    this.pageContext = getPageContext();
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <Head>
          <title>Gelato-admin</title>
        </Head>
        <Provider store={reduxStore}>
          <CssBaseline />
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(AdminApp);
