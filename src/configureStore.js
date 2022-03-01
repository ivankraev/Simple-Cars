import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { omit } from 'lodash';
import createSagaMiddleware from 'redux-saga';
import createTransform from 'redux-persist/es/createTransform';
import createReducer from './reducers/rootReducer.js';
import rootSaga from './sagas/rootSaga.js';
// Redux persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const blacklist = [
  'login.errorMsg',
  'login.isLoading',
  'redirect'
]

const persistConfig = {
  key: 'root',
  storage,
  blacklist,
  transforms: [
    createTransform((state, key) => {
      const blacklist_Key = blacklist
        .filter((path) => path.startsWith(`${key}.`))
        .map((path) => path.substr(key.length + 1));
      return omit(state, ...blacklist_Key);
    }, null),
  ]
}

const persistedReducer = persistReducer(persistConfig, createReducer());

/** Store Reducer.
 * @param {Object} initialState - Initial state
 * @return {Object} - return store
 */
export default function configureStore(initialState = []) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return [store, persistor];
}
