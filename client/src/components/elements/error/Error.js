import React from 'react';
import { PropTypes } from 'prop-types';
import Emoji from 'a11y-react-emoji';

import './Error.css';

const Error = ({ title, message }) => {
  return (
    <div className="error-container">
      <h1 className="neon flicker">{title}</h1>
      <p>
        {message}
        <br />
        <br />
        Si tu as deux minutes, tu peux passer nous signaler le problème (ou nous dire quelle est ta
        marque de chips préférée, on est toujours preneurs·euses de bons tuyaux à ce sujet) sur
        notre{' '}
        <a
          href="https://join.slack.com/t/electronictales/shared_invite/zt-kox8itw1-tveUHRe8QSTtjs0Bb172BA"
          target="_blank"
        >
          <span>Slack</span>
          <Emoji symbol="🙏" label="thank you" />
        </a>
      </p>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
