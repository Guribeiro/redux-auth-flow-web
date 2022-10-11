import { call, put } from 'redux-saga/effects';
import { AxiosResponse, AxiosError } from 'axios';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import {
  LoginRequestPayload,
  Authentication,
  SignupRequestPayload,
} from './types';

import { rootNavigate } from '../../../routes/history';

import {
  signupRequestSuccess,
  signupRequestFailure,
  loginRequestSuccess,
  loginRequestFailure,
  logoutRequestSuccess,
  logoutRequestFailure,
} from './actions';

export const STORAGE_AUTHENTICATION_KEY = '@test:authentication';
export const STORAGE_REMEMBER_SIGNIN = '@test:signin-remember';

interface ApiRequestAuthenticationProps {
  username: string;
  password: string;
}

function apiRequestAuthentication({
  username,
  password,
}: ApiRequestAuthenticationProps) {
  return api.post(`/signin`, {
    username,
    password,
  });
}

interface ApiPostRequestSignupProps {
  name: string;
  username: string;
  password: string;
}

function apiPostRequestSignup({
  name,
  username,
  password,
}: ApiPostRequestSignupProps) {
  return api.post('/users', {
    name,
    username,
    password,
  });
}

interface Action {
  type: string;
  payload: LoginRequestPayload;
}

interface SignupAction {
  type: string;
  payload: SignupRequestPayload;
}

export function* signup({ payload }: SignupAction) {
  try {
    const { name, username, password } = payload;
    yield call(apiPostRequestSignup, { name, username, password });
    yield put(signupRequestSuccess());
    rootNavigate('/');
    toast('Account created successfully', {
      type: 'success',
    });
  } catch (error) {
    const axiosError = error as AxiosError<{ error: string }>;
    yield put(loginRequestFailure());
    toast(axiosError.response?.data.error, {
      type: 'error',
    });

    yield put(signupRequestFailure());
  }
}

export function* login({ payload }: Action) {
  try {
    const { username, password, remember } = payload;

    const response: AxiosResponse<Authentication> = yield call(
      apiRequestAuthentication,
      { username, password },
    );

    const { token, user } = response.data;

    localStorage.setItem(
      STORAGE_AUTHENTICATION_KEY,
      JSON.stringify({ token, user }),
    );

    if (remember !== 'true') {
      localStorage.removeItem(STORAGE_REMEMBER_SIGNIN);
    } else {
      localStorage.setItem(STORAGE_REMEMBER_SIGNIN, username);
    }

    yield put(
      loginRequestSuccess({
        token,
        user,
      }),
    );

    rootNavigate('/dashboard');
    toast(`Welcome back, ${user.name}`, {
      type: 'success',
    });
  } catch (error) {
    const axiosError = error as AxiosError<{ error: string }>;
    yield put(loginRequestFailure());
    toast(axiosError.response?.data.error, {
      type: 'error',
    });
  }
}

export function* logout() {
  try {
    localStorage.removeItem(STORAGE_AUTHENTICATION_KEY);

    yield put(logoutRequestSuccess());

    rootNavigate('/');
  } catch (error) {
    yield put(logoutRequestFailure());
    const axiosError = error as AxiosError<{ error: string }>;
    yield put(loginRequestFailure());
    toast(axiosError.response?.data.error, {
      type: 'error',
    });
  }
}
