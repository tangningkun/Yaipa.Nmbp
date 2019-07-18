/* jshint esversion:6 */
import request from '../utils/request ';
import httpservice from './httpservice';

/*
const article = {    
    // 新闻列表    
    articleList () {        
        return axios.get(`${base.sq}/topics`);    
    },    
    // 新闻详情,演示    
    articleDetail (id, params) {        
        return axios.get(`${base.sq}/topic/${id}`, {            
            params: params        
        });    
    },
    // post提交    
    login (params) {        
        return axios.post(`${base.sq}/accesstoken`, qs.stringify(params));    
    }
    // 其他接口…………
}

export default article;
 */

export const loginApi = data => {
  return request({
    url: httpservice.loginApi,
    method: 'post',
    data
  });
};
export const getUserInfoApi = data => {
  return request({
    url: httpservice.userInfoApi,
    method: 'get',
    data
  });
};

// 退出登录
export const loginOutApi = data => {
  return request({
    url: httpservice.loginOutApi,
    method: 'post',
    data
  });
};

export const jsonApi = data => {
  return request({
    url: httpservice.jsonApi,
    method: 'get',
    data
  });
};

export const routeApi = data => {
  return request({
    url: httpservice.routeApi,
    method: 'get',
    data
  });
};

export const login1Api = data => {
  return request({
    url: httpservice.login1Api,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data
  });
};
