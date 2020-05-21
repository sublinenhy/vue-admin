<template>
  <div id="sidebar">
    <div class="logo-wrap">
      <div class="logo">
        <img :src="logoIconUrl" alt="" />
        <div class="logo-name">Square</div>
      </div>
    </div>
    <div class="menu-wrap">
      <SideBarMenu
        :menuIconUrl="menuIconOverview"
        :menuName="menuNameOverview"
      ></SideBarMenu>
      <SideBarMenu
        :menuIconUrl="menuIconOverview"
        :menuName="menuNameOverview"
      ></SideBarMenu>
      <SideBarMenu
        :menuIconUrl="menuIconOverview"
        :menuName="menuNameOverview"
      ></SideBarMenu>
    </div>
  </div>
</template>

<script>
import SideBarMenu from "@/components/SideBarMenu";

export default {
  name: "SideBar",
  components: { SideBarMenu },
  data() {
    return {
      logoIconUrl: require("@/assets/logo-icon.png"),
      menuIconOverview: require("@/assets/menuIconOverview.png"),
      menuNameOverview: "Overview"
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
#sidebar {
  float: left;
  height: 100vh;
  width: 250px;
  background-color: #ffffff;
  border-right-style: outset;
  border-width: 0.3px;
  border-color: #fffefe4a;
}
.logo-wrap {
  width: 250px;
  height: 70px;
  border-bottom-style: outset;
  border-width: 0.3px;
  border-color: #fffefe4a;
}
.logo {
  height: 30px;
  padding-left: 25px;
  padding-top: 20px;
}
img {
  float: left;
}
.logo-name {
  float: left;
  text-align: center;
  font-size: 20px;
  margin-top: 2px;
  margin-left: 10px;
  font-weight: 500;
}
.menu-wrap {
  margin-top: 60px;
}
</style>
