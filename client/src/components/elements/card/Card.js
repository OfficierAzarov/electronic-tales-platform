import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css';
import HtmlContent from '../html-content/HtmlContent';

const Card = ({ link, imageUrl, title, size, placeText }) => {
  return (
    <Link
      to={{
        pathname: link.path,
      }}
      target={link.openInNewTab ? '_blank' : undefined}
    >
      <div
        className={`card ${size == 'big' ? 'big' : ''} border-shadow`}
        style={{
          backgroundImage: `url(${imageUrl})`,
          // *TODO: remove because it isn't used anywhere*
          // justifyContent: placeText == 'center' ? 'center' : 'flex-end',
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
