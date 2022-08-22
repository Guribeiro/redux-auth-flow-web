import { useCallback, useState } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import DarkModeToggle from 'react-dark-mode-toggle';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiArrowLeft } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import { ApplicationState } from '../../store';
import * as AuthenticationActions from '../../store/ducks/authentication/actions';
import * as ThemeActions from '../../store/ducks/theme/actions';
import {
  AuthenticationState,
  LoginRequestPayload,
  SignupRequestPayload,
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
  signupRequest(data: SignupRequestPayload): void;
  switchThemeByTitle(data: SwitchThemePayload): void;
}

type LoginProps = StateProps & DispatchProps;

interface FormData {
  name: string;
  username: string;
  password: string;
  confirm_password: string;
}

const defaultValues: FormData = {
  name: '',
  username: '',
  password: '',
  confirm_password: '',
};

const schema = yup.object().shape({
  name: yup.string().required('name is a required field'),
  username: yup.string().min(5, 'username must contain at least 05 caracteres'),
  password: yup.string().required('password is a required field'),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

function Login({
  loginRequest,
  signupRequest,
  switchThemeByTitle,
  authentication,
  theme,
}: LoginProps): JSX.Element {
  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = useCallback(
    ({ name, username, password }: FormData) => {
      signupRequest({
        name,
        username,
        password,
      });
    },
    [loginRequest],
  );

  return (
    <Main>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
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
        <h1>Signup</h1>

        <p>Enter your details to get sign in to your account</p>
      </div>

      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <Controller
              name="name"
              control={control}
              render={({
                field: { value, onChange, name },
                fieldState: { error },
              }) => (
                <InputText
                  label="name"
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

          <fieldset>
            <Controller
              name="confirm_password"
              control={control}
              render={({
                field: { value, onChange, name },
                fieldState: { error },
              }) => (
                <InputPassword
                  label="confirm password"
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
