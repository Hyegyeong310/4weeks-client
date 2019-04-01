import { Component } from 'react';
import Layout from '../components/layout';
import { Form, FormText, Button } from 'react-bootstrap';
import info from './signUp/info';

class SignUp extends Component {
  constructor(...args) {
    super(...args);

    this.state = { validated: false };
  }
  handleSubmit(e) {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    this.setState({ validated: true });
  }
  render() {
    const { validated } = this.state;
    return (
      <Layout>
        <div className="wrap">
          <h1 className="title">
            젤라또 파트너센터
            <br />
            회원가입
          </h1>
          <p className="sub-title">
            아래의 정보를 입력하고,
            <br />
            파트너센터를 바로 이용해 보세요
          </p>
          <hr style={{ margin: '15px 0' }} />
          <Form
            noValidate
            validated={validated}
            onSubmit={e => this.handleSubmit(e)}
          >
            {Object.keys(info.data).map((item, index) => (
              <div key={index}>
                <h3>{info.data[item].title}</h3>
                {info.data[item].info.map((el, idx) => (
                  <Form.Group key={idx}>
                    <Form.Label>{el.name}</Form.Label>
                    <Form.Control
                      type={el.type}
                      placeholder={el.place}
                      name={el.eName}
                      className="input"
                      required
                    />
                    <FormText className="form-text">{el.helper}</FormText>
                  </Form.Group>
                ))}
              </div>
            ))}
            <hr style={{ margin: '15px 0' }} />
            {info.agree.map((el, idx) => (
              <Form.Group
                key={idx}
                controlId={idx}
                style={{ marginBottom: '10px' }}
              >
                <Form.Check
                  type="checkbox"
                  className="register-checkbox"
                  style={{ display: 'inline-block' }}
                  required={idx === info.agree.length - 1 ? false : true}
                />
                <Form.Label as="legend" className="checkbox-label">
                  {el}
                </Form.Label>
              </Form.Group>
            ))}

            <Button
              className="btn-block"
              size="lg"
              variant="dark"
              type="submit"
              style={{ marginTop: '20px' }}
            >
              회원가입
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
          `}
        </style>
      </Layout>
    );
  }
}

export default SignUp;
