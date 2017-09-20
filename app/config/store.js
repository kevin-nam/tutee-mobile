import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMidleware from 'redux-saga';

// import reducer from '../reducers';
// import rootSaga from './sagas';

// const sagaMiddleware = createSagaMidleware();
// const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  // middleware.push(logger);
}

// const store = createStore(reducer, applyMiddleware(...middleware));

// sagaMiddleware.run(rootSaga);

export default store;
