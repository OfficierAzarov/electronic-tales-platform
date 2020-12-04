import React from 'react';
import { PropTypes } from 'prop-types';

import './Error.css';

const Error = ({ title, message }) => {
  return (
    <div class="error-container">
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.object.isRequired,
};

export default Error;
