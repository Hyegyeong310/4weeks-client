// register.js
import Layout from '../components/layout';
import Link from 'next/link';
import info from './register/info';
import axios from 'axios';
import style from './register/style';
import { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopName: '',
      shopAdress: '',
      shopNumber: '',
      userName: '',
      userNumber: '',
      necessary: false,
      select: false
    };
  }
  mapping(el, place, eName, i) {
    return (
      <div key={i}>
        <style jsx>{style}</style>
        <div className="form-group line flex">
          <label htmlFor="InputShopName">{el}</label>
          <input
            type="text"
            className="form-control input"
            id="InputShopName"
            name={eName}
            placeholder={place}
            onChange={e => {
              return this.setState({ [eName]: e.target.value });
            }}
          />
        </div>
      </div>
    );
  }

  input() {
    return Object.keys(info.data).map(index => {
      return (
        <div key={index} style={{ width: '640px', margin: '20px auto' }}>
          <style jsx>{style}</style>

          <h4>{index}</h4>
          <div>
            {info.data[index].name.map((el, i) => {
              let place = info.data[index].place[i];
              let eName = info.data[index].eName[i];
              return this.mapping(el, place, eName, i);
            })}
          </div>
        </div>
      );
    });
  }

  agree() {
    const sq = { margin: '20px auto' };
    const style = { float: 'left', fontSize: '14px' };
    const checkbox = {
      flex: 0.5,
      width: '25px',
      height: '25px',
      border: '1px soild #333131',
      marginRight: '.5em',
      verticalAlign: 'middle'
    };
    const arr = ['necessary', 'select'];
    return info.agree.map((el, i) => {
      return (
        <div key={i} style={sq}>
          <style jsx>{style}</style>

          <div className="flex flexCenter">
            <h4 children={el} style={style} />
            <span style={{ float: 'right' }}>
              <span
                style={{
                  flex: 0.5,
                  textAlign: 'center',
                  margin: '0 5px',
                  fontSize: '12px'
                }}
              >
                동의
              </span>
              <input
                type="checkbox"
                style={checkbox}
                onClick={() =>
                  this.setState({ [arr[i]]: !this.state.necessary })
                }
              />
            </span>
            <div style={{ clear: 'both' }} />
          </div>
          <div className="msg">
            {info[`text${i + 1}`].map((el, i) => {
              return <p key={i}>{el}</p>;
            })}
          </div>
        </div>
      );
    });
  }
  submit() {
    /*
    if (true) {
      console.log(this.state);
    } else {
      return async () => {
        // const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman');
        const res = await axios.get('https://koreanjson.com/posts');
        const data = await res.data;
        console.log(`Show data fetched. Count: ${data.length}`);
        return {
          data: data
        };
      };
    }*/
  }
  render() {
    return (
      <Layout>
        <div className="register-wrap">
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
          <form>
            <ul>
              <li>{this.input()}</li>
              <li>{this.agree()}</li>
              <li>
                <button
                  className="submit flex btn-lg btn-block btn-dark"
                  type="submit"
                  onClick={this.submit.bind(this)}
                >
                  양식 제출 하기
                </button>
              </li>
            </ul>
          </form>
        </div>
        <style jsx>
          {`
            .register-wrap {
              width: 100%;
              max-width: 640px;
              margin: 0 auto;
              padding: 20px 0;
            }
            .title {
              font-size: 30px;
              color: #000;
              font-weight: 800;
              margin-bottom: 10px;
            }
            .sub-title {
              font-size: 14px;
              font-weight: 600;
              color: #7f7f7f;
              margin-bottom: 10px;
            }
            .register-input {
              width: 100%;
              border: none;
              border-bottom: 1px solid #ddd;
              font-size: 14px;
              padding: 20px 10px;
            }
            .btn-lg {
              border-radius: 0;
              margin-top: 20px;
            }
          `}
        </style>
      </Layout>
    );
  }
}

export default Register;

// FFA0A1 분홍색
// FFA489 주황색
// FF9797 글자색
