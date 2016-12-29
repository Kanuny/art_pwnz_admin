// @flow
const LOAD = 'art_pwnz/articles/LOAD';
const LOAD_SUCCESS = 'art_pwnz/articles/LOAD_SUCCESS';
const LOAD_FAILED = 'art_pwnz/articles/LOAD_FAILED';

const ADD = 'art_pwnz/articles/ADD';
const ADD_SUCCESS = 'art_pwnz/articles/ADD_SUCCESS';
const ADD_FAILED = 'art_pwnz/articles/ADD_FAILED';

const REMOVE = 'art_pwnz/articles/REMOVE';
const REMOVE_SUCCESS = 'art_pwnz/articles/REMOVE_SUCCESS';
const REMOVE_FAILED = 'art_pwnz/articles/REMOVE_FAILED';


type ArticlesType = {
  entities: Array<Object>
};

const initialState = {
  entities: [],
};

export default function reducer(state: ArticlesType = initialState, action: Object = {}) {
  switch (action.type) {
    case LOAD_SUCCESS: {
      return {
        ...state,
        entities: action.result,
      };
    }

    default:
      return state;
  }
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAILED],
    request: (api: Object) => api.articles.load(),
  };
}

export function add(data: Object) {
  return {
    types: [ADD, ADD_SUCCESS, ADD_FAILED],
    request: (api: Object) => api.articles.create(data),
  };
}

export function remove(id: number) {
  return {
    types: [REMOVE, REMOVE_SUCCESS, REMOVE_FAILED],
    request: (api: Object) => api.articles.remove(id),
  };
}
