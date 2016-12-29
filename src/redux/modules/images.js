// @flow
const LOAD = 'art_pwnz/images/LOAD';
const LOAD_SUCCESS = 'art_pwnz/images/LOAD_SUCCESS';
const LOAD_FAILED = 'art_pwnz/images/LOAD_FAILED';

const CLEAR_IMAGE = 'art_pwnz/images/CLEAR';

type ImageType = {
  [key: number]: string,
};

const initialState = {
};

export default function reducer(state: ImageType = initialState, action: Object = {}) {
  switch (action.type) {
    case LOAD_SUCCESS: {
      return {
        ...state,
        [action.id]: action.result,
      };
    }
    case CLEAR_IMAGE: {
      return initialState;
    }
    default:
      return state;
  }
}

export function loadImage(id) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAILED],
    id,
    request: (api: Object) => api.images.getById(id),
  };
}

export function clear() {
  return {
    type: CLEAR_IMAGE,
  };
}
