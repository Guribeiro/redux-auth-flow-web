import { configureStore, Store, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { AuthenticationState } from './ducks/authentication/types';

import preloadedAuthenticationState from './ducks/authentication/preloadedAuthenticationState';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  authentication: AuthenticationState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(sagaMiddleware);
  },
  preloadedState: {
    authentication: preloadedAuthenticationState(),
  },
});

sagaMiddleware.run(rootSaga);

export default store;
