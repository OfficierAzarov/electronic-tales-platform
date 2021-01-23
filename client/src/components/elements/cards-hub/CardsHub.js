import React from 'react';
import SwiperCore, { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import './CardsHub.css';
import Card from '../card/Card';
import { Fragment } from 'react';

const CardsHub = ({ categoryName, categoryArticles, id }) => {
  SwiperCore.use([Pagination, A11y]);
  return (
    <div className="cards-hub" id={id}>
      <div className="line-title-wrapper category-title-wrapper">
        <h3 className="title">{categoryName}</h3>
      </div>
      <div className="w-cat-card-content">
        {categoryArticles.length > 1 ? (
          <Swiper
            spaceBetween={70}
            slidesPerView={2}
            loop
            pagination={{ clickable: true }}
            a11y={{
              prevSlideMessage: 'Previous article',
              nextSlideMessage: 'Next article',
            }}
          >
            {categoryArticles.map((article) => (
              <SwiperSlide key={article._id}>
                <Card article={article} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Fragment>
            {categoryArticles.map((article) => (
              <Card article={article} size="big" />
            ))}
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default CardsHub;
