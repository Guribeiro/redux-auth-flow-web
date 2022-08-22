import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import store from './store';
import ThemeProvider from './styles/theme';

import GlobalStyle from './styles/global';

import { CustomRouter } from './routes/CutomRouter';
import history from './routes/history';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
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
