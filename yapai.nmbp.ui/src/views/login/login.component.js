/* jshint esversion: 6 */

import { loginApi } from '../../api/user';
import { gotoPage } from '../../utils/gotoPage';

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
      console.log(this.loginForm);
      loginApi(this.loginForm).then(res => {
        console.log(res);
        if (res.code == 200) {
          this.gotoPage(page);
        }
      });
    }
  }
};
