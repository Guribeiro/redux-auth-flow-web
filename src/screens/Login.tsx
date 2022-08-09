import { FormEvent, useCallback, useEffect, useState } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as AuthenticationActions from '../store/ducks/authentication/actions';
import {
  Authentication,
  LoginRequestPayload,
} from '../store/ducks/authentication/types';

interface StateProps {
  authentication: Authentication;
  loading: boolean;
  error: boolean;
}

interface DispatchProps {
  loginRequest(data: LoginRequestPayload): void;
  logoutRequest(): void;
}

interface OwnProps {}

type LoginProps = StateProps & DispatchProps & OwnProps;

function Login({
  loginRequest,
  logoutRequest,
  authentication,
  error,
  loading,
}: LoginProps): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitLogin = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (username === '' || password === '') return;

      loginRequest({
        username,
        password,
      });

      setUsername('');
      setPassword('');
    },
    [username, password, loading],
  );

  return (
    <main>
      <h1>Login</h1>
      <form onSubmit={handleSubmitLogin}>
        <p>
          <label htmlFor="username" style={{ display: 'block' }}>
            username
            <input
              id="username"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label htmlFor="password" style={{ display: 'block' }}>
            password
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
        </p>

        {!authentication.user && (
          <button type="submit">{loading ? 'Loading' : 'Login'}</button>
        )}

        {error && <p>Falha no login</p>}
      </form>

      {authentication.user && (
        <button type="button" onClick={logoutRequest}>
          Logout
        </button>
      )}
    </main>
  );
}

const mapStateToProps = ({ authentication }: ApplicationState) => ({
  authentication: authentication.data,
  loading: authentication.loading,
  error: authentication.error,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(AuthenticationActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
