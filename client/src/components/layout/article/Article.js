import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import './Article.css';

import { setCurrentArticle } from '../../../actions/article';

const Article = ({ match, setCurrentArticle, article }) => {
  useEffect(() => {
    setCurrentArticle(match.params.slug);
  }, []);

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

Article.propTypes = {
  currentArticle: PropTypes.object.isRequired,
  setCurrentArticle: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  article: state.article.currentArticle,
});

export default connect(mapStateToProps, { setCurrentArticle })(Article);
