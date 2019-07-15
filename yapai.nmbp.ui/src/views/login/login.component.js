/* jshint esversion: 6 */

import { loginApi, jsonApi } from '../../api/user';

export default {
  data() {
    return {
      loginForm: {
        key: '00d91e8e0cca2b76f515926a36db68f5',
        phone: '',
        passwd: ''
      }
    };
  },
  methods: {
    gotoPage(page) {
      this.$router.push({ name: page, params: { username: 'admin' } });
    },
    handleLogin(page) {
      //console.log(this.loginForm);
      jsonApi().then(res => {
        //console.log(res);
      });
      loginApi(this.loginForm).then(res => {
        //console.log(res);
        if (res.code == 200) {
          this.gotoPage(page);
        }
      });
    }
  }
};
