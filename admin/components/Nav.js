import { Component } from 'react';
import Link from './Link';

export default class NavMenu extends Component {
  render() {
    return (
      <header>
        {/*<Navbar bg="white" expand="lg" fixed="top">
          <Navbar.Brand>
            <Link href="/">
              <div className="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Link activeClassName="active" href="/">
                <Nav.Link href={'/'}>
                  서비스 안내 <span className="sr-only">(current)</span>
                </Nav.Link>
              </Link>
              <Link activeClassName="active" href="/faq">
                <Nav.Link href={'/faq'}>FAQ</Nav.Link>
              </Link>
              <Link activeClassName="active" href="/login">
                <Nav.Link href={'/login'}>로그인</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
    </Navbar>*/}
        <nav className="navbar navbar-expand-lg">
          <Link href="/">
            <a className="navbar-brand logo" />
          </Link>
          <div
            className=" justify-content-end "
            id="basic-navbar-nav"
            style={{ position: 'absolute', right: '0' }}
          >
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-item ">
                <Link activeClassName="active" href="/">
                  <a className="nav-link">
                    서비스 안내 <span className="sr-only">(current)</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link activeClassName="active" href="/faq">
                  <a className="nav-link">FAQ</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link activeClassName="active" href="/login">
                  <a className="nav-link">로그인</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <style jsx>
          {`
            .logo {
              width: 54px;
              height: 18px;
              margin-left: 23px;
              background-size: cover;
              background-image: url('/static/img/gelato_logo.png');
              float: left;
              cursor: pointer;
            }
            @media only screen and (max-width: 768px) {
              .logo {
                margin: 0;
              }
            }
          `}
        </style>
      </header>
    );
  }
}
