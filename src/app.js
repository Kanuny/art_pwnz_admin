import 'babel-polyfill';

import ReactDOM from 'react-dom';
import React from 'react';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import configureStore from './redux/create';


async function launch() {
  const store = await configureStore(browserHistory);
  const history = syncHistoryWithStore(browserHistory, store);

  ReactDOM.render(
    <Provider store={store}>
      {routes(history)}
    </Provider>,
    document.getElementById('app'),
  );
}

launch();
