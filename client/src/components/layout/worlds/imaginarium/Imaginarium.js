import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Fade from 'react-reveal/Fade';

import './Imaginarium.css';

import { getAllArticlesInfos } from '../../../../redux/actions/article';
import { IMAGINARIUM } from '../../../../dictionnary/worlds';
import { deduceCategoriesFromArticles } from '../../../../utils/data-sorting/sorts';
import SwipeDoor from '../../../elements/swipe/swipe-door/SwipeDoor';

const Imaginarium = ({ articles, getAllArticlesInfos }) => {
  useEffect(() => {
    getAllArticlesInfos(IMAGINARIUM);
  }, []);

  return (
    <Fade duration={800}>
      <div id="modern-world" className="world-page container">
        <div className="line-title-wrapper world-title-wrapper">
          <h2 className="world-title">Imaginarium</h2>
        </div>
        <SwipeDoor link={`/${IMAGINARIUM}/too-late-to-ask`} />
        {deduceCategoriesFromArticles(articles)}
      </div>
    </Fade>
  );
};

Imaginarium.propTypes = {
  articles: PropTypes.array.isRequired,
  getAllArticlesInfos: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  articles: state.article.allArticles,
});

export default connect(mapStateToProps, { getAllArticlesInfos })(Imaginarium);
