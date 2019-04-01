import Layout from '../components/layout';
import SimpleSlider from '../components/Partner-slider';
import ServiceInfo from '../components/Service-info';

const Index = () => (
  <Layout>
    <div>
      <div id="carousel">
        <div className="carousel-img-gradient">
          <SimpleSlider />
        </div>
      </div>
    </div>
    <ServiceInfo />
    <style jsx>
      {`
        #carousel {
          width: 100%;
          height: 208px;
          text-align: center;
          margin: 0 auto;
        }
        .carousel-img-gradient {
          width: 100%;
          height: 208px;
          background-size: cover;
          background-repeat: no-repeat;
          background-image: url('/static/img/img_bg_carousel_shop.png'),
            -webkit-linear-gradient(137deg, #fda66f, #fda19c 51%, #fd70ba);
          background-image: url('/static/img/img_bg_carousel_shop.png'),
            -o-linear-gradient(137deg, #fda66f, #fda19c 51%, #fd70ba);
          background-image: url('/static/img/img_bg_carousel_shop.png'),
            -moz-linear-gradient(137deg, #fda66f, #fda19c 51%, #fd70ba);
          background-image: url('/static/img/img_bg_carousel_shop.png'),
            linear-gradient(137deg, #fda66f, #fda19c 51%, #fd70ba);
          background-blend-mode: soft-light;
        }
      `}
    </style>
  </Layout>
);

export default Index;
