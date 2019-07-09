/* jshint esversion:6 */
const socket = {
  namespaced: true,
  state: {
    isCollapse: false //控制主页的侧边栏伸缩
  },
  /* 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
  Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一
  个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
  这个回调函数就是我们实际进行状态更改的地方，并且它会接受 
  state 作为第一个参数： */
  mutations: {},

  actions: {}
};

export default socket;
