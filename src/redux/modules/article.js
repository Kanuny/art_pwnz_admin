// @flow
const LOAD = 'art_pwnz/article/LOAD';
export const LOAD_SUCCESS = 'art_pwnz/article/LOAD_SUCCESS';
const LOAD_FAILED = 'art_pwnz/article/LOAD_FAILED';

export const CLEAR = 'art_pwnz/article/CLEAR';

type ArticleType = {
  entity: Object,
};

const initialState = {
  entity: {},
};

export default function reducer(state: ArticleType = initialState, action: Object = {}) {
  switch (action.type) {
    case LOAD_SUCCESS: {
      return {
        ...state,
        entity: action.result,
      };
    }
    case CLEAR: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
}

export function getById(id: number) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAILED],
    request: (api: Object) => api.articles.getById(id),
  };
}

export function clear() {
  return {
    type: CLEAR,
  };
}
