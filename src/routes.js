import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { history } from './store';

import App from './containers/App';
import TrackView from './containers/Track';

const routes = (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/track/:id" component={TrackView} />
    </Switch>
  </ConnectedRouter>
);
export default routes;
