import Image from 'next/image';
import React, { Component } from 'react';
import Slider from 'react-slick';

class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className="w-11/12 mx-auto">
        <Slider {...settings}>
          <div className="w-full h-56 relative">
            <Image
              className="rounded-lg"
              fill
              src="/main-banner.png"
              alt="main banner"
            />
          </div>
          <div className="w-full h-56 relative">
            <Image
              className="rounded-lg"
              fill
              src="/main-banner2.png"
              alt="main banner"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;
