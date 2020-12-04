import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './Card.css';
import { IMAGES_URL } from '../../../utils/urls/urls';
import { ICONS_IMAGES_URL } from '../../../utils/urls/urls';

const Card = ({ article }) => {

  // TO DO ! /modern-world/articles/:slug
  return (
    <Link to={`/articles/regular-articles/${article.slug}`}>
      <div className="card">
        <img src={`${IMAGES_URL}/${ICONS_IMAGES_URL}/${article.thumbnail}`} />
        <div id="title">{article.title}</div>
      </div>
    </Link>
  );
};

export default Card;