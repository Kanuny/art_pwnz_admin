// @flow
import type { RequestFunctionType } from '../types';

const getById = (r: RequestFunctionType) =>
  (id: number): Promise<any> => r({
    method: 'GET',
    url: `/images/${id}`,
  })
;

export default {
  getById,
};
