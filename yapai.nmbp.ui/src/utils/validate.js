/* jshint esversion: 6 */
export function isvalidUsername(str) {
  if (!str) {
    return true;
  }
  const valid = ['admin', 'editor'];
  if (valid.indexOf(str.trim()) >= 0) return false;
  else return true;
}
