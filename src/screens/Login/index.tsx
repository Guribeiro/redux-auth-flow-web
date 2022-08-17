import { FormEvent, useCallback, useState } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import DarkModeToggle from 'react-dark-mode-toggle';
import { ApplicationState } from '../../store';
import * as AuthenticationActions from '../../store/ducks/authentication/actions';
import * as ThemeActions from '../../store/ducks/theme/actions';
import {
  AuthenticationState,
  LoginRequestPayload,
} from '../../store/ducks/authentication/types';

import { SwitchThemePayload, ThemeState } from '../../store/ducks/theme/types';

import Button from '../../components/Button';
import InputText from '../../components/Inputs/InputText';
import InputPassword from '../../components/Inputs/InputPassword';

import { Main } from './styles';

interface StateProps {
  authentication: AuthenticationState;
  theme: ThemeState;
}

interface DispatchProps {
  loginRequest(data: LoginRequestPayload): void;
  logoutRequest(): void;
  switchThemeByTitle(data: SwitchThemePayload): void;
}

type LoginProps = StateProps & DispatchProps;

function Login({
  loginRequest,
  logoutRequest,
  switchThemeByTitle,
  authentication,
  theme,
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
    [username, password],
  );

  return (
    <Main>
      <header>
        <DarkModeToggle
          onChange={() =>
            switchThemeByTitle({
              title: theme.data.title,
            })
          }
          checked={theme.data.title === 'dark'}
          size={80}
          speed={5}
        />
      </header>

      <div>
        <h1>Login</h1>

        <p>Informe suas credenciais para ter acesso à aplicação</p>
      </div>

      <section>
        <form onSubmit={handleSubmitLogin}>
          <fieldset>
            <InputText label="username" name="username" />
          </fieldset>
          <fieldset>
            <InputPassword label="password" name="password" />
          </fieldset>

          <Button type="submit">
            {authentication.loading ? 'Loading' : 'Login'}
          </Button>

          {authentication.error && <p>Falha no login</p>}
        </form>
      </section>
    </Main>
  );
}

const mapStateToProps = ({ authentication, theme }: ApplicationState) => ({
  authentication,
  theme,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ ...AuthenticationActions, ...ThemeActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
