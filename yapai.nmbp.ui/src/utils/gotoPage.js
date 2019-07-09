/* jshint esversion: 6 */
export const gotoPage = obj => {
  this.$router.push({ name: obj, params: { username: 'admin' } });
  return;
};
