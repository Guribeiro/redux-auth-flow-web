import { STORAGE_AUTHENTICATION_KEY } from './sagas';
import { Authentication } from './types';

const preloadedAuthenticationState = () => {
  const storagedData = localStorage.getItem(STORAGE_AUTHENTICATION_KEY);

  if (!storagedData) return;

  const { token, user } = JSON.parse(storagedData);

  const data: Authentication = {
    token,
    user,
  };

  const authenticationState = {
    data,
    error: false,
    loading: false,
  };

  return authenticationState;
};

export default preloadedAuthenticationState;
