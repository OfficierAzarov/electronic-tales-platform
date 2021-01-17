import React from 'react';

import './CardsHub.css';
import Card from '../card/Card';

const CardsHub = ({ categoryName, categoryArticles, id }) => {
  return (
    <div className="cards-hub" id={id}>
      <div className="line-title-wrapper category-title-wrapper">
        <h3 className="title">{categoryName}</h3>
      </div>
      <div className="w-cat-card-content hub-content">
        {categoryArticles.map((article) => (
          <Card article={article} key={article._id} />
        ))}
      </div>
    </div>
  );
};

export default CardsHub;
