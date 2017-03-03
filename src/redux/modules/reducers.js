// @flow
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import { reducer as formReducer } from 'redux-form';

import articles from './articles';
import article from './article';
import images from './images';
import videos from './videos';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  form: formReducer,

  articles,
  article,
  images,
  videos,
});
