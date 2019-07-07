export default obj => {
  const page = {
    gotoPage: function(obj) {
      return this.$router.push({ name: obj.page, params: obj.params });
    }
  };
  return page.gotoPage(obj);
};
