import Layout from '../components/Layout';
import axios from 'axios';
import React from 'react';
import Link from 'next/link';
import url from '../src/api/url';
const inputText = [
  '예시: 신규 가입 제안',
];
const style = {
  box: { flex: 10, margin: '20px', flexDirection: 'column' },
  input: {
    width: '40%',
    height: '50px'
  },
  text: { width: '70%', height: '400px', resize: 'none' },
  button: {
    width: 160,
    backgroundColor: 'skyblue',
    color: '#fff',
    margin: '10px',
    padding: '10px 20px'
  }
};
class CreateTemplete extends React.Component {
  state = {
    title: '',
    text: ''
  };

  async create() {
    let { title, text } = this.state;
    let res = await axios.post(`${url}users/message`, {
      title: title,
      message: text
    });
    console.log(res.data);
  }
  render() {
    return (
      <Layout>
        <div style={style.box}>
          <h1>Direct Message Template Create</h1>
          <div>
            <h2>Title</h2>
            <input
              placeholder={inputText[0]}
              style={style.input}
              onChange={e => this.setState({ title: e.target.value })}
            />
          </div>
          <div>
            <h2>Message</h2>
            <textarea
              placeholder={inputText[1]}
              style={style.text}
              onChange={e => this.setState({ text: e.target.value })}
            />
          </div>
          <Link href="/DMTL">
            <button style={style.button} onClick={this.create.bind(this)}>
              등록
            </button>
          </Link>
        </div>
      </Layout>
    );
  }
}
export default CreateTemplete;
