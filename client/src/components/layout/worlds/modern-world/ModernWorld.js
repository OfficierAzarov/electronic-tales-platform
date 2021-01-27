import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Fade from 'react-reveal/Fade';

import './ModernWorld.css';

import { getAllArticlesInfos } from '../../../../redux/actions/article';
import { deduceCategoriesFromArticles } from '../../../../utils/data-sorting/sorts';
import { MODERN_WORLD } from '../../../../dictionnary/worlds';
import SwipeDoor from '../../../elements/swipe/swipe-door/SwipeDoor';

const ModernWorld = ({ articles, getAllArticlesInfos }) => {
  useEffect(() => {
    getAllArticlesInfos(MODERN_WORLD);
  }, []);

  return (
    <Fade duration={1500}>
      <div id="modern-world" className="world-page container">
        <div className="line-title-wrapper world-title-wrapper">
          <h2 className="world-title neon flicker">Modern World</h2>
        </div>
        <div className="image-card">
          <SwipeDoor link="/modern-world/swipe" />
        </div>
        {deduceCategoriesFromArticles(articles)}
      </div>
    </Fade>
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
