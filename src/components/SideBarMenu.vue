<template>
  <div id="sidebar-menu" v-on:click="navTo">
    <div class="menu-wrap">
      <img :src="menuIconUrl" alt="" />
      <p>{{ menuName }}</p>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "SideBarMenu",
  components: {},
  data() {
    return {
      mUrl: this.menuNavUrl
    };
  },
  created() {},
  mounted() {},
  methods: {
    navTo: function() {
      router.push({ path: this.mUrl }).catch(err => {
        console.log("输出报错", err);
      });
      // router.push({ path: "/main/overview" });
    }
  },
  props: {
    menuName: String,
    menuIconUrl: String,
    menuNavUrl: String
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
