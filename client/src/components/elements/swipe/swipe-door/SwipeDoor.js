import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';

import CardsHub from '../../cards-hub/CardsHub';

const SwipeDoor = ({ link, text, id }) => {
  const card = [
    {
      _id: `${id}Id`,
      title: 'Le tinder du dev 🔥',
      link: {
        path: link,
        openInNewTab: false,
      },
      thumbnail: process.env.PUBLIC_URL + '/img/TLTA/cat.jpg',
    },
  ];

  return (
    <Fragment>
      <CardsHub categoryName="Too late to ask" categoryArticles={card} text={text} />
    </Fragment>
  );
};

SwipeDoor.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default SwipeDoor;
