import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './Card.css';
import { imagesUrl } from '../../utils/urls';
import { imagesIconsURl } from '../../utils/urls';

const Card = ({ article }) => {



  // TO DO ! /modern-world/articles/:slug
  return (
    <Link to={`/articles/${article.slug}`}>
      <div className="card">
        <img src={`${imagesUrl}${imagesIconsURl}${article.thumbnail}`} />
        <div id="title">{article.title}</div>
      </div>
    </Link>
  );
};

export default Card;
