// auth.js

import { Component } from 'react';
import Router from 'next/router';
import nextCookie from 'next-cookies';
import cookie from 'js-cookie';

export const login = async ({ access_token, expires_in }) => {
  cookie.set('token', access_token, { expires: expires_in / 60000 });
  Router.push('/');
};

export const logout = () => {
  cookie.remove('token');
  window.localStorage.setItem('logout', Date.now());
  Router.push('/');
};

const getDisplayName = Component =>
  Component.displayName || Component.name || 'Component';

export const withAuthSync = WrappedComponent =>
  class extends Component {
    static displayName = `withAuthSync(${getDisplayName(WrappedComponent)})`;
    static async getInitialProps(ctx) {
      const token = auth(ctx);

      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx));

      return { ...componentProps, token };
    }

    constructor(props) {
      super(props);
      this.syncLogout = this.syncLogout.bind(this);
    }

    componentDidMount() {
      window.addEventListener('storage', this.syncLogout);
    }

    componentWillMount() {
      window.removeEventListener('storage', this.syncLogout);
      window.localStorage.removeItem('logout');
    }

    syncLogout(event) {
      if (event.key === 'logout') {
        console.log('logged out from storage!');
        Router.push('/');
      }
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export const auth = ctx => {
  const { token } = nextCookie(ctx);

  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: '/' });
    ctx.res.end();
    return;
  }

  if (!token) {
    Router.push('/');
  }
  return token;
};
