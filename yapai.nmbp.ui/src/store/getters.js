/* jshint esversion:6 */
const getters = {
  // 用户模块
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,

  // 权限模块
  menu: state => state.permission.menu,
  dataPerms: state => state.permission.dataPerms
};
export default getters;
