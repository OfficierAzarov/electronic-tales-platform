import React, { Fragment } from 'react';
import CardsHub from '../../cards-hub/CardsHub';

import './RoadmapDoor.css';

import { ROADMAP_IMAGES_PATH } from '../../../../dictionnary/internalImagesPathes';

const RoadmapDoor = () => {
  // This should normally come from the DB. We hardcode it here because it's still experimental. Please forgive us. With love, Electronic Tales Team.
  const card = [
    {
      _id: 'cleanCodeRoadmapId',
      title: 'Coder proprement : les bases',
      link: {
        path: '/roadmap/clean-code',
        openInNewTab: false,
      },
      thumbnail: process.env.PUBLIC_URL + ROADMAP_IMAGES_PATH + 'cleanCode.jpg',
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
