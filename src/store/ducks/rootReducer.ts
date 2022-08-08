import { combineReducers } from 'redux';

import repositories from './repositories';
import authentication from './authentication';

export default combineReducers({
  repositories,
  authentication,
});
