/* jshint esversion: 6 */

import Vue from 'vue';
import Router from 'vue-router';
/** 布局组件 */
import Layout from '@/views/layout/layout';

/**
 * 路由对象的key
 * path 路径
 * component 映射页面
 * name 路由名字 (唯一，不可重复，相当于唯一标识)
 * hidden 设置为true则加载菜单的时候不渲染这个路由
 * meta: { // 自定义参数，这里用来做菜单渲染
 *    title 菜单渲染显示的名字
 *    icon  菜单图标
 * }
 */

/**
 * 基础路由, 不被权限控制的
 */

Vue.use(Router);
export const route = [
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/views/login/login'),
    meta: {
      title: '登录页'
    }
  },
  {
    path: '/register',
    name: 'register',
    hidden: true,
    component: () => import('@/views/register/register'),
    meta: {
      title: '注册页'
    }
  },
  {
    path: '/401',
    name: '401',
    hidden: true,
    meta: { title: '401', icon: '' },
    component: () => import('@/views/errorPage/401')
  },
  {
    path: '/404',
    name: '404',
    hidden: true,
    meta: { title: '404', icon: '' },
    component: () => import('@/views/errorPage/404')
  }
];

/* export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: route
}); */
export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: route
});
