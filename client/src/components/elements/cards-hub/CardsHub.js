import React from 'react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import './CardsHub.css';
import Card from '../card/Card';
import { Fragment } from 'react';
import SwiperJsHack from '../swiperjs-hack/SwiperJsHack';

const CardsHub = ({ categoryName, categoryArticles, text }) => {
  const buildLink = (article) => {
    if (article.link != null) {
      return article.link;
    } else {
      return {
        path: `${article.world}/articles/${article.slug}`,
        openInNewTab: false,
      };
    }
  };

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
                  link={buildLink(article)}
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
                link={buildLink(article)}
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
