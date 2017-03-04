import 'babel-polyfill';

import ReactDOM from 'react-dom';
import React from 'react';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import routes from './routes';
import configureStore from './redux/create';

async function launch() {
  const store = await configureStore(browserHistory);

  ReactDOM.render(
    <Provider store={store}>
      {routes(browserHistory)}
    </Provider>,
    document.getElementById('app'),
  );
}
console.log('!!');

launch();
