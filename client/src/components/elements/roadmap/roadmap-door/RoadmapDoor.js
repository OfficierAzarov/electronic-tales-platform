import React, { Fragment } from 'react';
import CardsHub from '../../cards-hub/CardsHub';

import './RoadmapDoor.css';

const RoadmapDoor = () => {
  const card = [
    {
      _id: 'cleanCodeRoadmapId',
      title: 'Coder proprement : les bases',
      link: {
        path: '/roadmap/clean-code',
        openInNewTab: false,
      },
      thumbnail: process.env.PUBLIC_URL + '/img/articles/maps.jpg',
    },
  ];

  return (
    <Fragment>
      <CardsHub
        categoryName="Roadmaps"
        categoryArticles={card}
        text="Perdu·e dans le monde du dev ? Nos cartes sont là pour te guider."
      />
    </Fragment>
  );
};

export default RoadmapDoor;
