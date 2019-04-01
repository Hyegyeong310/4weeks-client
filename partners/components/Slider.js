// Slider.js

import { Component } from 'react';
import Slider from 'react-slick';

const NextArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'hsla(0,0%,100%,.2)'
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'hsla(0,0%,100%,.2)'
      }}
      onClick={onClick}
    />
  );
};
class SimpleSlider extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      NextArrow: <NextArrow className="slider-arrow" />,
      PrevArrow: <PrevArrow className="slider-arrow" />
    };
    return (
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
