import { combineReducers } from 'redux'
import {
  createCarReducer,
  logInReducer,
  redirectReducer,
  removeCarReducer,
  editCarReducer,
  getCarsReducer,
} from './index'

// TODO:Import reducers

/** Combine all reducers
 * @returns {Object} store
 */
export default function createReducer() {
  const rootReducer = combineReducers({
    login: logInReducer,
    redirect: redirectReducer,
    create: createCarReducer,
    remove: removeCarReducer,
    edit: editCarReducer,
    getAll: getCarsReducer,
  })
  return rootReducer
}
