import React from 'react';
import { Router, Route } from 'react-router';
import { ReduxAsyncConnect } from 'redux-connect';

import NotFound from './components/NotFound';
import Layout from './containers/Layout/Layout';
import Gallery from './containers/Gallery/Gallery';
import Article from './containers/Article/Article';
import Videos from './containers/VideoGallery/Videos';
import Video from './containers/VideoGallery/Video';

export default (browserHistory) => (
  <Router history={browserHistory} render={(props) => <ReduxAsyncConnect {...props} />}>
    <Route path="/" component={Layout}>
      <Route path="articles" component={Gallery} />

      <Route path="articles/add" component={Article} />
      <Route path="articles/edit/:id" component={Article} />

      <Route path="videos" component={Videos} />
      <Route path="videos/new" component={Video} />
      <Route path="videos/:id" component={Video} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);
