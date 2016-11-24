// @flow
import type { RequestFunctionType } from '../types';

type UserType = Object
type UserSettingsType = Object

export type LoginApiRequestType = {|
  username: string,
  password: string,
|};

export type LoginApiResponseType = {|
  token: string,
  user: UserType,
|};


const login = (r: RequestFunctionType) =>
  (data: LoginApiRequestType): Promise<LoginApiResponseType> => r({
    method: 'POST',
    url: '/affiliate/auth',
    data,
  })
;

const me = (r: RequestFunctionType) => (): Promise<LoginApiResponseType> => r({
  url: '/affiliate/auth/me',
});

const register = (r: RequestFunctionType) =>
  (data: UserType): Promise<LoginApiResponseType> => r({
    method: 'POST',
    url: '/affiliate/users/registration',
    data,
  })
;

type ChangePasswordType = {
  repeatedPassword: string,
  newPassword: string,
  oldPassword: string,
}

const changePassword = (r: RequestFunctionType) =>
  (data: ChangePasswordType): Promise<any> => r({
    method: 'POST',
    url: '/affiliate/users/changePassword',
    data,
  })
;

const updateSettings = (r: RequestFunctionType) =>
  (data: UserSettingsType): Promise<UserSettingsType> => r({
    method: 'POST',
    url: '/affiliate/users/settings',
    data,
  })
;

const getSettings = (r: RequestFunctionType) =>
  (): Promise<UserSettingsType> => r({
    method: 'GET',
    url: '/affiliate/users/settings',
  })
;

export default {
  login,
  me,
  register,
  changePassword,
  updateSettings,
  getSettings,
};
