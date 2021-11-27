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
      >
        {/* Si tu as deux minutes, tu peux passer nous signaler le problème (ou nous dire quelle est ta
        marque de chips préférée, on est toujours preneurs·euses de bons tuyaux à ce sujet) sur
        notre{' '}
        <a
          href="https://join.slack.com/t/electronictales/shared_invite/zt-kox8itw1-tveUHRe8QSTtjs0Bb172BA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Slack</span>&nbsp;🙏
        </a> */}
      </p>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
