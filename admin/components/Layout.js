// Layout.js
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, title = 'gelato-admin' }) => {
  {
    return (
      <div style={{ padding: '0 15px' }}>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Header />
        <div style={{ height: '54px' }} />
        {children}
        <Footer />
      </div>
    );
  }
};

export default Layout;
