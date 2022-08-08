import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { AxiosResponse } from 'axios';
import {
  loadRequestSuccess,
  loadRequestFailure,
} from './actions';

function apiRequestRepositories(url: string) {
  return api.get(url);
}

export function* load() {
  try {
    const response: AxiosResponse<any, any> = yield call(
      apiRequestRepositories,
      `users/guribeiro/repos`,
    );
    yield put(loadRequestSuccess(response.data.data));
  } catch (error) {
    yield put(loadRequestFailure());
  }
}
