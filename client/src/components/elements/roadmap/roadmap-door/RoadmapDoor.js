import React, { Fragment } from 'react';
import CardsHub from '../../cards-hub/CardsHub';
import { useTranslation } from 'react-i18next';

import './RoadmapDoor.css';

import { ROADMAP_IMAGES_PATH } from '../../../../dictionnary/internalImagesPathes';

const RoadmapDoor = () => {
  const { t } = useTranslation();

  // This should normally come from the DB. We hardcode it here because it's still experimental. Please forgive us. With love, Electronic Tales Team.
  const card = [
    {
      _id: 'cleanCodeRoadmapId',
      title: t('modernWorld.roadmap.cleanCode.title'),
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
        categoryName={t('modernWorld.roadmap.categoryTitle')}
        categoryArticles={card}
        text={t('modernWorld.roadmap.description')}
      />
    </Fragment>
  );
};

export default RoadmapDoor;
