import React from 'react';
import { useHistory } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import './GoBackButton.css';

const GoBackButton = ({ timeOut }) => {
  const history = useHistory();

  return (
    <button id="go-back-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 0 0 512 512"
        version="1.1"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        onClick={() => {
          if (timeOut && timeOut !== undefined) {
            setTimeout(() => history.goBack(), timeOut);
          } else {
            history.goBack();
          }
        }}
      >
        <path d="M492 236H68.442l70.164-69.824c7.829-7.792 7.859-20.455.067-28.284-7.792-7.83-20.456-7.859-28.285-.068l-104.504 104-.018.019c-7.809 7.792-7.834 20.496-.002 28.314l.018.019 104.504 104c7.828 7.79 20.492 7.763 28.285-.068 7.792-7.829 7.762-20.492-.067-28.284L68.442 276H492c11.046 0 20-8.954 20-20s-8.954-20-20-20z"></path>
      </svg>
    </button>
  );
};

GoBackButton.propTypes = {
  timeOut: PropTypes.number,
};

export default GoBackButton;
