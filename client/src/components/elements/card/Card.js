import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './Card.css';
import { IMAGES_URL } from '../../../utils/urls/urls';
import { ARTICLES_IMAGES_URL } from '../../../utils/urls/urls';

const Card = ({ article, size }) => {
  return (
    <Link to={`/modern-world/articles/regular-articles/${article.slug}`}>
      <div className={`card ${size != 'big' || 'big'}`}>
        <img
          src={`${process.env.PUBLIC_URL}/${IMAGES_URL}/${ARTICLES_IMAGES_URL}/${article.thumbnail}`}
        />
        <div className="card-title">{article.title}</div>
      </div>
    </Link>
  );
};

export default Card;
