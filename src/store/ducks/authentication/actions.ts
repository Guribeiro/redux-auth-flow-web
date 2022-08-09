import { action } from 'typesafe-actions';
import {
  AuthenticationTypes,
  Authentication,
  LoginRequestPayload,
} from './types';

const {
  LOAD_AUTHENTICATION_REQUEST,
  LOAD_AUTHENTICATION_REQUEST_FAILURE,
  LOAD_AUTHENTICATION_REQUEST_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_REQUEST_SUCCESS,
  LOGOUT_REQUEST_FAILURE,
} = AuthenticationTypes;

export const loginRequest = (data: LoginRequestPayload) => {
  return action(LOAD_AUTHENTICATION_REQUEST, data);
};

export const loginRequestSuccess = (data: Authentication) => {
  return action(LOAD_AUTHENTICATION_REQUEST_SUCCESS, {
    data,
  });
};

export const loginRequestFailure = () => {
  return action(LOAD_AUTHENTICATION_REQUEST_FAILURE);
};

export const logoutRequest = () => {
  return action(LOGOUT_REQUEST);
};

export const logoutRequestSuccess = () => {
  return action(LOGOUT_REQUEST_SUCCESS);
};

export const logoutRequestFailure = () => {
  return action(LOGOUT_REQUEST_FAILURE);
};
