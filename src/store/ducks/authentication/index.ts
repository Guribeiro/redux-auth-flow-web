import { Reducer } from 'redux';
import {
  AuthenticationState,
  AuthenticationAction,
  Authentication,
  AuthenticationTypes
} from './types';

const {
    LOAD_AUTHENTICATION_REQUEST, 
    LOAD_AUTHENTICATION_REQUEST_FAILURE, 
    LOAD_AUTHENTICATION_REQUEST_SUCCESS, 
    LOGOUT_REQUEST, 
    LOGOUT_REQUEST_FAILURE, 
    LOGOUT_REQUEST_SUCCESS
  } = AuthenticationTypes;

const INITIAL_STATE: AuthenticationState = {
  data: {} as Authentication,
  error: false,
  loading: false,
};

const reducer: Reducer<AuthenticationState, AuthenticationAction> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case LOAD_AUTHENTICATION_REQUEST:
      return { ...state, loading: true }; 
    case LOAD_AUTHENTICATION_REQUEST_SUCCESS:
      return {
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case LOAD_AUTHENTICATION_REQUEST_FAILURE:
      return { ...state, loading: false, error: true };
    case LOGOUT_REQUEST:
      return {...state, loading: true, error: false}
    case LOGOUT_REQUEST_FAILURE:
      return {...state, loading: false, error: true}
    case LOGOUT_REQUEST_SUCCESS:
      return {loading: false, error: false, data: {}}
    default:
      return state;
  }
};

export default reducer;
