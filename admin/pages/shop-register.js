import { Component } from 'react';
import Layout from '../components/registerLayout';
import { Form, Button } from 'react-bootstrap';
import info from './register/info';
import axios from 'axios';
import config from '../config/config';
import Router from 'next/router';
class Register extends Component {
  constructor() {
    super();
    this.state = {
      shopName: '',
      addrUserInput: '',
      shopTel: '',
      ownerName: '',
      ownerMobileTel: '',
      agreePrivacy: false,
      agreeMarketing: false,
      agreeNotification: true,
      status: 'OPEN'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const data = { data: this.state };
    data.user = window.location.search.slice(1);
    axios({
      method: 'post',
      url: `${config.apiUrl}/register`,
      data: data
    })
      .then(res => {
        console.log('success! ', res);
        Router.push('/register-complete');
      })
      .catch(err => {
        console.log('err ', err);
      });
  }

  render() {
    return (
      <Layout>
        <div className="wrap">
          <h1 className="title">
            젤라또에
            <br />
            우리샵을 노출해보세요
          </h1>
          <p className="sub-title">
            아래의 간단한 정보만 입력해주시면
            <br />
            젤라또에 무료로 샵을 홍보 할 수 있습니다
          </p>
          <hr style={{ margin: '15px 0' }} />
          <Form onSubmit={this.handleSubmit}>
            {Object.keys(info.data).map((item, index) => (
              <div key={index}>
                <h3>{info.data[item].title}</h3>
                {info.data[item].info.map((el, idx) => (
                  <Form.Group key={idx}>
                    <Form.Label>{el.name}</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={el.place}
                      name={el.eName}
                      className="input"
                      required
                      onChange={e => {
                        return this.setState({ [el.eName]: e.target.value });
                      }}
                    />
                  </Form.Group>
                ))}
              </div>
            ))}
            <Form.Group
              controlId="info-collection-check"
              style={{ marginBottom: '10px' }}
            >
              <span className="info-label">
                개인정보 수집 및 이용을 위한 동의 (필수)
              </span>
              <div style={{ float: 'right' }}>
                <Form.Label as="legend" className="checkbox-label">
                  동의
                </Form.Label>
                <Form.Check
                  type="checkbox"
                  className="checkbox"
                  style={{
                    display: 'inline-block'
                  }}
                  required
                  onClick={() =>
                    this.setState({ agreePrivacy: !this.state.agreePrivacy })
                  }
                />
              </div>
              <div className="info-text">
                {info.text1.map((el, i) => (
                  <p key={i}>{el}</p>
                ))}
              </div>
            </Form.Group>
            <Form.Group
              controlId="formBasicChecbox"
              style={{ marginBottom: '10px' }}
            >
              <span className="info-label">광고성 정보 수신 (선택)</span>
              <div style={{ float: 'right' }}>
                <Form.Label as="legend" className="checkbox-label">
                  동의
                </Form.Label>
                <Form.Check
                  type="checkbox"
                  className="checkbox"
                  style={{ display: 'inline-block' }}
                  onClick={() =>
                    this.setState({
                      agreeMarketing: !this.state.agreeMarketing
                    })
                  }
                />
              </div>
            </Form.Group>
            <Form.Text className="text-muted" style={{ textAlign: 'left' }}>
              상기 본인은 “Gelato” 이용을 위한 정보 또는 사진을 제공함에 관하여
              완전한 권리를 보유하고 있고 사진이 제3자의 초상권 기타 어떠한
              권리도 침해하지 아니함을 보증하며 이를 “Gelato”에 게재함에
              동의합니다.
            </Form.Text>
            <Button
              className="btn-block"
              size="lg"
              variant="dark"
              type="submit"
              style={{ marginTop: '20px' }}
            >
              양식 제출 하기
            </Button>
          </Form>
        </div>
        <style jsx>
          {`
            .wrap {
              width: 100%;
              max-width: 640px;
              padding: 20px;
              margin: 0 auto;
            }
            .title {
              margin-bottom: 16px;
              font-weight: 800;
              font-size: 2rem;
              color: #000;
            }
            .sub-title {
              font-size: 14px;
              font-weight: 900;
              color: #7f7f7f;
              margin-bottom: 10px;
            }
            h3 {
              font-size: 16px;
              font-weight: 800;
              color: #232323;
            }
            .input {
              width: 100%;
              border: none;
              border-bottom: 1px solid #ddd;
              font-size: 14px;
              padding: 20px 10px;
            }
            .info-label {
              font-size: 0.95em;
              font-weight: 700;
            }
            .info-text {
              overflow-y: auto;
              width: 100%;
              padding: 8px;
              max-height: 100px;
              background: #f4f4f4;
            }
            .info-text > p {
              font-size: 12px;
              color: #a1a1a1;
            }
            .text-muted {
              font-size: 12px;
              color: #808080;
            }
            input[id='info-collection-check'] + label {
              display: inline-block;
              cursor: pointer;
              width: 18px;
              height: 18px;
              border: 1px solid #333131;
            }
          `}
        </style>
      </Layout>
    );
  }
}

export default Register;
