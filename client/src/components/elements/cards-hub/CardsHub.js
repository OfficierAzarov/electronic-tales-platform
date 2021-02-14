import React from 'react';
// import SwiperCore, { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import './CardsHub.css';
import Card from '../card/Card';
import { Fragment } from 'react';
import SwiperJsHack from '../swiperjs-hack/SwiperJsHack';

const CardsHub = ({ categoryName, categoryArticles, text }) => {
  return (
    <div className="cards-hub">
      <div className="line-title-wrapper category-title-wrapper">
        <h3 className="title">{categoryName}</h3>
      </div>
      <p>{text}</p>
      <div className="w-cat-card-content">
        {categoryArticles.length > 1 ? (
          <SwiperJsHack>
            {categoryArticles.map((article) => (
              <SwiperSlide key={article._id}>
                <Card
                  key={article._id}
                  articleLink={
                    article.type === 'regular' && `${article.world}/articles/${article.slug}`
                  }
                  externalLink={article.externalLink}
                  imageUrl={article.thumbnail}
                  title={article.title}
                />
              </SwiperSlide>
            ))}
          </SwiperJsHack>
        ) : (
          <Fragment>
            {categoryArticles.map((article) => (
              <Card
                key={article._id}
                articleLink={`/${article.world}/articles/${article.slug}`}
                externalLink={article.externalLink}
                imageUrl={article.thumbnail}
                title={article.title}
                size="big"
              />
            ))}
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default CardsHub;
