import React from 'react';
import PropTypes from 'prop-types';

import './ArticleContent.css';

import RichLink from '../../rich-link/RichLink';
import HtmlContent from '../../html-content/HtmlContent';

const ArticleContent = ({ articleContent }) => {
  const processContent = (content) => {
    if (content && content !== undefined) {
      const splittedContent = content.split(/\|(.*?)\|/);
      const htmlContent = splittedContent.map((part, index) => {
        return part.includes('richlink') ? (
          <RichLink contentId={part} key={index} />
        ) : (
          <HtmlContent content={part} key={index} />
        );
      });
      return htmlContent;
    }
  };
  return <div className="article-content">{processContent(articleContent)}</div>;
};

ArticleContent.propTypes = {
  articleContent: PropTypes.string.isRequired,
};

export default ArticleContent;
