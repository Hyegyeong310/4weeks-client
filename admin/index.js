import App from './App/App';
import Link from 'next/link';

import axios from 'axios';

const Index = props => (
  <Layout>
    <div className="m-3">
      <h2>홈 화면</h2>
      <ul className="list-group">
        {props.data.map(({ id, title }) => (
          <li className="list-group-item" key={id}>
            <Link as={`/${id}`} href={`https://koreanjson.com/posts/${id}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await axios.get('https://koreanjson.com/posts');
  const data = await res.data;
  return {
    data: data
  };
};

export default Index;
