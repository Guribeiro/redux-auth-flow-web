import Routes from './routes'
import {BrowserRouter} from 'react-router-dom';
import store from './store'
import { Provider } from 'react-redux';

import { CustomRouter } from './routes/CutomRouter';
import history from './routes/history';

function App() {
  return (
    <Provider store={store}>
      <CustomRouter history={history}>
          <Routes />
      </CustomRouter>
    </Provider>
  )
}

export default App
