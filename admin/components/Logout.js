import { Component } from 'react';
// import AuthService from '../utils/AuthService';
import { logout } from '../utils/auth';
import { Dropdown, Icon } from 'semantic-ui-react';

// const auth = new AuthService();
const user = (
  <span>
    <Icon name="user" /> 계정
  </span>
);
class Logout extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    logout();
  }

  render() {
    return (
      <Dropdown trigger={user} className="link item simple">
        <Dropdown.Menu>
          <Dropdown.Item onClick={this.handleSubmit}>
            <Icon name="sign-out" />
            로그아웃
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default Logout;
