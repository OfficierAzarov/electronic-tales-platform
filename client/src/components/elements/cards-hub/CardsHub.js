import React from 'react';
import SwiperCore, { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import './CardsHub.css';
import Card from '../card/Card';

const CardsHub = ({ categoryName, categoryArticles, id }) => {
  SwiperCore.use([Pagination, A11y]);
  return (
    <div className="cards-hub" id={id}>
      <div className="line-title-wrapper category-title-wrapper">
        <h3 className="title">{categoryName}</h3>
      </div>
      <div className="w-cat-card-content">
        <Swiper
          spaceBetween={55}
          slidesPerView={2}
          loop
          pagination={{ clickable: true }}
          a11y={{
            prevSlideMessage: 'Previous article',
            nextSlideMessage: 'Next article',
          }}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {categoryArticles.map((article) => (
            <SwiperSlide key={article._id}>
              <Card article={article} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CardsHub;
