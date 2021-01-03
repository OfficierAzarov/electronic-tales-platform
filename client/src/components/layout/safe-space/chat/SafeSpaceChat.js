import React from 'react';

import './SafeSpaceChat.css';

import MiniNav from '../../../elements/mini-nav/MiniNav';

const SafeSpaceChat = () => {
  return (
    <div id="safe-space-chat">
      <MiniNav />
      <p>
        Rejoins le safe space d'Electronic Tales sur Slack{' '}
        <a
          href="https://join.slack.com/t/electronictales/shared_invite/zt-kox8itw1-tveUHRe8QSTtjs0Bb172BA"
          target="_blank"
        >
          ici
        </a>
        &nbsp;!
      </p>
    </div>
  );
};

export default SafeSpaceChat;
