import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SafeSpace from '../layout/safe-space/SafeSpace';
import ModernWorld from '../layout/worlds/modern-world/ModernWorld';
import Imaginarium from '../layout/worlds/imaginarium/Imaginarium';
import AncientWorld from '../layout/worlds/ancient-world/AncientWorld';
import Article from '../elements/article/Article';
import Swipe from '../elements/swipe/Swipe';

const Routes = () => {
  return (
    <section>
      <Switch>
        <Route exact path="/safe-space" component={SafeSpace}></Route>
        <Route exact path="/imaginarium" component={Imaginarium}></Route>
        <Route exact path="/modern-world" component={ModernWorld}></Route>
        <Route
          exact
          path="/modern-world/articles/:type/:slug"
          component={Article}
        ></Route>
        <Route exact path="/modern-world/swipe" component={Swipe}></Route>
        <Route exact path="/ancient-world" component={AncientWorld}></Route>
      </Switch>
    </section>
  );
};

export default Routes;
