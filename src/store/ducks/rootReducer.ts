import { combineReducers } from 'redux';

import authentication from './authentication';
import theme from './theme';

export default combineReducers({
  authentication,
  theme,
});
