import React from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router';

import NotFound from './components/NotFound';
import Layout from './containers/Layout/Layout';
import Gallery from './containers/Gallery/Gallery';
import Article from './containers/Article/Article';
import Videos from './containers/VideoGallery/Videos';
import Video from './containers/VideoGallery/Video';

export default (browserHistory) => (
  <Router history={browserHistory} >
    <Route component={Layout}>
      <Redirect from="/" to="/articles" />

      <Route path="/articles" >
        <IndexRoute component={Gallery} />

        <Route path="add" component={Article} />
        <Route path="edit/:id" component={Article} />
      </Route>
      <Route path="/videos" >
        <IndexRoute component={Videos} />

        <Route path="add" component={Video} />
        <Route path="edit/:id" component={Video} />
      </Route>

    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);
