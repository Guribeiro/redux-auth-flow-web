import { action } from 'typesafe-actions';

import { ThemeTypes, Theme, SwitchThemePayload } from './types';

const {
  SWITCH_THEME_REQUEST,
  SWITCH_THEME_REQUEST_SUCCESS,
  SWITCH_THEME_REQUEST_FAILURE,
} = ThemeTypes;

export const switchThemeByTitle = (data: SwitchThemePayload) => {
  return action(SWITCH_THEME_REQUEST, data);
};

export const switchThemeByTitleSuccess = (data: Theme) => {
  return action(SWITCH_THEME_REQUEST_SUCCESS, data);
};

export const switchThemeByTitleFailure = () => {
  return action(SWITCH_THEME_REQUEST_FAILURE);
};
