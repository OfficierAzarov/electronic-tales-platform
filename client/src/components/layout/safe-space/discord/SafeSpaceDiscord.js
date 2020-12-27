import React, { Fragment } from 'react';

import './SafeSpaceDiscord.css';

import discord from '../../../../resources/img/icons/discord.png';

const SafeSpaceDiscord = ({ isVisible }) => {
  return <Fragment>{isVisible && <img src={discord} />}</Fragment>;
};

export default SafeSpaceDiscord;
