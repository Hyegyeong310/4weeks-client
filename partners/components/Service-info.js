import Link from 'next/link';
import Story from './Story';
const info = [
  {
    backImg: '/static/img/img-nailart-app@3x.png',
    text: '20만 유저가 사용하는\nNo.1 네일아트 필수앱',
    text2: '국내 유일 서비스'
  },
  {
    backImg: '/static/img/img-nail-photo@3x.png',
    text: '실력있는 원장님들의\n트렌디한 디자인을 매주 소개',
    text2: "매주 믿고보는 젤라또's pick\n디자인 조회수 10,000회"
  },
  {
    backImg: '/static/img/img-input-info@3x.png',
    text: '한 번의 정보 등록으로\n간편한 입점',
    text2: '매월 샵 이벤트 소개도\n간편 지원'
  },
  {
    backImg: '/static/img/img-sns-marketing@3x.png',
    text: '다양한 SNS마케팅 기회',
    text2: '인스타그램/네이버/페이스북 등\n젤라또 SNS채널에 샵을 소개'
  }
];

const ServiceInfo = () => (
  <div>
    <div className="service-info">
      <div className="text-style-1 div-style-1">서비스 안내</div>
      <div className="text-style-2 div-style-2">젤라또가 샵을 홍보해드려요</div>
      <div className="text-style-3 div-style-3">
        원장님의 실력을 보여 줄 아트사진만 주세요
      </div>
      <div className="info-group">
        {info.map((el, i) => (
          <div key={i}>
            <div
              className="img-bg1"
              style={{ backgroundImage: `url(${el.backImg})` }}
            />
            <div className="text-style-4">
              {el.text.split('\n').map((line, i) => {
                return (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                );
              })}
            </div>
            <div className="text-style-5">
              {el.text2.split('\n').map((line, i) => {
                return (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <Link href="shop-register">
        <button
          type="button"
          style={{ margin: '50px auto 0' }}
          className="btn btn-dark register-btn"
        >
          <a>샵 등록 바로가기</a>
        </button>
      </Link>
      <hr className="shop-register-divider" />
    </div>
    <Story />
    <div className="service-gradient">
      <div className="text-style-10">
        젤라또는 현재 2,000여 원장님들과 함께하고 있어요. 지금 바로 젤라또에서
        원장님의 샵을 소개하세요!
      </div>
      <Link href="/shop-register">
        <button type="button" className="btn btn-light">
          샵 등록 바로가기
        </button>
      </Link>
    </div>
    <style jsx>
      {`
        .service-info {
          text-align: center;
        }
        .info-group > div {
          margin: 30px auto 0;
        }
        .shop-register-divider {
          border-botton: 1px solid #d1d1d1;
          margin: 80px auto 0;
        }
        .service-gradient {
          width: 100%;
          height: 208px;
          padding: 48px;
          text-align: center;
          background-image: -webkit-linear-gradient(
            137deg,
            #fda66f,
            #fda19c 51%,
            #fd70ba
          );
          background-image: -o-linear-gradient(
            137deg,
            #fda66f,
            #fda19c 51%,
            #fd70ba
          );
          background-image: -moz-linear-gradient(
            137deg,
            #fda66f,
            #fda19c 51%,
            #fd70ba
          );
          background-image: linear-gradient(
            137deg,
            #fda66f,
            #fda19c 51%,
            #fd70ba
          );
          background-blend-mode: soft-light;
        }
      `}
    </style>
  </div>
);

export default ServiceInfo;
