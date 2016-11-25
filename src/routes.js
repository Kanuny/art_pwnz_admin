import React from 'react';
import { Router, Route } from 'react-router';
import { ReduxAsyncConnect } from 'redux-connect';

import NotFound from './components/NotFound';
import Layout from './containers/Layout/Layout';
import Gallery from './containers/Gallery/Gallery';

export default (browserHistory) => (
  <Router history={browserHistory} render={(props) => <ReduxAsyncConnect {...props} />}>
    <Route component={Layout}>
      <Route path="/" component={Gallery} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);
