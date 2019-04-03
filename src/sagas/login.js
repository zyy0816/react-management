import { put, takeEvery, fork, all, call } from 'redux-saga/effects';
import { fakeAccountLogin }from './../services/userService';

function* goLogin(action) {
  const { data,code } = yield call(fakeAccountLogin, action.payload);
  console.log(data,'data')
  if(code==1){
    sessionStorage.setItem("token","a123456");
    yield put({
      type: 'loginStore',
      payload: {
        name: data ? data.username : '',
        authority: data ? data.authority:'',
      }
    })
    action.callback&& action.callback();
  }
}

function* login() {
  yield takeEvery('changeLogin', goLogin);
}

export default function* loginSaga() {
  yield all([
    fork(login)
  ])
}