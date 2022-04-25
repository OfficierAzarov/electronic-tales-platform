import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import './LanguageNavbar.css';

import { setLanguage } from '../../../../redux/actions/language';

const LanguageNavbar = ({ setLanguage, preferredLanguage }) => {
  const { t, i18n } = useTranslation();

  const languages = {
    en: { fullName: 'English', shortName: 'en' },
    fr: { fullName: 'Français', shortName: 'fr' },
  };

  const change = (lng) => {
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
          className={preferredLanguage === languages[language].shortName && 'selected'}
        >
          {languages[language].shortName}
        </button>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  preferredLanguage: state.language.preferredLanguage,
});

LanguageNavbar.propTypes = {
  setLanguage: PropTypes.func.isRequired,
  preferredLanguage: PropTypes.string,
};

export default connect(mapStateToProps, { setLanguage })(LanguageNavbar);
