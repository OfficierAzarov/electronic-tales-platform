import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './Swiper.css';

/**
 * The function takes in a children prop and returns a carousel with the children prop as the carousel
 * items
 * @returns A carousel with the children prop as the carousel items.
 */
/**
 * The function takes in a children prop and returns a carousel with the children prop as the carousel
 * items.
 */
const Swiper = ({ children }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
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
