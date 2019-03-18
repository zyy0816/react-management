
import axios from 'axios';
import { getUrl } from './util';
import { message } from 'antd';

const defaultOptions = {
  baseURL: `${getUrl()}`,
  method: 'GET',
  timeout: 30000,
  validateStatus: function () {
    return true
  }
}

const request = axios.create(defaultOptions);

request.interceptors.request.use(function (config) {
  config.headers.Accept = 'application/json';
  return config
})

request.interceptors.response.use(responseInterceptor)

// 通用响应拦截器
const responseInterceptor = async (response) => {
  const { status, data } = response;
  
  if (status >= 200 && status < 300) {
    if (data.code == 1) {
      return Promise.resolve(data)
    } else if (data.code == 10004 || data.code == 10005 || data.code == 10007) {
      location.href = '#/';
      message.destroy();
      message.error(data && data.message || '网络错误');
      return Promise.resolve(data)
    } else {
      message.destroy();
      message.error(data && data.message || '网络错误');
      return Promise.resolve(data)
    }
  } else {
    // console.log(data)
    message.destroy();
    message.error(data && data.message || '网络错误');
    return Promise.reject(response);
  }
}

export default request