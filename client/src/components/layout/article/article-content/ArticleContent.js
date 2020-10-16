import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import RichLink from '../../../rich-link/RichLink';

const ArticleContent = ({ articleContent }) => {

  const processContent = (content) => {
    // TO DO : solve it
    // content is undefined first, then it has the right value. Why?
    if (content && content !== undefined) {
      console.log(content);
      const splittedContent = content.split(' ');
      const regex = /(?<=\[)(.*?)(?=\])/;
      const enrichedSplittedContent = splittedContent.map(part => {
        return part.match((regex)) ?
          (<RichLink contentId={part}/>) : part + ' ';
      })
      console.log(enrichedSplittedContent);
      return enrichedSplittedContent;
    }
  }

  return <div>{processContent(articleContent)}</div>;
};

const mapStateToProps = (state) => ({
  articleContent: state.article.currentArticle.content
});

export default connect(mapStateToProps)(ArticleContent);


// Lorem ipsum [info] bla bli blou

// Lorem ipsum
// Modale avec info
// bla bli blou