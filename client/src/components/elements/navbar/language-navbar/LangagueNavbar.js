import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import './LangagueNavbar.css';

import { setLanguage } from '../../../../redux/actions/language';

const LangagueNavbar = ({ setLanguage }) => {
  const { t, i18n } = useTranslation();

  const languages = {
    en: { fullName: 'English', shortName: 'en' },
    fr: { fullName: 'Français', shortName: 'fr' },
  };

  const change = (lng) => {
    console.log('lang changed to ' + lng);
    i18n.changeLanguage(lng);
    setLanguage(lng);
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

export default connect(null, { setLanguage })(LangagueNavbar);
