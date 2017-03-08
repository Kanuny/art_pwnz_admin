// @flow
import type { RequestFunctionType } from '../types';

export type LoginApiRequestType = {|
  username: string,
  password: string,
|};

export type LoginApiResponseType = {|
  token: string,
  user: Object,
|};


const login = (r: RequestFunctionType) =>
  (data: LoginApiRequestType): Promise<LoginApiResponseType> => r({
    method: 'POST',
    url: '/auth/signin',
    data,
  })
;

const me = (r: RequestFunctionType) => (): Promise<LoginApiResponseType> => r({
  url: '/auth/signin',
});

export default {
  login,
  me,
};
