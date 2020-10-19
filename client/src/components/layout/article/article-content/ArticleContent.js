import React, { Fragment, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Markdown from 'markdown-to-jsx';
import { connect } from 'react-redux';

import RichLink from '../../../rich-link/RichLink';

const ArticleContent = ({ articleContent }) => {
    // TO DO : solve it
    // string is undefined first, then it has the right value. Why?


  const processContent = (string) => {
    if (string && string !== undefined) {
      const splittedContent = string.split(/\|(.*?)\|/);
      console.log(splittedContent);
      const htmlContent = splittedContent.map(part => {
        return (part.includes('richlink')) ?
          (<RichLink contentId={part}/>) : 
          <ReactMarkdown>{part}</ReactMarkdown>
      })
      console.log(htmlContent);
      return htmlContent;
    }
  }


  return (
    <div class="article-content">
        {processContent(articleContent)}
    </div>
    );
};

const mapStateToProps = (state) => ({
  articleContent: state.article.currentArticle.content
});

export default connect(mapStateToProps)(ArticleContent);