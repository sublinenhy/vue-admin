<template>
  <div id="main">
    <div class="sidebar-wrap">
      <SideBar></SideBar>
    </div>
    <div class="content-wrap">
      <HeadBar></HeadBar>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import HeadBar from "@/components/HeadBar";

export default {
  name: "Overview",
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
  methods: {
    //vue中是数据驱动视图
    //js中是直接操纵DOM元素
  },
  props: {},
  watch: {}
};
</script>

<style lang="scss" scoped>
#main {
  float: left;
  height: 100%;
  width: 100%;
  background-color: #fdfef0;
}
.sidebar-wrap {
  width: 250px;
}
.content-wrap {
  left: 250px;
  width: 100%;
}
</style>
