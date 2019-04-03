import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router/index';
import { Provider, ConnectedRouter } from 'react-redux';
require('../mock/user');
import ErrorBoundary from '@/components/ErrorBoundary';




// import { store } from './actionReduxPage/store'

import configureStore from './store';

const { store } = configureStore();

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <Router />
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root')
);
  