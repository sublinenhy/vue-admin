<template>
  <div id="main">
    <div class="sidebar-wrap">
      <SideBar></SideBar>
    </div>
    <div class="content-wrap">
      <HeadBar></HeadBar>
      <div class="content-view">
        <router-view name="rvContent"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import HeadBar from "@/components/HeadBar";

export default {
  name: "Main",
  components: {
    SideBar,
    HeadBar
  },
  data() {
    return {
      menuTab: [{ txt: "登陆" }, { txt: "注册" }]
    };
  },
  created() {},
  mounted() {},
  methods: {},
  props: {},
  watch: {}
};
</script>

<style lang="scss" scoped>
#main {
  float: left;
  height: 100%;
  width: 100%;
  background-color: #fafafb;
}
.sidebar-wrap {
  width: 250px;
}
.content-wrap {
  margin-left: 250px;
}
.content-view {
  margin-top: 40px;
  margin-left: 40px;
}
</style>
