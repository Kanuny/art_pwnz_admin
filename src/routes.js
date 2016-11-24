import React from 'react';
import { Router, Route } from 'react-router';
import { ReduxAsyncConnect } from 'redux-connect';

function NotFound() {
  return (
    <div> Not Found !</div>
  );
}

export default (browserHistory) => (
  <Router history={browserHistory} render={(props) => <ReduxAsyncConnect {...props} />}>
    <Route path="*" component={NotFound} />
  </Router>
);
