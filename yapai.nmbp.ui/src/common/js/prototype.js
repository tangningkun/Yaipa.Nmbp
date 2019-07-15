/* jshint esversion:6 */

import config from '../js/config'; // 配置文件
import utils from '../js/utils'; // 公共方法
import validate from '../js/validate'; // 公共验证方法
import initRules from '../js/initRules'; // 初始化验证规则
import initDataPerms from '../js/initDataPerms'; // 初始化数据权限
import handleAPI from '../js/handleApi'; // 基本操作API的方法
import eventBus from '../js/eventBus';

export default {
  install(Vue, options) {
    Vue.prototype.$config = config;
    Vue.prototype.$fn = utils;
    Vue.prototype.$validate = validate;
    Vue.prototype.$initRules = initRules;
    Vue.prototype.$initDataPerms = initDataPerms;
    Vue.prototype.$handleAPI = handleAPI;
    Vue.prototype.$eventBus = eventBus;
  }
};
