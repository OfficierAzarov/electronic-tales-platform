import React from 'react';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';

import './ArticleContent.css';

import RichLink from '../../../rich-link/RichLink';

const ArticleContent = ({ articleContent }) => {
    // TO DO : solve it
    // string is undefined first, then it has the right value. Why?


  const processContent = (string) => {
    if (string && string !== undefined) {
      const splittedContent = string.split(/\|(.*?)\|/);
      console.log(splittedContent);
      const htmlContent = splittedContent.map((part, index) => {
        return (part.includes('richlink')) ?
          (<RichLink contentId={part} key={index} />) : 
          <ReactMarkdown key={index} children={part}/>
      })
      console.log(htmlContent);
      return htmlContent;
    }
  }


  return (
    <div className="article-content">
        {processContent(articleContent)}
    </div>
    );
};

const mapStateToProps = (state) => ({
  articleContent: state.article.currentArticle.content
});

export default connect(mapStateToProps)(ArticleContent);