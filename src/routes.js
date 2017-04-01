import React from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router';

import NotFound from './components/NotFound';
import Layout from './containers/Layout/Layout';
import Gallery from './containers/Gallery/Gallery';
import Article from './containers/Article/Article';
import Videos from './containers/VideoGallery/Videos';
import Video from './containers/VideoGallery/Video';
import Login from './containers/Login/Login';
import { loginByToken } from './redux/modules/auth';

function getComponent(Component) {
  return (store) => async (location, cb) => {
    const result = await store.dispatch(loginByToken());

    if (result.error) {
      return cb(result.error);
    }
    return cb(null, Component);
  };
}

export default (browserHistory, store) => (
  <Router history={browserHistory} >
    <Route component={Login} path="/login" />
    <Route component={Layout}>
      <Redirect from="/" to="/articles" />

      <Route path="/articles" >
        <IndexRoute component={Gallery} />

        <Route path="add" getComponent={getComponent(Article)(store)} />
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
