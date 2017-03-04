// @flow
const LOAD = 'art_pwnz/videos/LOAD';
const LOAD_SUCCESS = 'art_pwnz/videos/LOAD_SUCCESS';
const LOAD_FAILED = 'art_pwnz/videos/LOAD_FAILED';

const ADD = 'art_pwnz/videos/ADD';
const ADD_SUCCESS = 'art_pwnz/videos/ADD_SUCCESS';
const ADD_FAILED = 'art_pwnz/videos/ADD_FAILED';

const REMOVE = 'art_pwnz/videos/REMOVE';
const REMOVE_SUCCESS = 'art_pwnz/videos/REMOVE_SUCCESS';
const REMOVE_FAILED = 'art_pwnz/videos/REMOVE_FAILED';

const UPDATE = 'art_pwnz/videos/UPDATE';
const UPDATE_SUCCESS = 'art_pwnz/videos/UPDATE_SUCCESS';
const UPDATE_FAILED = 'art_pwnz/videos/UPDATE_FAILED';

const GET_BY_ID = 'art_pwnz/videos/GET_BY_ID';
const GET_BY_ID_SUCCESS = 'art_pwnz/videos/GET_BY_ID_SUCCESS';
const GET_BY_ID_FAILED = 'art_pwnz/videos/GET_BY_ID_FAILED';

type VideosType = {
  entities: Array<Object>,
  count: number,
  pageCount: number,
};

const initialState = {
  entities: [],
  count: 0,
  pageCount: 0,
};

export default function reducer(state: VideosType = initialState, action: Object = {}) {
  switch (action.type) {
    case LOAD_SUCCESS: {
      return {
        ...state,
        entities: action.result.videos,
        count: action.result.count,
        pageCount: action.result.pageCount,
        page: action.result.page,
      };
    }

    default:
      return state;
  }
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAILED],
    request: (api: Object) => api.videos.load(),
  };
}

export function add(data: Object) {
  return {
    types: [ADD, ADD_SUCCESS, ADD_FAILED],
    request: (api: Object) => api.videos.create(data),
  };
}

export function remove(id: number) {
  return {
    types: [REMOVE, REMOVE_SUCCESS, REMOVE_FAILED],
    request: (api: Object) => api.videos.remove(id),
  };
}

export function update(id: string, data: Object) {
  return {
    types: [UPDATE, UPDATE_SUCCESS, UPDATE_FAILED],
    request: (api: Object) => api.videos.update({
      id,
      data,
    }),
  };
}

export function getById(id: string) {
  return {
    types: [GET_BY_ID, GET_BY_ID_SUCCESS, GET_BY_ID_FAILED],
    request: (api: Object) => api.videos.getById(id),
  };
}
