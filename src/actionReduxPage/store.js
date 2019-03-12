import { createStore, applyMiddleware } from 'redux'
import reducers from './redux/index'
import thunk from 'redux-thunk'

let store = createStore(
  reducers,
  applyMiddleware(thunk)
);

export { store }
