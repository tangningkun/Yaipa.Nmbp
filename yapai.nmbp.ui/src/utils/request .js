/* jshint esversion:6 */
import axios from 'axios';
import { Message, MessageBox } from 'element-ui';
import store from '../store/index';

/**
 * 创建axios实例
 */
const service = axios.create({
  //baseURL: 'https://www.apiopen.top', // api的base_url
  timeout: 3000 // 请求超时时间
});

service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

service.interceptors.request.use(
  config => {
    // 登录流程控制中，根据本地是否存在token判断用户的登录情况
    // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
    // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
    // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
    const token = store.state.token;
    token && (config.headers.Authorization = token);
    // 对全局参数做过滤，把不存在的参数删除
    if (config.method === 'post') {
      console.log('POST');
      for (const key in config.data) {
        if (!config.data[key] && config.data[key] !== 0) {
          delete config.data[key];
        }
      }
    } else if (config.method === 'get') {
      console.log('GET');
      for (const key in config.params) {
        if (!config.params[key] && config.params[key] !== 0) {
          delete config.params[key];
        }
      }
    }
    // 全局去前后空格
    function dataTrim(data) {
      if (Array.isArray(data)) {
        for (let item of data) {
          if (typeof item === 'object') {
            dataTrim(item);
          } else if (typeof item === 'string') {
            item = item.trim();
          }
        }
      } else if (typeof data === 'object') {
        for (const key in data) {
          if (typeof data[key] === 'object') {
            dataTrim(data[key]);
          } else if (typeof data[key] === 'string') {
            data[key] = data[key].trim();
          }
        }
      }
    }
    dataTrim(config.data);
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject();
  }
);

service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data;
    } else {
      Promise.reject();
    }
  },
  error => {
    console.log(error);
    return Promise.reject();
  }
);

export default service;

/**
 * 提示函数
 * 禁止点击蒙层、显示一秒后关闭
 */
/* const tip = msg => {
  Message({
    showClose: true,
    message: msg,
    duration: 3 * 1000
  });
}; */

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
/* const errorHandle = (status, other) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      toLogin();
      break;
    // 403 token过期
    // 清除token并跳转登录页
    case 403:
      tip('登录过期，请重新登录');
      localStorage.removeItem('token');
      store.commit('loginSuccess', null);
      setTimeout(() => {
        toLogin();
      }, 1000);
      break;
    // 404请求不存在
    case 404:
      tip('请求的资源不存在');
      break;
    default:
      console.log(other);
  }
}; */

/* if (process.env.NODE_ENV == 'development') {
  axios.defaults.baseURL = 'https://www.baidu.com';
} else if (process.env.NODE_ENV == 'debug') {
  axios.defaults.baseURL = 'https://www.ceshi.com';
} else if (process.env.NODE_ENV == 'production') {
  axios.defaults.baseURL = 'https://www.production.com';
} */
