import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './Card.css';

const Card = ({ article }) => {
  return (
    <Link to={`articles/${article.slug}`}>
      <div className="card">
        <img src={`./img/icons/${article.thumbnail}`} />
        <div id="title">{article.title}</div>
      </div>
    </Link>
  );
};

export default Card;
