import React from 'react';

import ArticleContent from './article-content/ArticleContent';

const ArticleInterim = ({ article }) => {
  return (
    <div>
      <div id="article-container">
        <ArticleContent articleContent={article.content} />
      </div>
    </div>
  );
};

export default ArticleInterim;
