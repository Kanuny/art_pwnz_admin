// @flow
import type { RequestFunctionType } from '../types';

const load = (r: RequestFunctionType) =>
  (): Promise<any> => r({
    method: 'GET',
    url: '/videos?page=0',
  })
;

const getById = (r: RequestFunctionType) =>
  (id: number): Promise<any> => r({
    method: 'GET',
    url: `/videos/${id}`,
  })
;

const create = (r: RequestFunctionType) =>
  (data: Object): Promise<any> => r({
    method: 'POST',
    url: '/videos/',
    data,
  })
;

const remove = (r: RequestFunctionType) =>
  (id: number): Promise<any> => r({
    method: 'DELETE',
    url: `/videos/${id}`,
  })
;

const update = (r: RequestFunctionType) =>
  ({ id, data }: {id: string, data: Object}): Promise<any> => r({
    method: 'PUT',
    url: `/videos/${id}`,
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
