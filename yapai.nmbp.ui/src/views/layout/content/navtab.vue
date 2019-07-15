<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="$store.state.isCollapse"
  >
    <NavTabItem v-for="route in menu" :key="route.path" :item="route"></NavTabItem>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex';
import NavTabItem from './navtabItem.vue';
export default {
  components: { NavTabItem },
  data() {
    return {
      navtablist: [],
    };
  },
  created() {},
  computed: {
    ...mapGetters(['sidebar', 'menu']),
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    gotoPage(page) {
      this.$router.push({ name: page });
    },
  },
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  text-align: left;
}
.el-menu-item.is-active {
  color: #ff4040 !important;
}
</style>