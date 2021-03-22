import React from 'react';
import PropTypes from 'prop-types';
import GoBackButton from '../GoBackButton';

import './GoBackWithText.css';

const GoBackWithText = ({ text, align }) => {
  return (
    <div class="go-back-button-container" style={{ alignSelf: align }}>
      <GoBackButton />
      <sub>{text}</sub>
    </div>
  );
};

GoBackWithText.propTypes = {
  text: PropTypes.string.isRequired,
  align: PropTypes.string,
};

export default GoBackWithText;
