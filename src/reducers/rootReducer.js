import { combineReducers } from 'redux';
import redirectReducer from './redirectReducer';
import logInReducer from './login.reducer';
// TODO:Import reducers 

/** Combine all reducers
 * @returns {Object} store
 */
export default function createReducer() {
  const rootReducer = combineReducers({
    login: logInReducer,
    redirect: redirectReducer,
  });
  return rootReducer;
}
