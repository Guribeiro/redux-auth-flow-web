export enum RepositoriesTypes {
  LOAD_REQUEST = `LOAD_REQUEST`,
  LOAD_REQUEST_SUCCESS = `LOAD_REQUEST_SUCCESS`,
  LOAD_REQUEST_FAILURE = `LOAD_REQUEST_SUCCESS`,
}

export interface Repository {
  id: number;
  name: string;
}

export interface RepositoriesAction {
  type: keyof typeof RepositoriesTypes;
  payload: {
    data: any;
  };
}

export interface RepositoriesState {
  readonly data: Repository[];
  readonly loading: boolean;
  readonly error: boolean;
}
