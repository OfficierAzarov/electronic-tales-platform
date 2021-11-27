import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { PropTypes } from 'prop-types';

import './Article.css';

import Error from '../error/Error';
import ArticleContent from './article-content/ArticleContent';
import Modal from '../modal/Modal';
import { getCurrentArticle, cleanCurrentArticle } from '../../../redux/actions/article';
import ReadingTime from '../reading-time/ReadingTime';
import GoBackButton from '../buttons/go-back/GoBackButton';
import HtmlContent from '../html-content/HtmlContent';

const Article = ({ match, article, getCurrentArticle, cleanCurrentArticle, preferredLanguage }) => {
  const { t } = useTranslation();

  useEffect(() => {
    getCurrentArticle(match.params.slug);
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
            <ReadingTime articleContent={article.content[preferredLanguage]} />
          </Fragment>
        )}
      </div>
      {article && article !== undefined ? (
        <Fragment>
          <h2>
            <HtmlContent content={article.title[preferredLanguage]} />
          </h2>
          <ArticleContent articleContent={article.content[preferredLanguage]} />
          <Modal />
        </Fragment>
      ) : (
        <Error
          title={t('common.errors.noArticle.title')}
          message={t('common.errors.noArticle.message')}
        />
      )}
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object.isRequired,
  getCurrentArticle: PropTypes.func.isRequired,
  cleanCurrentArticle: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  article: state.article.currentArticle,
  preferredLanguage: state.language.preferredLanguage,
});

export default connect(mapStateToProps, { getCurrentArticle, cleanCurrentArticle })(Article);
