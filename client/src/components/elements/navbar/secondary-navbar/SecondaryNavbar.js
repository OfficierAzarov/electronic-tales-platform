import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import './SecondaryNavbar.css';

import HomeIcon from '../../../../resources/img/icons/v2/HomeSVG';
import confetti from '../../../../resources/img/icons/confetti.png';
import { ELECTRONIC_TALES_PRESENTS } from '../../../../dictionnary/externalElectronicTalesLinks';
import { generateSanitizedDangerouslySetInnerHtml } from '../../../../utils/data-processing/sanitize';

const SecondaryNavbar = ({ isCurrentPageHome }) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      {!isCurrentPageHome && (
        <nav id="secondary-nav">
          <NavLink exact to="/">
            <HomeIcon />
            <sub id="homepage" dangerouslySetInnerHTML={generateSanitizedDangerouslySetInnerHtml(
              t('secondaryNavbar.goBackHome'))}>

            </sub>
          </NavLink>
          <a href={ELECTRONIC_TALES_PRESENTS.SIGN_UP} target="_blank" rel="noopener noreferrer">
            <sub>Nous rejoindre</sub>
            <img src={confetti} loading="auto" alt="join us" />
          </a>
        </nav>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isCurrentPageHome: state.page.isCurrentPageHome,
});

SecondaryNavbar.propTypes = {
  isCurrentPageHome: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(SecondaryNavbar);
