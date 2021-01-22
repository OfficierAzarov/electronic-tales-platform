import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './Card.css';
import { IMAGES_URL } from '../../../utils/urls/urls';
import { ICONS_IMAGES_URL } from '../../../utils/urls/urls';

const Card = ({ article }) => {
  return (
    <Link to={`/modern-world/articles/regular-articles/${article.slug}`}>
      <div className="card">
        {/* <img src={`${IMAGES_URL}/${ICONS_IMAGES_URL}/${article.thumbnail}`} /> */}
        <img src={`${process.env.PUBLIC_URL}/${IMAGES_URL}/${ICONS_IMAGES_URL}/forest.jpg`} />
        {/* <div id="title">{article.title}</div> */}
        <div className="card-title">What is SSH ?</div>
      </div>
    </Link>
  );
};

export default Card;
