// Header.js
import Link from 'next/link';
import Login from './Login';
import Logout from './Logout';
import { Menu, Dropdown, Icon, Container, Image } from 'semantic-ui-react';
import cookie from 'js-cookie';
const menuStyle = {
  width: '100%',
  backgroundColor: '#fafafa',
  border: '1px solid #ddd',
  borderRadius: 0,
  boxShadow: '0px 3px 5px rgba(0,0,0,0.2)',
  marginBottom: '1em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease'
};

const DMLIST = (
  <span>
    <Icon name="edit" /> DM설정
  </span>
);

const menu = boolean => (
  <Menu.Menu position="right">
    <Menu.Item as="a" href="/">
      <Icon name="home" />홈
    </Menu.Item>
    <Menu.Item as="a" href={boolean ? '/shop-list' : '/'}>
      <Icon name="paper plane" />
      제휴요청
    </Menu.Item>
    <Menu.Item as="a" href={boolean ? '/DM-result' : '/'}>
      <Icon name="table" />
      DM결과
    </Menu.Item>
    <Dropdown trigger={DMLIST} className="link item simple">
      <Dropdown.Menu>
        <Dropdown.Item as="a" href={boolean ? '/DMTL' : '/'} props={1}>
          <Icon name="edit" />
          DM리스트
        </Dropdown.Item>
        <Dropdown.Item as="a" href={boolean ? '/DM_condition' : '/'}>
          <Icon name="edit" />
          DM설정
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    {boolean ? <Logout /> : <Login />}
  </Menu.Menu>
);

const Header = () => {
  let boolean = 0;
  if (cookie.get().token) {
    boolean = 1;
  } else {
    alert('로그인을 해주세요');
  }
  return (
    <div>
      <style> {`html, body {  background: #fafafa}`}</style>
      <Menu fixed="top" style={menuStyle}>
        <Container style={{ width: '100%', padding: '0 15px' }}>
          <Menu.Header style={{ border: 'none', padding: '13px 16px' }}>
            <Link href="/">
              <a>
                <Image size="tiny" src="/static/gelato_logo.png" />
              </a>
            </Link>
          </Menu.Header>
          {menu(boolean)}
        </Container>
      </Menu>
    </div>
  );
};

export default Header;
