<template>
  <div id="sidebar-menu">
    <div class="menu-wrap">
      <img :src="menuIconUrl" alt="" />
      <p>{{ menuName }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBarMenu",
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    //vue中是数据驱动视图
    //js中是直接操纵DOM元素
  },
  props: {
    menuName: String,
    menuIconUrl: String
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
#sidebar-menu {
  height: 52px;
}
.menu-wrap {
  padding-top: 14px;
  padding-left: 25px;
}
img {
  float: left;
}
p {
  margin: 0px;
  padding-top: 3px;
  padding-left: 20px;
  float: left;
  font-size: 15px;
  font-weight: 500;
}
</style>
