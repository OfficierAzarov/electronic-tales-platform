import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import './Tabs.css';

import modernWorld from '../../../resources/gifs/modern-world.gif';
import ancientWorld from '../../../resources/gifs/ancient-world.gif';
import imaginarium from '../../../resources/gifs/imaginarium.gif';
import { generateSanitizedDangerouslySetInnerHtml } from '../../../utils/data-processing/sanitize';

const Tabs = ({}) => {
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState('modern-world');

  const show = (worldId) => {
    setActiveTab(worldId);
  };

  const shouldIShow = (worldId) => {
    return activeTab === worldId;
  };

  const worlds = [
    {
      id: 'modern-world',
      title: 'Modern World',
      desc: t('home.desktopVersion.tracksTabs.worlds.id1.text'),
      descMobile: t('home.desktopVersion.tracksTabs.worlds.id1.textMobile'),
      baseline: t('home.desktopVersion.tracksTabs.worlds.id1.baseline'),
      imgSrc: modernWorld,
      imgAlt: 'modern world gif',
    },
    {
      id: 'ancient-world',
      title: 'Ancient World',
      desc: t('home.desktopVersion.tracksTabs.worlds.id2.text'),
      descMobile: t('home.desktopVersion.tracksTabs.worlds.id2.textMobile'),
      baseline: t('home.desktopVersion.tracksTabs.worlds.id2.baseline'),
      imgSrc: ancientWorld,
      imgAlt: 'ancient world gif',
    },
    {
      id: 'imaginarium',
      title: 'Imaginarium',
      desc: t('home.desktopVersion.tracksTabs.worlds.id3.text'),
      descMobile: t('home.desktopVersion.tracksTabs.worlds.id3.textMobile'),
      baseline: t('home.desktopVersion.tracksTabs.worlds.id3.baseline'),
      imgSrc: imaginarium,
      imgAlt: 'imaginarium gif',
    },
  ];

  return (
    <div id="tabs-container">
      <div id="world">
        <div>
          <div id="tabs">
            {worlds.map((world) => (
              <div
                id={world.id}
                key={world.id}
                className="tab-title"
                onClick={() => show(world.id)}
                style={{
                  textShadow: shouldIShow(world.id)
                    ? '0 0 0.4em rgb(0, 225, 255), 0 0 0.8em rgb(0, 225, 255), 0 0 1.6em rgb(0, 255, 255)'
                    : 'none',
                }}
              >
                {world.title}
              </div>
            ))}
          </div>
        </div>

        {worlds.map((world) => (
          <div key={world.id}>
            <div
              className="content-container"
              id={world.id}
              style={{
                display: shouldIShow(world.id) ? '' : 'none',
              }}
            >
              <img src={world.imgSrc} alt={world.alt} />
              <div className="text-container">
                <p
                  dangerouslySetInnerHTML={generateSanitizedDangerouslySetInnerHtml(world.desc)}
                ></p>
                <p className="baseline">{world.baseline}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Tabs.propTypes = {};

export default Tabs;
