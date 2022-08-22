import { useCallback, useState } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import DarkModeToggle from 'react-dark-mode-toggle';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

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

type SigninProps = StateProps & DispatchProps;

interface FormData {
  username: string;
  password: string;
  remember: boolean;
}

const defaultValues: FormData = {
  username: '',
  password: '',
  remember: false,
};

const schema = yup.object().shape({
  username: yup.string().min(5, 'username must contain at least 05 caracteres'),
  password: yup.string().required('password is a required field'),
  remember: yup.boolean(),
});

function Signin({
  loginRequest,
  switchThemeByTitle,
  authentication,
  theme,
}: SigninProps): JSX.Element {
  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = useCallback(
    ({ username, password }: FormData) => {
      loginRequest({
        username,
        password,
      });
    },
    [loginRequest],
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
        <h1>Signin</h1>

        <h2>Welcome back</h2>

        <p>Welcome back! Please enter your details</p>
      </div>

      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <Controller
              name="username"
              control={control}
              render={({
                field: { value, onChange, name },
                fieldState: { error },
              }) => (
                <InputText
                  label="username"
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error?.message}
                />
              )}
            />
          </fieldset>
          <fieldset>
            <Controller
              name="password"
              control={control}
              render={({
                field: { value, onChange, name },
                fieldState: { error },
              }) => (
                <InputPassword
                  label="password"
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error?.message}
                />
              )}
            />
          </fieldset>

          <Button type="submit">
            {authentication.loading ? 'Loading' : 'Login'}
          </Button>

          <footer>
            <Link to="/signin">Already have an account?</Link>
          </footer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
