// @flow
import type { RequestFunctionType } from '../types';

const load = (r: RequestFunctionType) =>
  (): Promise<any> => r({
    method: 'GET',
    url: '/articles?page=0',
  })
;

const getById = (r: RequestFunctionType) =>
  (id: number): Promise<any> => r({
    method: 'GET',
    url: `/articles/${id}`,
  })
;

const create = (r: RequestFunctionType) =>
  (data: Object): Promise<any> => r({
    method: 'POST',
    url: '/articles/',
    data,
  })
;

const remove = (r: RequestFunctionType) =>
  (id: number): Promise<any> => r({
    method: 'DELETE',
    url: `/articles/${id}`,
  })
;

export default {
  load,
  create,
  getById,
  remove,
};
