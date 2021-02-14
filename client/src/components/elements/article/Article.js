import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import './Article.css';

import Error from '../error/Error';
import ArticleContent from './article-content/ArticleContent';
import Modal from '../modal/Modal';
import { setCurrentArticle, cleanCurrentArticle } from '../../../redux/actions/article';
import ReadingTime from '../reading-time/ReadingTime';
import GoBackButton from '../buttons/go-back/GoBackButton';
import HtmlContent from '../html-content/HtmlContent';

const Article = ({ match, setCurrentArticle, cleanCurrentArticle, article }) => {
  useEffect(() => {
    setCurrentArticle(match.params.slug);
    return () => {
      cleanCurrentArticle();
    };
  }, []);

  return (
    <div id="article-container">
      <div id="article-head">
        {article && (
          <Fragment>
            <GoBackButton />
            <ReadingTime articleContent={article.content} />
          </Fragment>
        )}
      </div>
      {article && article !== undefined ? (
        <Fragment>
          <h1>
            <HtmlContent content={article.title} />
          </h1>
          <ArticleContent articleContent={article.content} />
          <Modal />
        </Fragment>
      ) : (
        <Error
          title="Aouch!"
          message="On dirait que les Talers ont oublié de parler de ce sujet... Pour le moment."
        />
      )}
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object.isRequired,
  setCurrentArticle: PropTypes.func.isRequired,
  cleanCurrentArticle: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  article: state.article.currentArticle,
});

export default connect(mapStateToProps, { setCurrentArticle, cleanCurrentArticle })(Article);
