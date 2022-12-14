export enum AuthenticationTypes {
  SIGNUP_REQUEST = 'SIGNUP_REQUEST',
  SIGNUP_REQUEST_SUCCESS = 'SIGNUP_REQUEST_SUCCESS',
  SIGNUP_REQUEST_FAILURE = 'SIGNUP_REQUEST_FAILURE',
  LOAD_AUTHENTICATION_REQUEST = 'LOAD_AUTHENTICATION_REQUEST',
  LOAD_AUTHENTICATION_REQUEST_SUCCESS = 'LOAD_AUTHENTICATION_REQUEST_SUCCESS',
  LOAD_AUTHENTICATION_REQUEST_FAILURE = 'LOAD_AUTHENTICATION_REQUEST_FAILURE',
  LOGOUT_REQUEST = 'LOGOUT_REQUEST',
  LOGOUT_REQUEST_SUCCESS = 'LOGOUT_REQUEST_SUCCESS',
  LOGOUT_REQUEST_FAILURE = 'LOGOUT_REQUEST_FAILURE',
}

export interface SignupRequestPayload {
  name: string;
  username: string;
  password: string;
}

export interface LoginRequestPayload {
  username: string;
  password: string;
  remember: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
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
