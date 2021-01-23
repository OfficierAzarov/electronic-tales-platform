import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import './Imaginarium.css';

import InteractiveImage from '../../../interactive-images/InteractiveImage';
import { getAllArticlesInfos } from '../../../../redux/actions/article';
import { IMAGINARIUM } from '../../../../dictionnary/worlds';
import { deduceCategoriesFromArticles } from '../../../../utils/data-sorting/sorts';

const Imaginarium = ({ articles, getAllArticlesInfos }) => {
  useEffect(() => {
    getAllArticlesInfos(IMAGINARIUM);
  }, []);

  return (
    <div id="modern-world" className="world-page container">
      <div className="line-title-wrapper world-title-wrapper">
        <h2 className="world-title">Imaginarium</h2>
      </div>
      <div className="image-card">
        <div className="line-title-wrapper category-title-wrapper">
          <h3 className="title">Too late to ask</h3>
        </div>
      </div>
      {deduceCategoriesFromArticles(articles)}
    </div>
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
