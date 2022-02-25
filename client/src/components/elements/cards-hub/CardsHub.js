import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { connect } from 'react-redux';
import 'swiper/swiper-bundle.css';
import { PropTypes } from 'prop-types';
import './CardsHub.css';
import Card from '../card/Card';
import { Fragment } from 'react';
import Swiper from '../swipers/Swiper';

const CardsHub = ({ categoryName, categoryArticles, text, preferredLanguage }) => {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 768px)',
  });

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
      {text && <p>{text}</p>}
      <div className="w-cat-card-content">
        {categoryArticles.length > 1 ? (
          <Swiper>
            {categoryArticles.map((article) => {
              return (
                <Card
                  key={article._id}
                  link={buildLink(article)}
                  imageUrl={article.thumbnail}
                  title={article.title[preferredLanguage]}
                />
              );
            })}
          </Swiper>
        ) : (
          <Fragment>
            {categoryArticles.map((article) => (
              <Card
                key={article._id}
                link={buildLink(article)}
                imageUrl={article.thumbnail}
                title={article.title[preferredLanguage]}
                size="big"
              />
            ))}
          </Fragment>
        )}
      </div>
    </div>
  );
};

CardsHub.propTypes = {
  categoryName: PropTypes.string.isRequired,
  categoryArticles: PropTypes.array.isRequired,
  text: PropTypes.string,
  preferredLanguage: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  preferredLanguage: state.language.preferredLanguage,
});

export default connect(mapStateToProps)(CardsHub);
