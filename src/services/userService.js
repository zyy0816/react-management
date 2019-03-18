
// import request from './../utils/request';//接口数据调用
import { ajax }from './../utils/ajax';//mock数据调用

export async function fakeAccountLogin(params) {
  return await ajax('/api/login/account', params)
  // return request.post('/api/login/account', params);
}

