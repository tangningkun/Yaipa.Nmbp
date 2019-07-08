/* jshint esversion: 6 */
import NavTab from './content/navtab.vue';
import NavHeader from './content/navheader.vue';
export default {
  components: { NavTab, NavHeader },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    controlNav() {
      this.$store.state.isCollapse = this.$store.state.isCollapse ? false : true;
    }
  }
};
