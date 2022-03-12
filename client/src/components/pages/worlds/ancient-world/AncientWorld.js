import React from 'react';
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';

import './AncientWorld.css';

import mamieCobol from '../../../../resources/img/illustrations/mcsorrycut.png';

const AncientWorld = () => {
  const { t } = useTranslation();

  return (
    <Fade duration={1500}>
      <div id="ancient-world" className="world-page container">
        <div className="line-title-wrapper world-title-wrapper">
          <h2 className="world-title">{t('ancientWorld.title')}</h2>
        </div>
        <div id="warning-wrapper">
          <div class="warning">{t('ancientWorld.temp.workinProgress')}</div>
          <div class="warning">{t('ancientWorld.temp.comeBackLater')}</div>
        </div>
        <img src={mamieCobol} alt={t('ancientWorld.temp.imageAlt')} />
      </div>
    </Fade>
  );
};

export default AncientWorld;
