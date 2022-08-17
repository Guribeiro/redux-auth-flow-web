import { Reducer } from 'redux';
import { ThemeState, ThemeAction, Theme, ThemeTypes } from './types';

import { light } from '../../../styles/theme/light';
import { dark } from '../../../styles/theme/dark';

const {
  SWITCH_THEME_REQUEST,
  SWITCH_THEME_REQUEST_SUCCESS,
  SWITCH_THEME_REQUEST_FAILURE,
} = ThemeTypes;

const INITIAL_STATE: ThemeState = {
  data: dark,
  loading: false,
  error: false,
};

const reducer: Reducer<ThemeState, ThemeAction> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case SWITCH_THEME_REQUEST:
      return { ...state, loading: true };
    case SWITCH_THEME_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    case SWITCH_THEME_REQUEST_FAILURE:
      return { loading: false, error: true, data: {} as Theme };
    default:
      return state;
  }
};

export default reducer;
