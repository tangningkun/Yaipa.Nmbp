/* jshint esversion: 6 */

import { loginApi } from '../../api/user';
import { Message } from 'element-ui';

export default {
  data() {
    return {
      loginForm: {
        account: '',
        password: '',
        type: 2
      }
    };
  },
  methods: {
    gotoPage(page) {
      this.$router.push({ name: page, params: { username: 'admin' } });
    },
    handleLogin(page) {
      console.log(this.loginForm);
      loginApi(this.loginForm).then(res => {
        //console.log(res);
        if (res.code == 20000) {
          // 记住cookie
          this.$store.dispatch('user/setToken', res.token);
          // 记住用户信息
          this.$store.dispatch('user/setUserInfo', res.content.data).then(() => {
            this.$router.push('/');
          });
        } else {
          Message({
            showClose: true,
            message: res.message,
            type: res.success ? 'success' : 'error',
            duration: 3 * 1000
          });
        }
      });
    }
  }
};
