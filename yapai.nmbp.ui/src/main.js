/* jshint esversion: 6 */

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import './common/config/errorLog'; // 错误日志
import './common/config/permission'; // 路由动态配置
import prototype from './common/js/prototype'; // 挂载在原型上的方法
import 'babel-polyfill';

Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
