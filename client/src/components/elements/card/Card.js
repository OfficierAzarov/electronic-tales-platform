import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css';
import HtmlContent from '../html-content/HtmlContent';

const Card = ({ link, imageUrl, title, size, placeText }) => {
  // const howToOpen = (linkType) => {
  //   switch(linkType) {
  //     case 'link':
  //       return linkType
  //   }
  // }

  return (
    <Link
      to={{
        pathname: link,
      }}
      // target={link && '_blank'}
    >
      <div
        className={`card ${size == 'big' ? 'big' : ''} border-shadow`}
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
