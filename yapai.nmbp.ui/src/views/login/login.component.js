/* jshint esversion: 6 */
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: '213'
      }
    };
  },
  methods: {
    gotoPage(page) {
      this.$router.push({ name: page, params: { username: 'admin' } });
    }
  }
};
