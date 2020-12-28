import React, { Fragment } from 'react';

import './SafeSpaceDiscord.css';

import discord from '../../../../resources/img/icons/discord.png';

const SafeSpaceDiscord = ({ isVisible }) => {
  return (
    <div id="safe-space-discord">{isVisible && <img src={discord} />}</div>
  );
};

export default SafeSpaceDiscord;
