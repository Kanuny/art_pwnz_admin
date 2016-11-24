import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import createLocalStorageEngine from 'redux-storage-engine-localstorage';
import filter from 'redux-storage-decorator-filter';
import {
  reducer as storageReducer,
  createMiddleware as createStorageMiddleware,
} from 'redux-storage';

import createApi from '../api';

import createReqMiddleware from './middleware/requestMiddleware';
import sagas from './sagas/sagas';
import reducers from './modules/reducers';

const LOCAL_STORAGE_KEY = 'jambler-affiliate';
const PORT = process.env.PORT;
const ENV = process.env.NODE_ENV;

export default async function configureStore(history) {
  const reduxRouterMiddleware = routerMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();
  const filteredLocalStorageEngine = filter(
    createLocalStorageEngine(LOCAL_STORAGE_KEY), [
      ['auth', 'token'],
    ],
  );
  console.log(ENV);
  const logger = createLogger({
    predicate: (getState, action) => (ENV === 'development'
      ? !['REDUX_STORAGE_SAVE'].includes(action.type)
      : false),
    collapsed: () => true,
  });
  const apiUrl = ENV === 'development' ? `http://localhost:${PORT}` : '';

  const localStorageData = await filteredLocalStorageEngine.load();
  const request = createApi({
    baseUrl: apiUrl,
    token: localStorageData.auth ? localStorageData.auth.token : null,
  });

  const middleware = [
    createReqMiddleware(request),
    createStorageMiddleware(filteredLocalStorageEngine),
    reduxRouterMiddleware,
    logger,
    sagaMiddleware,
  ];

  const store = createStore(
    storageReducer(reducers),
    localStorageData,
    applyMiddleware(...middleware),
  );

  sagas.forEach(saga => sagaMiddleware.run(saga));

  window.store = store;

  return store;
}
