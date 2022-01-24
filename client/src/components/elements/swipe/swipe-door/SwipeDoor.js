import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import { useTranslation } from 'react-i18next';

import CardsHub from '../../cards-hub/CardsHub';

const SwipeDoor = ({ link, text, id }) => {
  const { t } = useTranslation();

  // This should normally come from the DB. We hardcode it here because it's still experimental. Please forgive us. With love, Electronic Tales Team.
  const card = [
    {
      _id: `${id}Id`,
      title: {
        fr: t('common.tooLateToAsks.title'),
        en: t('common.tooLateToAsks.title'),
      },
      link: {
        path: link,
        openInNewTab: false,
      },
      thumbnail: process.env.PUBLIC_URL + '/img/TLTA/cat.jpg',
    },
  ];

  return (
    <Fragment>
      <CardsHub
        categoryName={t('common.tooLateToAsks.categoryTitle')}
        categoryArticles={card}
        text={text}
      />
    </Fragment>
  );
};

SwipeDoor.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default SwipeDoor;
