export enum AuthenticationTypes {
  LOAD_AUTHENTICATION_REQUEST = 'LOAD_AUTHENTICATION_REQUEST',
  LOAD_AUTHENTICATION_REQUEST_SUCCESS = 'LOAD_AUTHENTICATION_REQUEST_SUCCESS',
  LOAD_AUTHENTICATION_REQUEST_FAILURE = 'LOAD_AUTHENTICATION_REQUEST_SUCCESS',
  LOGOUT_REQUEST = 'LOGOUT_REQUEST',
  LOGOUT_REQUEST_SUCCESS = 'LOGOUT_REQUEST_SUCCESS',
  LOGOUT_REQUEST_FAILURE = 'LOGOUT_REQUEST_FAILURE',
}

export interface LoginRequestPayload {
  username: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
}

export interface Authentication {
  token: string;
  user: User;
}

export interface AuthenticationAction {
  type: keyof typeof AuthenticationTypes;
  payload: {
    data: any;
  };
}

export interface AuthenticationState {
  readonly data: Authentication;
  readonly loading: boolean;
  readonly error: boolean;
}
