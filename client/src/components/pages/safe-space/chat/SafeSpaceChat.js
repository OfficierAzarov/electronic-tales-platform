import React from 'react';
import { useTranslation } from 'react-i18next';

import './SafeSpaceChat.css';

import MiniNav from '../../../elements/mini-nav/MiniNav';
import wordartSwag from '../../../../resources/img/wordart/wordart.png';
import wordartInternet from '../../../../resources/img/wordart/internet.png';
import wordartAnnees2000 from '../../../../resources/img/wordart/annees2000.png';
import Emoji from 'a11y-react-emoji';
import { SLACK } from '../../../../dictionnary/externalElectronicTalesLinks';
import { generateSanitizedDangerouslySetInnerHtml } from '../../../../utils/data-processing/sanitize';

const SafeSpaceChat = () => {

  const { t } = useTranslation();

  return (
    <div id="safe-space-chat" className="container">
      <div className="line-title-wrapper world-title-wrapper">
        <h2 className="world-title neon flicker">{t('safeSpace.title')}</h2>
      </div>
      <MiniNav />
      <div className="line-title-wrapper category-title-wrapper">
        <h3 className="title">{t('safeSpace.ourChat.title')}</h3>
      </div>
      <p id="connect">
        {t('safeSpace.ourChat.descriptionBeforeLink')}{' '}
        <a href={SLACK} target="_blank" rel="noopener noreferrer">
          Slack
        </a>{' '}
        {t('safeSpace.ourChat.descriptionAfterLink')}
        <br />
        <br />
        {t('safeSpace.ourChat.rules.intro')}
      </p>
      <ul dangerouslySetInnerHTML={generateSanitizedDangerouslySetInnerHtml(t('safeSpace.ourChat.rules.list'))}>
      </ul>
      <a href={SLACK} target="_blank" rel="noopener noreferrer" className="basic-button">
        {t('safeSpace.ourChat.join')}
      </a>
    </div>
  );
};

export default SafeSpaceChat;
