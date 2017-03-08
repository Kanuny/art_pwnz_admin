// @flow
const LOGIN = 'jambler-affiliate/auth/LOGIN';
export const LOGIN_SUCCESS = 'jambler-affiliate/auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'jambler-affiliate/auth/LOGIN_FAIL';

export const LOGOUT = 'jambler-affiliate/auth/LOGOUT';

const LOGIN_BY_TOKEN = 'jambler-affiliate/auth/LOGIN_BY_TOKEN';
export const LOGIN_BY_TOKEN_SUCCESS = 'jambler-affiliate/auth/LOGIN_BY_TOKEN_SUCCESS';
export const LOGIN_BY_TOKEN_FAIL = 'jambler-affiliate/auth/LOGIN_BY_TOKEN_FAIL';

const SET_TOKEN = 'jambler-affiliate/auth/SET_TOKEN';

type StateType = {
  user: Object,
  loginError: Object,
  logoutError: Object,
  loggingIn: boolean,
  token: string
}
const initialState = {
  user: {},
  loginError: {},
  logoutError: {},
  loggedIn: false,
  loggingIn: false,
  token: '',
};

export default function reducer(state: StateType = initialState, action: Object = {}) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggingIn: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        token: action.result.token,
        user: action.result,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        loggedIn: false,
        user: {},
        token: '',
        loginError: action.error,
      };

    case LOGOUT:
      return {
        ...state,
        loggingOut: false,
        user: {},
        token: '',
      };

    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    case LOGIN_BY_TOKEN_SUCCESS:
      return {
        ...state,
        user: {
          ...action.result,
        },
        loggedIn: true,
      };

    case LOGIN_BY_TOKEN_FAIL:
      return {
        ...state,
        token: '',
        user: {},
        loggingIn: false,
      };

    default:
      return state;
  }
}

export function isLoaded(globalState: Object) {
  return globalState.auth && globalState.auth.token;
}
type LoginType = {
  username: string,
  password: string,
}
export function login(creds: LoginType) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    request: (api: Object) => api.auth.login(creds),
  };
}
export function logout() {
  return {
    type: LOGOUT,
  };
}

export function loginByToken() {
  return {
    types: [LOGIN_BY_TOKEN, LOGIN_BY_TOKEN_SUCCESS, LOGIN_BY_TOKEN_FAIL],
    request: (api: Object) => api.auth.me(),
  };
}

export function setToken(token: string) {
  return {
    type: SET_TOKEN,
    token,
  };
}
