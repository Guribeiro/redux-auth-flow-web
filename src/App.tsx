import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';

import { CustomRouter } from './routes/CutomRouter';
import history from './routes/history';

function App() {
  return (
    <Provider store={store}>
      <CustomRouter history={history}>
        <Routes />
      </CustomRouter>
    </Provider>
  );
}

export default App;
