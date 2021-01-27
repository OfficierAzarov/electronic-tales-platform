import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import './Article.css';

import Error from '../error/Error';
import ArticleContent from './article-content/ArticleContent';
import Modal from '../modal/Modal';
import { setCurrentArticle } from '../../../redux/actions/article';
import ReadingTime from '../reading-time/ReadingTime';
import GoBackButton from '../buttons/go-back/GoBackButton';

const Article = ({ match, setCurrentArticle, article }) => {
  useEffect(() => {
    console.log('article fired');
    setCurrentArticle(match.params.slug);
  }, []);

  return (
    <div id="article-container">
      <div id="article-head">
        <GoBackButton />
        <ReadingTime articleContent={article.content} />
      </div>
      {article && article !== undefined ? (
        <Fragment>
          <h1>{article.title}</h1>
          <ArticleContent articleContent={article.content} />
          <Modal />
        </Fragment>
      ) : (
        <Error title="Aouch!" message="Looks like there's no article about this topic yet." />
      )}
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object.isRequired,
  setCurrentArticle: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  article: state.article.currentArticle,
});

export default connect(mapStateToProps, { setCurrentArticle })(Article);
