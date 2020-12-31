import React from 'react';

import './SafeSpaceChat.css';

import chat from '../../../../resources/img/icons/discord.png';

const SafeSpaceChat = ({ isVisible }) => {
  return <div id="safe-space-chat">{isVisible && <img src={chat} />}</div>;
};

export default SafeSpaceChat;
