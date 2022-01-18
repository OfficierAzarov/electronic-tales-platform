import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import './RoadmapDoor.css';

import CardsHub from '../../cards-hub/CardsHub';
import { ROADMAP_IMAGES_PATH } from '../../../../dictionnary/internalImagesPathes';

const RoadmapDoor = ({ preferredLanguage }) => {
  const { t } = useTranslation();

  // This should normally come from the DB. We hardcode it here because it's still experimental. Please forgive us. With love, Electronic Tales Team.
  const card = [
    {
      _id: 'cleanCodeRoadmapId',
      title: {
        fr: 'Coder proprement : les bases',
        en: 'Clean code fundamentals',
      },
      link: {
        path: '/roadmap/clean-code',
        openInNewTab: false,
      },
      thumbnail: process.env.PUBLIC_URL + ROADMAP_IMAGES_PATH + 'cleanCode.jpg',
    },
  ];

  return preferredLanguage == 'fr' ? (
    <Fragment>
      <CardsHub
        categoryName={t('modernWorld.roadmap.categoryTitle')}
        categoryArticles={card}
        text={t('modernWorld.roadmap.description')}
      />
    </Fragment>
  ) : null;
};

const mapStateToProps = (state) => ({
  preferredLanguage: state.language.preferredLanguage,
});

export default connect(mapStateToProps)(RoadmapDoor);
