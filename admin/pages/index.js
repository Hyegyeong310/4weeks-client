import Layout from '../components/Layout';
import Link from 'next/link';

import axios from 'axios';

const Index = props => (
  <Layout style={{ width: '100%', padding: '0 20px' }}>
    <div className="m-3">
      <h2>홈 화면</h2>
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
