/* jshint esversion:6 */
import axios from 'axios';
import { Message } from 'element-ui';
import store from '../store/index';

/**
 * 创建axios实例
 */
const service = axios.create({
  baseURL: 'https://www.apiopen.top', // api的base_url
  timeout: 3000 // 请求超时时间
});

service.interceptors.request.use(
  config => {
    // 对全局参数做过滤，把不存在的参数删除
    if (config.method === 'post') {
      for (const key in config.data) {
        if (!config.data[key] && config.data[key] !== 0) {
          delete config.data[key];
        }
      }
    } else if (config.method === 'get') {
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
