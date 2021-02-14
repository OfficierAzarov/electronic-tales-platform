import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Emoji from 'a11y-react-emoji';
import { PropTypes } from 'prop-types';

import hands from '../../../../resources/img/icons/swipe-hands.png';

const SwipeDoor = ({ link }) => {
  return (
    <Fragment>
      <div className="line-title-wrapper category-title-wrapper">
        <h3 className="title">Too late to ask</h3>
      </div>
      <div className="w-cat-card-content">
        {/* <div className="hot-label">Hot</div> */}
        <img src={hands} alt="Some hands swiping" loading="lazy" className="w-cat-card-img" />
        <Link to={link} className="w-cat-card-cta">
          <p>
            Toi aussi, tu te poses encore des questions dont tu devrais déjà connaître les
            réponses&nbsp;?
            <Emoji symbol="🔥" label="tinder fire" />
          </p>
        </Link>
      </div>
    </Fragment>
  );
};

SwipeDoor.propTypes = {
  link: PropTypes.string.isRequired,
};

export default SwipeDoor;
