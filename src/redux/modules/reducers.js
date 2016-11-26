// @flow
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import { reducer as formReducer } from 'redux-form';

import articles from './articles';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  form: formReducer,

  articles,
});
