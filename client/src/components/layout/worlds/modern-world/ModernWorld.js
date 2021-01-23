import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import './ModernWorld.css';

import { getAllArticlesInfos } from '../../../../redux/actions/article';
import { goUp } from '../../../../utils/display/positionning';
import { deduceCategoriesFromArticles } from '../../../../utils/data-sorting/sorts';
import { MODERN_WORLD } from '../../../../dictionnary/worlds';
import SwipeDoor from '../../../elements/swipe/swipe-door/SwipeDoor';

const ModernWorld = ({ articles, getAllArticlesInfos }) => {
  useEffect(() => {
    getAllArticlesInfos(MODERN_WORLD);
  }, [articles]);

  useEffect(() => {
    goUp();
  }, []);

  return (
    <div id="modern-world" className="world-page container">
      <div className="line-title-wrapper world-title-wrapper">
        <h2 className="world-title">Modern World</h2>
      </div>
      <div className="image-card">
        <SwipeDoor link="/modern-world/swipe" />
        {/* <div className="w-cat-card-content"> */}
        {/* <div className="hot-label">Hot</div> */}
        {/* <img src={hands} alt="Some hands swiping" loading="lazy" className="w-cat-card-img" />
          <Link to="/modern-world/swipe" className="w-cat-card-cta">
            Let's go for a swipe <Emoji symbol="🔥" label="tinder fire" />
          </Link>
        </div> */}
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
