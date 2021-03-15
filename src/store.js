import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import moviesReducer from './features/movies/moviesSlice';
import mySaga from './saga/sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({thunk: false}), sagaMiddleware];

export const rootReducer = combineReducers({
  movies: moviesReducer,
});

// @see: https://github.com/reduxjs/redux-toolkit/blob/master/docs/api/configureStore.md
const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware,
  });
  sagaMiddleware.run(mySaga);
  return store;
};

export default createStore;
