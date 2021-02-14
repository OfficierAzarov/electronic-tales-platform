import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css';
import HtmlContent from '../html-content/HtmlContent';

const Card = ({ articleLink, externalLink, imageUrl, title, size, placeText }) => {
  return (
    <Link
      to={{
        pathname: externalLink ? externalLink : articleLink,
      }}
      target={externalLink && '_blank'}
    >
      {/* <Link to={directLink ? { pathname: directLink } : link}> */}
      <div
        className={`card ${size == 'big' ? 'big' : ''}`}
        style={{
          backgroundImage: `url(${imageUrl})`,
          justifyContent: placeText == 'center' ? 'center' : 'flex-end',
        }}
      >
        <div className="card-title">
          <HtmlContent content={title} />
        </div>
      </div>
    </Link>
  );
};

export default Card;
