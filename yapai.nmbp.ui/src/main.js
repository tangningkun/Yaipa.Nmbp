/* jshint esversion: 6 */

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'babel-polyfill';
import './registerServiceWorker';
import axios from '@/router/axios';

axios.init(router, store);

Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
