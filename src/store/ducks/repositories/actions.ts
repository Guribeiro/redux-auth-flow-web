import { action } from 'typesafe-actions';
import { RepositoriesTypes, Repository } from './types';

export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST);

export const loadRequestSuccess = (data: Repository[]) => {
  return action(RepositoriesTypes.LOAD_REQUEST_SUCCESS, { data });
};

export const loadRequestFailure = () => {
  return action(RepositoriesTypes.LOAD_REQUEST_FAILURE);
};
