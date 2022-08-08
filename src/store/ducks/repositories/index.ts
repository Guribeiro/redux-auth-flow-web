import { RepositoriesState, RepositoriesAction } from './types';
import { Reducer } from 'react';

const INITIAL_STATE: RepositoriesState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<RepositoriesState, RepositoriesAction> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case `LOAD_REQUEST`:
      return { ...state, loading: true };
    case `LOAD_REQUEST_SUCCESS`:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case `LOAD_REQUEST_FAILURE`:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default reducer;
