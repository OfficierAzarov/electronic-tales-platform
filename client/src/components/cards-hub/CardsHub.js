import React, { Fragment } from 'react';

import './CardsHub.css';
import Card from '../card/Card';

import { articlesSource } from '../../mocks/articles';

const CardsHub = () => {
  const cards = articlesSource.map((article) => {
    return <Card article={article} />;
  });

  return (
    <div id="cards-hub">
      <div id="hub-header">
        <div>Too late to ask</div>
      </div>
      <div id="hub-content">{cards}</div>
    </div>
  );
};

export default CardsHub;
