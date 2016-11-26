// @flow
import type { RequestFunctionType } from '../types';

const load = (r: RequestFunctionType) =>
  (): Promise<any> => r({
    method: 'GET',
    url: '/articles/',
  })
;

const create = (r: RequestFunctionType) =>
  (data: Object): Promise<any> => r({
    method: 'POST',
    url: '/articles/',
    data,
  })
;

export default {
  load,
  create,
};
