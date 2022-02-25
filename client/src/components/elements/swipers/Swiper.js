import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MODERN_WORLD_IMAGES_PATH } from '../../../dictionnary/internalImagesPathes';
import Card from '../card/Card';

import './Swiper.css';

const Swiper = ({ children }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
      slidesToSlide: 1.5, // optional, default to 1.
    },
  };

  return (
    <div id="swiper">
      <Carousel responsive={responsive} autoPlay={false}>
        {children}
      </Carousel>
    </div>
  );
};

Swiper.propTypes = {};

export default Swiper;
