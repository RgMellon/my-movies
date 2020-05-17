import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Likes from '../pages/Likes';

const routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/favourites" component={Likes} />
    </Switch>
  );
};

export default routes;
