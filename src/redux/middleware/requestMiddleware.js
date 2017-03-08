// @flow
import {
  LOGOUT,
} from '../modules/auth';

export default function requestMiddleware(api: Object) {
  return ({ dispatch, getState }: { dispatch: Function, getState: Function }) =>
    (next: Function) => (action: Object) => {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }

      const { request, types = [null, null, null], ...rest } = action; // eslint-disable-line
      if (!request) {
        return next(action);
      }

      const [REQUEST, SUCCESS, FAILURE] = types;
      const nextIfHaveAction = (subAction) => {
        if (subAction && subAction.type) {
          return next(subAction);
        }
        return null;
      };
      next({ ...rest, type: REQUEST });

      return request(api).then(
        (result) => nextIfHaveAction({ ...rest, result, type: SUCCESS }),
        (error) => {
          if (error.response.status === 403 || error.response.status === 401) {
            return nextIfHaveAction({ ...rest, error, type: LOGOUT });
          }
          return nextIfHaveAction({ ...rest, error, type: FAILURE });
        },
      ).catch((error) => {
        console.error('MIDDLEWARE ERROR:', error);
        nextIfHaveAction({ ...rest, error, type: FAILURE });

        throw error;
      });
    };
}
