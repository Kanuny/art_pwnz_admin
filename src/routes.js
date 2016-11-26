import React from 'react';
import { Router, Route } from 'react-router';
import { ReduxAsyncConnect } from 'redux-connect';

import NotFound from './components/NotFound';
import Layout from './containers/Layout/Layout';
import Gallery from './containers/Gallery/Gallery';
import Article from './containers/Article/Article';

export default (browserHistory) => (
  <Router history={browserHistory} render={(props) => <ReduxAsyncConnect {...props} />}>
    <Route path="/" component={Layout}>
      <Route path="articles" component={Gallery} />
      <Route path="article/new" component={Article} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);
