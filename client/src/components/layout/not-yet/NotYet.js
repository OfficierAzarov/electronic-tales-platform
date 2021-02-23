import React from 'react';
import PropTypes from 'prop-types';

import './NotYet.css';

import logo from '../../../resources/img/logo-transparent.png';
import oldCell from '../../../resources/img/illustrations/old-cell.gif';
import { ELECTONIC_TALES_PRESENTS, SLACK } from '../../../dictionnary/externalElectronicTalesLinks';
import Emoji from 'a11y-react-emoji';

const NotYet = () => {
  return (
    <div id="not-yet">
      <img src={logo} id="logo" alt="electronic Tales logo" />
      <div id="content">
        <p>
          Hey&nbsp;!
          <br />
          <br />
          La plateforme Electronic Tales est accessible uniquement en version mobile pour le moment.
          <br />
          <br />
          Nous t'invitons à utiliser ton téléphone pour commencer à explorer notre manoir.
          <br />
          <br />
          Tu peux aussi faire un tour sur{' '}
          <a href={ELECTONIC_TALES_PRESENTS.BASE}>
            notre site de présentation <Emoji symbol="🍿" label="pop corn" />
          </a>
          , rejoindre le{' '}
          <a href={SLACK}>
            Slack de la communauté Electronic Tales
            <Emoji symbol="🌈" label="rainbow" />
            <Emoji symbol="💕" label="love" />
            <Emoji symbol="💾" label="floppy disk" />{' '}
          </a>{' '}
          ou <a href="mailto:contact@electronictales.io">nous écrire</a>.
        </p>
        <img src={oldCell} id="stupid-gif" alt="A 90's David Dychovny checking his 90's phone" />
      </div>
    </div>
  );
};

NotYet.propTypes = {};

export default NotYet;
