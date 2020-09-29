import React, { Fragment } from 'react';

import './CardsHub.css';
import Card from '../card/Card';

const CardsHub = ({ category: { name, articles } }) => {
  return (
    <div id="cards-hub">
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
