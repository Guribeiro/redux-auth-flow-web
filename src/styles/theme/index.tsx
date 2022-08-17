import { ReactNode } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
  useTheme,
} from 'styled-components';

import { Theme, SwitchThemePayload } from '../../store/ducks/theme/types';
import * as ThemeActions from '../../store/ducks/theme/actions';
import { ApplicationState } from '../../store';

interface StateProps {
  theme: Theme;
  loading: boolean;
  error: boolean;
}

interface DispatchProps {
  switchThemeByTitle(data: SwitchThemePayload): void;
}

interface OwnProps {
  children: ReactNode;
}

type ThemeProviderProps = StateProps & DispatchProps & OwnProps;

function ThemeProvider({
  children,
  theme,
  error,
  loading,
  switchThemeByTitle,
}: ThemeProviderProps): JSX.Element {
  // const { colors } = useTheme();

  // const GlobalStyle = createGlobalStyle`
  //   background-color: ${colors.background};
  // `;

  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}

const mapStateToProps = ({ theme }: ApplicationState) => ({
  theme: theme.data,
  loading: theme.loading,
  error: theme.error,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(ThemeActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ThemeProvider);
