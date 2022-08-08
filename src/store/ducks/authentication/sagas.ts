import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { LoginRequestPayload, Authentication } from './types'
import { AxiosResponse } from 'axios';

const STORAGE_AUTHENTICATION_KEY = '@test:authentication';

import {
  loadRequestSuccess,
  loadRequestFailure,
  logoutRequestSuccess,
  logoutRequestFailure
} from './actions';

interface ApiRequestAuthenticationProps {
  username: string;
  password: string;
}

function apiRequestAuthentication({
  username,
  password,
}: ApiRequestAuthenticationProps) {
  return api.post(`/users/authenticate`, {
    email: username,
    password,
  });
}

interface Action {
  type: string;
  payload: LoginRequestPayload;
}

interface LoginResponse {
  data: Authentication;
}

export function* login({ payload }: Action) {
  try {
    const { username, password } = payload;

    const response: AxiosResponse<LoginResponse> = yield call(
      apiRequestAuthentication,
      { username, password },
    );

    const {token, user} = response.data.data;

    localStorage.setItem(STORAGE_AUTHENTICATION_KEY, JSON.stringify({token, user}));
    
    yield put(loadRequestSuccess({
      token,
      user
    }));

  } catch (error) {
    yield put(loadRequestFailure());
  }
}

export function* logout() {
  try {
    localStorage.removeItem(STORAGE_AUTHENTICATION_KEY);

    yield put(logoutRequestSuccess());
  } catch (error) {
    yield put(logoutRequestFailure());
  }
}