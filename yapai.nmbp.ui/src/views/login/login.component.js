/* jshint esversion: 6 */

import { loginApi, login1Api } from '../../api/user';
import { Message } from 'element-ui';

export default {
  data() {
    return {
      formInfo: {
        remember: false, // 记住密码
        // 表单参数
        data: {
          account: 'test',
          password: '123456',
          type: 2 // 平台用户
        }
      },
      loginForm: {
        account: 'test',
        password: '123456',
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
    },
    login() {
      console.log('123');
      let data = { user: 'admin', psw: 'ypqj@1234' };
      login1Api(JSON.stringify(data)).then(res => {
        console.log('res', res);
      });
    }
  },

  mounted() {
    this.login();
  }
};
