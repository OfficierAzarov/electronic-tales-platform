import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SafeSpace from '../layout/safe-space/SafeSpace';
import SafeSpaceQuotes from '../layout/safe-space/quotes/SafeSpaceQuotes';
import ModernWorld from '../layout/worlds/modern-world/ModernWorld';
import Imaginarium from '../layout/worlds/imaginarium/Imaginarium';
import AncientWorld from '../layout/worlds/ancient-world/AncientWorld';
import Article from '../elements/article/Article';
import Swipe from '../elements/swipe/Swipe';
import SafeSpaceChat from '../layout/safe-space/chat/SafeSpaceChat';
import AddQuote from '../layout/safe-space/add-quote/AddQuote';
import InteractiveImage from '../interactive-images/InteractiveImage';
import SwipeAddQuestion from '../elements/swipe/swipe-add-question/SwipeAddQuestion';
import { Fragment } from 'react';

const Routes = () => {
  return (
    <section>
      <Switch>
        <Route exact path="/safe-space" component={SafeSpace}></Route>
        <Route exact path="/safe-space/quotes" component={SafeSpaceQuotes}></Route>
        <Route exact path="/safe-space/add-quote" component={AddQuote}></Route>
        <Route exact path="/safe-space/chat" component={SafeSpaceChat}></Route>
        <Route exact path="/imaginarium" component={Imaginarium}></Route>
        <Route exact path="/:world/swipe" component={Swipe}></Route>
        <Route exact path="/roadmap" component={InteractiveImage}></Route>
        <Route exact path="/modern-world" component={ModernWorld}></Route>
        {/* <Route exact path="/modern-world/articles/:slug" component={Article}></Route> */}
        <Route exact path="/:world/articles/:slug" component={Article}></Route>
        {/* <Route exact path="/modern-world/swipe" component={Swipe}></Route> */}
        <Route exact path="/modern-world/swipe/add-question" component={SwipeAddQuestion}></Route>
        <Route exact path="/ancient-world" component={AncientWorld}></Route>
      </Switch>
    </section>
  );
};

export default Routes;
