export enum ThemeTypes {
  SWITCH_THEME_REQUEST = 'SWITCH_THEME_REQUEST',
  SWITCH_THEME_REQUEST_SUCCESS = 'SWITCH_THEME_REQUEST_SUCCESS',
  SWITCH_THEME_REQUEST_FAILURE = 'SWITCH_THEME_REQUEST_FAILURE',
}

export interface Theme {
  title: string;

  colors: {
    primary: string;

    background: string;
    text_primary: string;
  };
}

export interface SwitchThemePayload {
  title: string;
}

export interface ThemeAction {
  type: keyof typeof ThemeTypes;
  payload: any;
}

export interface ThemeState {
  readonly data: Theme;
  readonly loading: boolean;
  readonly error: boolean;
}
