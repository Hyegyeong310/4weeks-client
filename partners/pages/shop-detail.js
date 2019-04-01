import Layout from '../components/layout';
import FooterMenu from '../components/Footer-menu';
import { Component } from 'react';
import SimpleSlider from '../components/Slider';

export default class ShopDetail extends Component {
  render() {
    return (
      <Layout>
        <SimpleSlider />
        <div className="content">
          <div className="shop-name">
            <h1>도도네일</h1>
          </div>
          <div>
            <h3 className="sub-title">메뉴 및 가격</h3>
          </div>
          <div>
            <h3 className="sub-title">매장정보</h3>
          </div>
        </div>
        <FooterMenu />
        <style jsx>
          {`
            .shop-slider {
              width: 100%;
              height: 210px;
              background: #000;
            }
            .content {
              padding: 20px;
            }
            .shop-name {
              width: 100%;
            }
            .shop-name h1 {
              font-size: 1.5em;
              font-weight: 500;
              color: #000;
            }
          `}
        </style>
      </Layout>
    );
  }
}
