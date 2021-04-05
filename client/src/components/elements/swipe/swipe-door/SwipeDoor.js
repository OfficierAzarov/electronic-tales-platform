import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';

import CardsHub from '../../cards-hub/CardsHub';

const SwipeDoor = ({ link }) => {
  const card = [
    {
      title: 'Le tinder du dev 🔥',
      externalLink: '/roadmap/clean-code',
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

  // return (
  //   <Fragment>
  //     <div className="line-title-wrapper category-title-wrapper">
  //       <h3 className="title">Too late to ask</h3>
  //     </div>
  //     <div className="w-cat-card-content">
  //       <img src={hands} alt="Some hands swiping" loading="auto" className="w-cat-card-img" />
  //       <Link to={link} className="w-cat-card-cta">
  //         <p>
  //           Toi aussi, tu te poses encore des questions dont tu devrais déjà connaître les
  //           réponses&nbsp;?
  //           <Emoji symbol="🔥" label="tinder fire" />
  //         </p>
  //       </Link>
  //     </div>
  //   </Fragment>
  // );
};

SwipeDoor.propTypes = {
  link: PropTypes.string.isRequired,
};

export default SwipeDoor;
