<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li class="current">登陆</li>
        <li>注册</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  components: {},
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
#login {
  height: 100vh;
  background-color: #344a5f;
}
.login-wrap {
  width: 330px;
  margin: auto;
}
.menu-tab {
  text-align: center;
  li {
    display: inline-block;
    width: 88px;
    line-height: 36px;
    font-size: 20px;
    color: white;
    border-radius: 2px;
    cursor: pointer;
  }
  .current {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>
