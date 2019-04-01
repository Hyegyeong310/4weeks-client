import Layout from '../components/layout';
import Link from 'next/link';

const Login = () => (
  <Layout>
    <div className="wrap">
      <div style={{ padding: '10px' }}>
        <p className="title">젤라또 파트너 센터 로그인</p>
        <form>
          <div className="form-group">
            <label htmlFor="user-id">아이디</label>
            <input
              type="text"
              className="form-control custom-input"
              id="user-id"
              placeholder="아이디"
              required="required"
            />
          </div>
          <div className="form-group">
            <label htmlFor="user-password">비밀번호</label>
            <input
              type="password"
              className="form-control custom-input"
              id="user-password"
              placeholder="비밀번호"
              required="required"
            />
          </div>
          <div className="form-group form-check ">
            <input
              type="checkbox"
              className="form-check-input"
              id="keep-login"
            />
            <label className="form-check-label" htmlFor="keep-login">
              로그인 유지
            </label>
          </div>
          <div className="find-link-section">
            <Link href="#">
              <a
                className="form-text find-link"
                style={{ marginRight: '10px' }}
              >
                아이디 찾기
              </a>
            </Link>
            <Link href="#">
              <a className="form-text find-link">비밀번호 찾기</a>
            </Link>
          </div>
          <div style={{ clear: 'both' }} />
          <button type="submit" className="btn btn-dark btn-block">
            로그인
          </button>
        </form>
      </div>
      <div className="section-line" />
      <div className="section-register">
        <div className="text-style-1">
          아직 젤라또 파트너 회원이 아니신가요?
        </div>
        <div className="text-style-3">
          젤라또에 샵을 등록하고 홍보하는 것은 <span>무료</span> 입니다.
        </div>
        <Link href="shop-register">
          <button type="button" className="btn btn-dark register-btn">
            <a>샵 추가 요청</a>
          </button>
        </Link>
        <p>
          문의 :{' '}
          <Link href="https://pf.kakao.com/_AZxgNj">
            <a target="_blank" style={{ color: '#000' }}>
              카카오톡
            </a>
          </Link>
        </p>
      </div>
    </div>
    <style jsx>
      {`
        .wrap {
          width: 100%;
          max-width: 640px;
          margin: 0 auto;
        }
        .title {
          text-align: center;
          font-size: 16px;
          font-weight: 700;
        }
        .custom-input {
          border-radius: 0;
          font-size: 16px;
          background: rgb(250, 255, 189) !important;
          color: #000;
          padding: 20px 10px;
        }
        .find-link-section {
          float: right;
        }
        .find-link {
          display: inline-block;
          text-decoration: underline;
          color: #888;
        }
        .find-link:hover {
          color: #4a4a4a;
        }
        .btn {
          border-radius: 0;
          margin-top: 20px;
          font-size: 14px;
          padding: 10px;
        }
        .section-line {
          height: 7px;
          border-top: 1px solid #d9d9d9;
          background: #f1f1f1;
        }
        .section-register {
          text-align: center;
          padding: 30px 20px 20px;
        }
        .text-style-1 {
          font-size: 16px;
          margin-bottom: 14px;
        }
        .text-style-3 {
          font-weight: 300;
          color: #4a4a4a;
        }
        .text-style-3 span {
          font-weight: 400;
        }
      `}
    </style>
  </Layout>
);
export default Login;
