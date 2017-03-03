// @flow
import type { RequestFunctionType } from '../types';

const load = (r: RequestFunctionType) =>
  (page: number): Promise<any> => r({
    method: 'GET',
    url: `/articles?page=${page}`,
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

const update = (r: RequestFunctionType) =>
  (data: Object): Promise<any> => r({
    method: 'PUT',
    url: `/articles/${data.id}`,
    data,
  })
;
export default {
  load,
  create,
  getById,
  remove,
  update,
};
