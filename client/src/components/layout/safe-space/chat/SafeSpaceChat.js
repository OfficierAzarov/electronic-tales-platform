import React from 'react';

import './SafeSpaceChat.css';

import MiniNav from '../../../elements/mini-nav/MiniNav';
import chat from '../../../../resources/img/icons/discord.png';

const SafeSpaceChat = () => {
  return (
    <div id="safe-space-chat">
      <MiniNav />
      <img src={chat} />
    </div>
  );
};

export default SafeSpaceChat;
