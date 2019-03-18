import { all } from 'redux-saga/effects';
import homePageSaga from './homePage';
import loginSage from './login';

export default function* rootSaga() {
  yield all([
    homePageSaga(),
    loginSage(),
  ]);
}