import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';

import { LOAD_SUCCESS } from '../modules/article';
import { loadImage as getImageById, clear } from '../modules/images';

function* loadImage(action) {
  yield put(clear());
  const images = action.result.images;

  for (let i = 0; i < images.length; i += 1) {
    yield put(getImageById(images[i].id));
  }
}

function* onArticleLoadSubscribe() {
  yield takeEvery(LOAD_SUCCESS, loadImage);
}

export default [
  onArticleLoadSubscribe,
];
