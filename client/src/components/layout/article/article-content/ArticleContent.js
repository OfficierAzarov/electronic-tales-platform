import React from 'react';
// import ReactMarkdownWithHtml from 'react-markdown/with-html';
import Markdown from 'markdown-to-jsx';
import { connect } from 'react-redux';
import { convertToCleanHtml } from '../../../../utils/Utils';

import './ArticleContent.css';

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
          <Markdown>{convertToCleanHtml(part)}</Markdown>
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