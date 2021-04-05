import React from 'react';
import Emoji from 'a11y-react-emoji';

import './NotYet.css';

import logo from '../../../resources/img/logo-transparent.png';
import oldCell from '../../../resources/img/illustrations/old-cell.gif';
import {
  ELECTRONIC_TALES_PRESENTS,
  SLACK,
} from '../../../dictionnary/externalElectronicTalesLinks';
import oldCellVideo from '../../../resources/img/illustrations/old-cell.mp4';

const NotYet = () => {
  return (
    <div id="not-yet">
      <img src={logo} id="logo" loading="auto" alt="electronic Tales logo" />
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
          <a href={ELECTRONIC_TALES_PRESENTS.BASE}>
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
        <video autoPlay loop muted src={oldCellVideo}></video>
      </div>
    </div>
  );
};

NotYet.propTypes = {};

export default NotYet;
