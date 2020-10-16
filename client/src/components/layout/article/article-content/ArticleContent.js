import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import RichLink from '../../../rich-link/RichLink';

const ArticleContent = ({ articleContent }) => {
    // TO DO : solve it
    // string is undefined first, then it has the right value. Why?


  const processContent = (string) => {
    if (string && string !== undefined) {
      const splittedContent = string.split(' ');

      // const replacement = splittedContent.find(element => element.includes('].')).split(/(?<=\])/);
      const toReplace = splittedContent.find(element => element.includes('].'));
      console.log(splittedContent.indexOf(toReplace));
      splittedContent[splittedContent.indexOf(toReplace)] = toReplace.split(/(?<=\])/);
      
      console.log(splittedContent.flat());
      const finalSplittedContent = splittedContent.flat();
      const regex = /(?<=\[)(.*?)(?=\])/;
      const enrichedSplittedContent = finalSplittedContent.map(part => {
        return part.match((regex)) ?
          (<RichLink contentId={stripString(part, '[', ']')}/>) : part + ' ';
      })
      console.log(enrichedSplittedContent);
      return enrichedSplittedContent;
    }
  }

  // Lorem ipsum [1] blabliblou et puis encore [2].

  const stripString = (wordToStrip, firstCharacterBorder, secondCharacterBorder) => {
    return wordToStrip.substring(wordToStrip.lastIndexOf(firstCharacterBorder) + 1, wordToStrip.lastIndexOf(secondCharacterBorder))
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