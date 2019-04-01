import Layout from '../components/registerLayout';
import Link from 'next/link';

const RegisterComplete = () => (
  <Layout>
    <div>
      <img src="/static/register-complete.png" />
      {/*<p>
        감사합니다.
        <br />샵 추가 요청이 정상적으로 접수되었습니다.
      </p>
      <p>
        입력해주신 정보를 기반으로 내부검수 진행 후 입력해주신 원장님
        휴대폰번호로 연락을 드리겠습니다.
        <br />
        이외의 궁금하신 사항이 있으시면,
        <br />
        <Link href="#">
          <a>카카오 플로스친구 젤라또</a>
        </Link>
        에 문의해주세요.
      </p>*/}
    </div>
    <style jsx>
      {`
        div {
          margin: 0 auto;
          text-align: center;
        }
        img {
          max-width: 640px;
        }
      `}
    </style>
  </Layout>
);

export default RegisterComplete;
