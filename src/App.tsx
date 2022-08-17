import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';
import ThemeProvider from './styles/theme';

import GlobalStyle from './styles/global';

import { CustomRouter } from './routes/CutomRouter';
import history from './routes/history';

function App() {
  return (
    <Provider store={store}>
      <CustomRouter history={history}>
        <ThemeProvider>
          <Routes />
        </ThemeProvider>
      </CustomRouter>
      <GlobalStyle />
    </Provider>
  );
}

export default App;
