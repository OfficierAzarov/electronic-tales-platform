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
      // TO DO add ?, !, ...
      const toReplace = splittedContent.filter(element => element.includes('].') || element.includes(']!') || element.includes(']?'));


      for (let j = 0; j < splittedContent.length; j++) {
          for (let i  = 0; i < toReplace.length; i++) {
            if (toReplace[i] === splittedContent[j]) {
              splittedContent[j] = toReplace[i].split(/(?<=\])/);
            }
        }
      }

      const flatSplittedContent = splittedContent.flat();

      const regex = /(?<=\[)(.*?)(?=\])/;
      const enrichedSplittedContent = flatSplittedContent.map(part => {
        return part.match((regex)) ?
          (<RichLink contentId={stripString(part, '[', ']')}/>) : part + ' ';
      })

      return enrichedSplittedContent;
    }
  }


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