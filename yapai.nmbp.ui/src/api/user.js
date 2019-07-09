/* jshint esversion:6 */
import request from '../utils/request ';

export const loginApi = data => {
  return request({
    url: 'https://www.apiopen.top/login',
    method: 'get',
    params: data
  });
};
