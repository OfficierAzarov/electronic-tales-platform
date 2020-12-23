import React, { Fragment } from 'react';

import './CardsHub.css';
import Card from '../card/Card';

const CardsHub = ({ category: { name, articles } }) => {
  const dropCards = () => {
    // TO DO : animate
  };

  return (
    <div className="cards-hub" onClick={dropCards}>
      <div className="hub-header">
        <p>{name}</p>
      </div>
      <div className="hub-content">
        {articles.map((article) => (
          <Card article={article} key={article.id} />
        ))}
      </div>
    </div>
  );
};

export default CardsHub;
