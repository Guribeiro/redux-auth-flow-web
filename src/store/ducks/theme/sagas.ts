import { call, put } from 'redux-saga/effects';
import { SwitchThemePayload, Theme } from './types';

import { light } from '../../../styles/theme/light';
import { dark } from '../../../styles/theme/dark';

import { rootNavigate } from '../../../routes/history';

import {
  switchThemeByTitle,
  switchThemeByTitleSuccess,
  switchThemeByTitleFailure,
} from './actions';

export const STORAGE_THEME_KEY = '@test:theme';

interface Action {
  type: string;
  payload: SwitchThemePayload;
}

export function* switchTheme({ payload }: Action) {
  try {
    const { title } = payload;

    const theme = title === 'dark' ? light : dark;

    localStorage.setItem(STORAGE_THEME_KEY, JSON.stringify(theme));

    yield put(switchThemeByTitleSuccess(theme));
  } catch (error) {
    yield put(switchThemeByTitleFailure());
  }
}
