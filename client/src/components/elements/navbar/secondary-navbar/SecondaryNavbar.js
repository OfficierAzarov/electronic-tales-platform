import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './SecondaryNavbar.css';

import HomeIcon from '../../../../resources/img/icons/v2/HomeSVG';
import confetti from '../../../../resources/img/icons/confetti.png';
import { ELECTRONIC_TALES_PRESENTS } from '../../../../dictionnary/externalElectronicTalesLinks';

const SecondaryNavbar = ({ isCurrentPageHome }) => {
  return (
    <Fragment>
      {!isCurrentPageHome && (
        <nav id="secondary-nav">
          <NavLink exact to="/">
            <HomeIcon />
            <sub id="homepage">
              Retourner <br /> au manoir
            </sub>
          </NavLink>
          <a href={ELECTRONIC_TALES_PRESENTS.SIGN_UP} target="_blank">
            <sub>Nous rejoindre</sub>
            <img src={confetti} alt="" />
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
