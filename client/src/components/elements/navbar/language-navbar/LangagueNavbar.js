import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import './LangagueNavbar.css';

const LangagueNavbar = () => {
  const { t, i18n } = useTranslation();

  const languages = {
    en: { fullName: 'English', shortName: 'en' },
    fr: { fullName: 'Français', shortName: 'fr' },
  };

  const change = (lng) => {
    console.log('lang changed to ' + lng);
    i18n.changeLanguage(lng);
  };

  return (
    <div id="language-navbar-container">
      {Object.keys(languages).map((language) => (
        <button
          key={language}
          aria-label={languages[language].fullName}
          onClick={() => change(language)}
        >
          {languages[language].shortName}
        </button>
      ))}
    </div>
  );
};

LangagueNavbar.propTypes = {};

export default LangagueNavbar;
