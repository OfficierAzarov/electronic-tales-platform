import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import './Article.css';

import Error from '../../error/Error';
import { setCurrentArticle } from '../../../actions/article';

const Article = ({ match, setCurrentArticle, article, history }) => {
  useEffect(() => {
    setCurrentArticle(match.params.slug);
  }, []);

  return (
    <Fragment>
      {article && article !== undefined ? (
        <div>
          <h1>{article.title}</h1>
          <p>{article.content}</p>
        </div>
      ) : (
        <Error
          title="Aouch!"
          message="Looks like there's no article about this topic yet."
        />
      )}
    </Fragment>
  );
};

Article.propTypes = {
  // Problem : currentArticle is undefined until the useEffect call
  // currentArticle: PropTypes.object.isRequired,
  setCurrentArticle: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  article: state.article.currentArticle,
});

export default connect(mapStateToProps, { setCurrentArticle })(Article);
