/* jshint esversion: 6 */

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const route = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      title: '登录页'
    }
  } /* ,
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register/register.vue'),
    meta: {
      title: '注册页'
    }
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/views/layout/layout.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/home.vue'),
        meta: {
          title: '主页'
        }
      },
      {
        path: '/page',
        name: 'page',
        component: () => import('@/views/page/page.vue'),
        meta: {
          title: '页面'
        }
      } 
    ]
  }*/
];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: route
});
