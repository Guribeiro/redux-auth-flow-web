import { STORAGE_THEME_KEY } from './sagas';
import { Theme, ThemeState } from './types';

import { light } from '../../../styles/theme/light';

const preloadedAuthenticationState = (): ThemeState => {
  const storagedData = localStorage.getItem(STORAGE_THEME_KEY);

  if (!storagedData) {
    return {
      data: light,
      error: false,
      loading: false,
    };
  }

  const { title, colors } = JSON.parse(storagedData);

  const data: Theme = {
    title,
    colors,
  };

  const themeState = {
    data,
    error: false,
    loading: false,
  };

  return themeState;
};

export default preloadedAuthenticationState;
