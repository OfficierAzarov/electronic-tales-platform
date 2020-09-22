import React, { Fragment } from 'react';

import './Card.css';

import ruins from '../../resources/img/icons/ruins.png';
import { article } from '../../mocks/article';

const Card = () => {
  console.log(article);

  return (
    <div id="card">
      <img src={`../../resources/img/icons/${article.thumbnail}`} />
      <div id="title">{article.title}</div>
    </div>
  );
};

export default Card;
