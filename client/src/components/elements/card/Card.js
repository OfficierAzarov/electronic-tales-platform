import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './Card.css';
import { IMAGES_URL } from '../../../utils/urls/urls';
import { ARTICLES_IMAGES_URL } from '../../../utils/urls/urls';
import HtmlContent from '../html-content/HtmlContent';

const Card = ({ link, imageUrl, title, size, placeText }) => {
  return (
    <Link to={link}>
      {/* <Link to={`/${article.world}/articles/${article.slug}`}> */}
      <div
        className={`card ${size == 'big' ? 'big' : ''}`}
        style={{
          backgroundImage: `url(${imageUrl})`,
          // backgroundImage: `url(${article.thumbnail})`,
          justifyContent: placeText == 'center' ? 'center' : 'flex-end',
        }}
      >
        <div className="card-title">
          <HtmlContent content={title} />
          {/* <HtmlContent content={article.title} /> */}
        </div>
      </div>
    </Link>
  );
};

export default Card;
