import { Component } from 'react';
import {
  Form,
  Checkbox,
  Modal,
  Message,
  Segment,
  Button,
  Icon,
  Dropdown
} from 'semantic-ui-react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { login } from '../utils/auth';

const user = (
  <span>
    <Icon name="user" /> 계정
  </span>
);
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, username: '' };
    this.show = this.show.bind(this);
    this.close = this.close.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  show() {
    return () => this.setState({ open: true });
  }
  close() {
    this.setState({ open: false });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const username = this.refs.email.value.trim();
    const password = this.refs.password.value.trim();
    const url = 'auth_url';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json; charset=UTF-8',
          Authorization: 'Basic YWRtaW46'
        },
        body: JSON.stringify({
          username,
          password,
          client_id: 'admin',
          grant_type: 'password'
        })
      });
      if (response.ok) {
        const { access_token, expires_in } = await response.json();
        login({ access_token, expires_in });
        this.close();
      } else {
        console.log('Login failed.');
        let error = new Error(response.statusText);
        error.response = response;
        return Promise.reject(error);
      }
    } catch (error) {
      console.error('Error! ', error);
      throw new Error(error);
    }
  }

  render() {
    const { open } = this.state;
    const modalStyle = {
      maxWidth: '600px',
      height: '100%',
      maxHeight: '425px',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    };
    return (
      <Dropdown trigger={user} className="link item simple">
        <Dropdown.Menu>
          <Dropdown.Item>
            <span id="login" onClick={this.show(true)}>
              <Icon name="sign-in" />
              로그인
            </span>
            <Modal
              style={modalStyle}
              verticalalign="middle"
              open={open}
              onClose={this.close}
            >
              <Modal.Header>
                로그인
                <button className="close" onClick={this.close}>
                  x
                </button>
              </Modal.Header>
              <Modal.Content>
                <Form size="large" onSubmit={this.handleSubmit}>
                  <Segment stacked>
                    <Form.Field>
                      <label>계정</label>
                      <input
                        type="email"
                        ref="email"
                        placeholder="계정 이메일을 입력해주세요."
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>비밀번호</label>
                      <input
                        placeholder="비밀번호를 입력해주세요."
                        type="password"
                        ref="password"
                      />
                    </Form.Field>
                    <Form.Field>
                      <Checkbox label="로그인 유지" defaultChecked />
                    </Form.Field>
                    <Button type="submit" color="teal" size="large">
                      로그인 하기
                    </Button>
                  </Segment>
                </Form>
                <Message />
              </Modal.Content>
            </Modal>
            <style jsx>
              {`
                .ui.page.dimmer {
                  top: 50%;
                  left: 50%;
                  marginright: -50%;
                  transform: translate(-50%, -50%);
                }
                .close {
                  margin-top: -2px;
                  padding: 0;
                  font-size: 21px;
                  font-weight: 700;
                  line-height: 1;
                  color: #000;
                  text-shadow: 0 1px 0 #fff;
                  opacity: 0.2;
                }
                .close:hover {
                  color: #000;
                  cursor: pointer;
                  opacity: 0.5;
                }
                #login {
                  padding: 3px 20px;
                  font-weight: 400;
                  color: #333;
                  white-space: nowrap;
                }
                #login span {
                  padding-right: 7px;
                }
              `}
            </style>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default Login;
