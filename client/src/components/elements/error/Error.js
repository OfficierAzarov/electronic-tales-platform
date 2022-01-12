import React from 'react';
import { useTranslation } from 'react-i18next';
import { PropTypes } from 'prop-types';

import './Error.css';
import { generateSanitizedDangerouslySetInnerHtml } from '../../../utils/data-processing/sanitize';

const Error = ({ title, message }) => {
  const { t } = useTranslation();

  return (
    <div className="error-container">
      <h1 className="neon flicker">{title}</h1>
      <p>{message}</p>
      <p
        dangerouslySetInnerHTML={generateSanitizedDangerouslySetInnerHtml(
          t('common.errors.pleaseReport')
        )}
      ></p>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
