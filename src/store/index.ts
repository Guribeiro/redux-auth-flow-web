import { configureStore, Store, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { RepositoriesState } from './ducks/repositories/types';
import { AuthenticationState } from './ducks/authentication/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  repositories: RepositoriesState;
  authentication: AuthenticationState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(sagaMiddleware);
  },
});

sagaMiddleware.run(rootSaga);

export default store;
