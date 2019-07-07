export default {
  methods: {
    gotoPage(page) {
      this.$router.push({ name: page, params: { username: 'admin' } });
    }
  }
};
