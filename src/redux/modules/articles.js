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

const UPDATE = 'art_pwnz/articles/UPDATE';
const UPDATE_SUCCESS = 'art_pwnz/articles/UPDATE_SUCCESS';
const UPDATE_FAIL = 'art_pwnz/articles/UPDATE_FAIL';

type ArticlesType = {
  entities: Array<Object>,
  count: number,
  pageCount: number,
};

const initialState = {
  entities: [],
  count: 0,
  pageCount: 0,
};

export default function reducer(state: ArticlesType = initialState, action: Object = {}) {
  switch (action.type) {
    case LOAD_SUCCESS: {
      return {
        ...state,
        entities: action.result.articles,
        count: action.result.count,
        pageCount: action.result.pageCount,
        page: action.result.page,
      };
    }

    default:
      return state;
  }
}

export function load(page: ?number) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAILED],
    request: (api: Object) => api.articles.load(page || 0),
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

export function update(data: Object, prevData: Object) {
  const nextData = {
    id: data.id,
    ...Object.keys(data).reduce((memo, key) => (
      prevData[key] !== undefined && data[key] === prevData[key] ? memo : {
        ...memo,
        [key]: data[key],
      }
    ), {}),
  };

  return {
    types: [UPDATE, UPDATE_SUCCESS, UPDATE_FAIL],
    request: (api: Object) => api.articles.update(nextData),
  };
}
