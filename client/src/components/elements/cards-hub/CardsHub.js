import React, { Fragment } from 'react';

import './CardsHub.css';
import Card from '../card/Card';

const CardsHub = ({ category: { name, articles } }) => {
  const dropCards = () => {
    // TO DO : animate
  };

  return (
    // <div id="cards-hub" onClick={handleClick}>
    <div id="cards-hub" onClick={dropCards}>
      <div id="hub-header">
        <div>{name}</div>
      </div>
      <div id="hub-content">
        {articles.map((article) => (
          <Card key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default CardsHub;
