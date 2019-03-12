import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers/'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './../sagas';

const sagaMiddleware = createSagaMiddleware();


let store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware) 
);

// export { store }

export default function configureStore() {
  // 运行saga
  sagaMiddleware.run(rootSaga);
  return { store }
}
