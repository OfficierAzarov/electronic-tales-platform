import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './ArticleContent.css';

import RichLink from '../../rich-link/RichLink';
import HtmlContent from '../../html-content/HtmlContent';
import article from '../../../../redux/reducers/article';

const ArticleContent = ({ articleContent }) => {
  // TO DO : solve it
  // content is undefined first, then it has the right value. Why?

  // const processContent = (content) => {
  //   if (content && content !== undefined) {
  //     const splittedContent = content.split(/\|(.*?)\|/);
  //     const htmlContent = splittedContent.map((part, index) => {
  //       return part.includes('richlink') ? (
  //         <RichLink contentId={part} key={index} />
  //       ) : (
  //         <HtmlContent content={part} key={index} />
  //       );
  //     });
  //     return htmlContent;
  //   }
  // };

  console.log('articleContent is ' + articleContent);

  return <div className="article-content">{articleContent}</div>;
  // return <div className="article-content">{processContent(articleContent)}</div>;
};

ArticleContent.propTypes = {
  articleContent: PropTypes.string.isRequired,
};

// const mapStateToProps = (state) => ({
//   articleContent: state.article.currentArticle.content,
// });

export default ArticleContent;
// export default connect(mapStateToProps)(ArticleContent);
