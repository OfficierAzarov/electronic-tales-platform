import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Emoji from 'a11y-react-emoji';

import './ModernWorld.css';
import CardHub from '../../../elements/cards-hub/CardsHub';
import Hands from './../../../../resources/img/icons/swipe-hands.png';

import { groupBy } from '../../../../utils/data-sorting/groupBy';
import { getAllArticlesInfos } from '../../../../redux/actions/article';
import { goUp } from '../../../../utils/display/positionning';

const ModernWorld = ({ articles, getAllArticlesInfos }) => {
  useEffect(() => {
    getAllArticlesInfos();
  }, []);

  useEffect(() => {
    goUp();
  }, []);

  const deduceCategoriesFromArticles = (articles) => {
    if (articles.length != 0) {
      let categories = groupBy(articles, 'category');
      const componentsToReturn = [];
      for (let i = 0; i < Object.keys(categories).length; i++) {
        const categoryName = Object.keys(categories)[i];
        const categoryArticles = categories[Object.keys(categories)[i]];
        componentsToReturn.push(
          <CardHub
            key={i}
            categoryName={categoryName}
            categoryArticles={categoryArticles}
            id={`category-${i}`}
          />
        );
      }
      return componentsToReturn;
    }
  };

  return (
    <div id="modern-world" className="world-page container">
      <div className="line-title-wrapper world-title-wrapper">
        <h2 className="world-title">Modern World</h2>
      </div>
      <div className="image-card">
        <div className="line-title-wrapper category-title-wrapper">
          <h3 className="title">Too late to ask</h3>
        </div>
        <div className="w-cat-card-content">
          {/* <div className="hot-label">Hot</div> */}
          <img src={Hands} alt="Some hands swiping" loading="lazy" className="w-cat-card-img" />
          <Link to="/modern-world/swipe" className="w-cat-card-cta">
            Let's go for a swipe <Emoji symbol="🔥" label="tinder fire" />
          </Link>
        </div>
      </div>
      {deduceCategoriesFromArticles(articles)}
    </div>
  );
};

ModernWorld.propTypes = {
  articles: PropTypes.array.isRequired,
  getAllArticlesInfos: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  articles: state.article.allArticles,
});

export default connect(mapStateToProps, { getAllArticlesInfos })(ModernWorld);
