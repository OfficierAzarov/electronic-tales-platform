import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Emoji from 'a11y-react-emoji';

import './SafeSpace.css';

const SafeSpace = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div id="safe-space" className="container">
      <div className="line-title-wrapper world-title-wrapper">
        <h2 className="world-title neon flicker">Safe space</h2>
      </div>
      {/* <h4>Un safe space, pour quoi faire&nbsp;?</h4> */}
      <div className="line-title-wrapper category-title-wrapper">
        <h3 className="title">Pourquoi&nbsp;?</h3>
      </div>
      <p>
        Grâce à l'explosion des formations courtes, de plus en plus de devs viennent de milieux
        différents, et c'est tant mieux&nbsp;!
        <br />
        <br />
        Cependant, une fois en entreprise, ces personnes sentent qu'un{' '}
        <strong>«&nbsp;mur de verre&nbsp;»</strong> les sépare de leurs collègues issu·e·s de
        parcours plus traditionnels. Un mur bâti sur des{' '}
        <strong>références culturelles ou techniques</strong> qu'ils n'ont pas&nbsp;
        <Emoji symbol="🖖" label="start trek" />
        &nbsp;
        <Emoji symbol="🥚" label="easter egg" />
        &nbsp;
        <Emoji symbol="❓" label="question" />
        &nbsp;
        <Emoji symbol="🚀" label="rocket science" />
        <br />
        <br />
        Ajoutez à cela la <strong>complexité propre au développement</strong> (programmer est dur,
        les technos évoluent très vite, il est impossible de tout savoir...), et tous les
        ingrédients sont réunis pour développer un bon{' '}
        <strong>syndrome de l'imposteur bien tapé</strong>.
      </p>
      <div className="line-title-wrapper category-title-wrapper">
        <h3 className="title">Débuggons ça&nbsp;!</h3>
      </div>
      <p>
        <span className="big-text">
          Le syndrome de l'imposteur est un mal très répandu chez les développeurs·euses.
        </span>
        <br />
        <br />
        Le problème, c'est qu'on ose rarement en parler <Emoji symbol="😶" label="silence" />
        <br />
        <br />
        Or, en discuter avec d'autres devs est un premier pas essentiel pour&nbsp;:
      </p>
      <ul>
        <li>
          Se rendre compte qu'on n'est pas seul·e à galérer&nbsp;
          <Emoji symbol="🚣🏼" label="struggle" />
        </li>
        <li>
          Progresser techniquement sur des bases plus saines&nbsp;
          <Emoji symbol="💪" label="progress" />
        </li>
        <li>
          Entamer ensemble un mouvement de détox&nbsp;
          <Emoji symbol="🌱" label="detox plant" />
          <Emoji symbol="🍵" label="detox tea" /> d'un milieu parfois toxique&nbsp;
          <Emoji symbol="🤢" label="nausea emoji" />
          <Emoji symbol="☢️" label="radioactive sign" />
        </li>
      </ul>
      <div className="line-title-wrapper category-title-wrapper">
        <h3 className="title">Go go go</h3>
      </div>
      <p>
        Convaincu·e&nbsp;?
        <br />
        <br />
        Jette un œil à <Link to="/safe-space/quotes">Micro-vécus</Link>, le recueil collaboratif des
        situations toxiques du milieu du dév.
        <br />
        <br />
        Viens discuter avec d'autres devs sur notre <Link to="/safe-space/chat">Slack</Link>.
      </p>
    </div>
  );
};

export default SafeSpace;
