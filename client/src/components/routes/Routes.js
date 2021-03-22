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
import SwipeAddQuestion from '../elements/swipe/swipe-add-question/SwipeAddQuestion';
import Syntax from '../interactive-images/clean-code/syntax/Syntax';
import DoesItWork from '../interactive-images/clean-code/does-it-work/DoesItWork';
import Naming from '../interactive-images/clean-code/naming/Naming';
import Functions from '../interactive-images/clean-code/functions/Functions';
import DuplicatedCode from '../interactive-images/clean-code/duplicated-code/DuplicatedCode';
import UnderstandableCode from '../interactive-images/clean-code/understandable-code/UnderstandableCode';
import Cleaning from '../interactive-images/clean-code/cleaning/Cleaning';
import RoadmapCleanCode from '../interactive-images/clean-code/RoadmapCleanCode';

const Routes = () => {
  return (
    <section>
      <Switch>
        <Route exact path="/safe-space" component={SafeSpace}></Route>
        <Route exact path="/safe-space/quotes" component={SafeSpaceQuotes}></Route>
        <Route exact path="/safe-space/add-quote" component={AddQuote}></Route>
        <Route exact path="/safe-space/chat" component={SafeSpaceChat}></Route>
        <Route exact path="/imaginarium" component={Imaginarium}></Route>
        <Route exact path="/:world/too-late-to-ask" component={Swipe}></Route>
        <Route exact path="/modern-world" component={ModernWorld}></Route>
        <Route exact path="/:world/articles/:slug" component={Article}></Route>
        <Route
          exact
          path="/:world/too-late-to-ask/add-question"
          component={SwipeAddQuestion}
        ></Route>
        <Route exact path="/ancient-world" component={AncientWorld}></Route>

        {/* Experimental roadmap's routes */}
        <Route exact path="/roadmap/clean-code" component={RoadmapCleanCode}></Route>
        <Route exact path="/roadmap/clean-code/syntax" component={Syntax}></Route>
        <Route exact path="/roadmap/clean-code/does-it-work" component={DoesItWork}></Route>
        <Route exact path="/roadmap/clean-code/naming" component={Naming}></Route>
        <Route exact path="/roadmap/clean-code/functions" component={Functions}></Route>
        <Route exact path="/roadmap/clean-code/duplicated-code" component={DuplicatedCode}></Route>
        <Route
          exact
          path="/roadmap/clean-code/understandable-code"
          component={UnderstandableCode}
        ></Route>
        <Route exact path="/roadmap/clean-code/cleaning" component={Cleaning}></Route>
      </Switch>
    </section>
  );
};

export default Routes;
