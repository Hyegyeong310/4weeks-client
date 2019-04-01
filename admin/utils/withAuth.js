// withAuth.js

// import nextAuth from 'next/auth';
import { Component } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
// import parseScopes from './parseScopes';

// const Loading = () => <div>Loading...</div>;

// export default nextAuth({
//   tokenEndpoint: '/oauth/token',
//   profileEndpoint: '/account',
//   getTokenFromResponse: res => res.access_token,
//   getProfileFromResponse: res => res
//   // parseScopes
// });

export default function withAuth(AuthComponent) {
  return class Authenticated extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true
      };
    }
    componentDidMount() {
      this.setState({ isLoading: false });
    }
    render() {
      return (
        <div>
          {this.state.isLoading ? (
            <Dimmer active inverted>
              <Loader size="large">Loading</Loader>
            </Dimmer>
          ) : (
            <AuthComponent {...this.props} />
          )}
        </div>
      );
    }
  };
}
