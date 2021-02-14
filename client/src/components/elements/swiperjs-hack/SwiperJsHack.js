import React, { useMemo } from 'react';
import uuid from 'react-uuid';
import SwiperCore, { Pagination, A11y, Keyboard } from 'swiper';
import { Swiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Workaroung for a to-be-solved issue :
// https://github.com/reactrondev/react-native-web-swiper/issues/22
const SwiperJsHack = ({ children }) => {
  const keyValue = useMemo(() => uuid(), [children]);
  SwiperCore.use([Pagination, A11y, Keyboard]);

  return (
    <Swiper
      key={keyValue}
      spaceBetween={20}
      slidesPerView={1.5}
      // loop
      pagination={{ clickable: true }}
      a11y={{
        prevSlideMessage: 'Previous article',
        nextSlideMessage: 'Next article',
      }}
    >
      {children}
    </Swiper>
  );
};

export default SwiperJsHack;
