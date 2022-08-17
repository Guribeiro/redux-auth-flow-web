import { configureStore, Store, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { AuthenticationState } from './ducks/authentication/types';
import { ThemeState } from './ducks/theme/types';

import preloadedAuthenticationState from './ducks/authentication/preloadedAuthenticationState';
import preloadedThemeState from './ducks/theme/preloadedThemeState';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  authentication: AuthenticationState;
  theme: ThemeState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(sagaMiddleware);
  },
  preloadedState: {
    authentication: preloadedAuthenticationState(),
    theme: preloadedThemeState(),
  },
});

sagaMiddleware.run(rootSaga);

export default store;
