import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import DarkModeToggle from 'react-dark-mode-toggle';

import { ApplicationState } from '../../store';
import * as AuthenticationActions from '../../store/ducks/authentication/actions';
import * as ThemeActions from '../../store/ducks/theme/actions';

import {
  AuthenticationState,
  LoginRequestPayload,
} from '../../store/ducks/authentication/types';
import { ThemeState, SwitchThemePayload } from '../../store/ducks/theme/types';

import Button from '../../components/Button';

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

type DashboardProps = StateProps & DispatchProps;

function Dashboard({
  authentication,
  theme,
  logoutRequest,
  switchThemeByTitle,
}: DashboardProps): JSX.Element {
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
        <h1>Bem-vindo(a), {authentication.data.user.name}</h1>
      </div>

      <section>
        {authentication.data.user && (
          <Button type="button" onClick={logoutRequest}>
            Logout
          </Button>
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
