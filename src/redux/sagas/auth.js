import { take, put } from 'redux-saga/effects';
import { replace } from 'react-router-redux';

import {
  LOGIN_SUCCESS,
  LOGIN_BY_TOKEN_FAIL,
  LOGOUT,
} from '../modules/auth';

function* toLoginRedirectorSubscribe() {
  while (1) { // eslint-disable-line no-constant-condition
    yield take([LOGIN_BY_TOKEN_FAIL, LOGOUT]);
    yield put(replace('/login'));
  }
}

function* fromLoginRedirectorSubscribe() {
  while (1) { // eslint-disable-line no-constant-condition
    yield take([LOGIN_SUCCESS]);
    yield put(replace('/articles'));
  }
}

export default [
  toLoginRedirectorSubscribe,
  fromLoginRedirectorSubscribe,
];
