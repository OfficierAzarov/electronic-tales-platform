import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';

import CardsHub from '../../cards-hub/CardsHub';

const SwipeDoor = ({ link }) => {
  const card = [
    {
      title: 'Le tinder du dev 🔥',
      link: link,
      thumbnail: process.env.PUBLIC_URL + '/img/TLTA/cat.jpg',
    },
  ];

  return (
    <Fragment>
      <CardsHub
        categoryName="Too late to ask"
        categoryArticles={card}
        text="Toi aussi, tu te poses encore des questions dont tu devrais déjà connaître les
        réponses&nbsp;?"
      />
    </Fragment>
  );
};

SwipeDoor.propTypes = {
  link: PropTypes.string.isRequired,
};

export default SwipeDoor;
