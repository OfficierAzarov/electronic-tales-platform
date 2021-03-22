import React, { Fragment } from 'react';
import CardsHub from '../../cards-hub/CardsHub';

import './RoadmapDoor.css';

const RoadmapDoor = () => {
  const card = [
    {
      title: 'Coder proprement : les bases',
      externalLink: '/roadmap/clean-code',
      thumbnail: process.env.PUBLIC_URL + '/img/articles/maps.png',
    },
  ];

  return (
    <Fragment>
      <CardsHub
        categoryName="Roadmaps"
        categoryArticles={card}
        text="Perdu·e dans le monde du développement ? Nos cartes sont là pour te guider."
      />
    </Fragment>
  );
};

export default RoadmapDoor;
