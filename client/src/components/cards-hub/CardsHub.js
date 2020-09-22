import React, { Fragment } from 'react';

import './CardsHub.css';
import Card from '../card/Card';

const CardsHub = () => {
  return (
    <div id="cards-hub">
      <div id="hub-header">
        <div>Too late to ask</div>
      </div>
      <div id="hub-content">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardsHub;
