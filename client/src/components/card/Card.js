import React, { Fragment } from 'react';

import './Card.css';

const Card = ({ article }) => {
  return (
    <div class="card">
      <img src={`./img/icons/${article.thumbnail}`} />
      <div id="title">{article.title}</div>
    </div>
  );
};

export default Card;
