import React, { Fragment } from 'react';

import './CardsHub.css';
import Card from '../card/Card';

const CardsHub = ({ category: { name, articles }, id }) => {
  const dropCards = () => {
    // TO DO : animate
  };

  return (
    <div className="cards-hub" id={id} onClick={dropCards}>
      <div className="line-title-wrapper category-title-wrapper">
        <h3 className="title">{name}</h3>
      </div>
      <div className="w-cat-card-content hub-content">
        {articles.map((article) => (
          <Card key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default CardsHub;
