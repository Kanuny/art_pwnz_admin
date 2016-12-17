// @flow
const LOAD = 'art_pwnz/article/LOAD';
const LOAD_SUCCESS = 'art_pwnz/article/LOAD_SUCCESS';
const LOAD_FAILED = 'art_pwnz/article/LOAD_FAILED';

type ArticleType = {
  entity: Object,
};

const initialState = {
  entity: Object,
};

export default function reducer(state: ArticleType = initialState, action: Object = {}) {
  switch (action.type) {
    case LOAD_SUCCESS: {
      return {
        ...state,
        entity: action.result,
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
