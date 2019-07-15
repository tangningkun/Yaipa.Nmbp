/* jshint esversion: 6 */
import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import socket from './modules/socket';
import permission from './modules/permission';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    permission,
    socket
  },
  getters
});
