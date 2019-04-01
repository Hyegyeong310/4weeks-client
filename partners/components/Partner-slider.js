import { Component } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div className="carousel-description">
              젤라또가 선정한 주제별 네일을
              <br />
              보고 이달의 아트를 구성해요
            </div>
            <div className="carousel-shop-name">송파, D 네일</div>
          </div>
          <div>
            <div className="carousel-description">
              젤라또를 통해
              <br />
              월평균 매출이 30% 늘었어요
            </div>
            <div className="carousel-shop-name">잠실, M 네일</div>
          </div>
          <div>
            <div className="carousel-description">
              제가 자신있는 디자인을
              <br />
              홍보할 수 있어서 좋아요
            </div>
            <div className="carousel-shop-name">이태원, D 네일</div>
          </div>
        </Slider>
        <Link href="shop-register">
          <button type="button" className="btn btn-light register-btn">
            샵 등록 바로가기
          </button>
        </Link>
        <style jsx>
          {`
            .carousel-description {
              margin-top: 36px;
              font-size: 25px;
              font-weight: 400;
              font-style: normal;
              font-stretch: normal;
              line-height: 30px;
              text-align: center;
              letter-spacing: -1.2px;
              color: #ffffff;
            }
            .carousel-shop-name {
              margin-top: 6px;
              font-size: 13px;
              font-weight: 400;
              line-height: 1.27;
              letter-spacing: -0.4px;
              text-align: center;
              color: #ffffff;
            }
          `}
        </style>
      </div>
    );
  }
}
