import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Emoji from 'a11y-react-emoji';

import './SafeSpace.css';

const SafeSpace = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div id="safe-space">
      - Grâce à l'explosion des formations courtes, de plus en plus de devs viennent de milieux
      différents, et c'est tant mieux. - Cependant, une fois en entreprise, ces personnes sentent
      qu'un « mur de verre » les sépare de leurs collègues issu·e·s de parcours plus traditionnels.
      Un mur bâti sur des références culturelles ou techniques qu'ils n'ont pas... - Ajouter à cela
      la complexité inhérente à la programmation : programmer est dur, les technos évoluent très
      vite... - Mais souvent on n'ose pas en parler. - Or, en parler avec d'autres devs est un
      premier pas essentiel pour : se rendre compte qu'on n'est pas seul·e à galérer, progresser
      techniquement sur des bases plus saines, entamer ensemble un mouvement de détox d'un milieu
      parfois toxique. Principes : Anonymat, confiance, inclusion.
      <Link to="/safe-space/quotes">Lire les témoignages</Link>
      <Link to="/safe-space/chat">Discuter avec d'autres devs juniors</Link>
    </div>
  );
};

export default SafeSpace;
