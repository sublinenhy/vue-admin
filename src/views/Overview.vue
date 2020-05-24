<template>
  <div id="overview">
    <div class="block-1"></div>
  </div>
</template>

<script>
export default {
  name: "Overview",
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
.block-1 {
  width: 250px;
  height: 250px;
  background-color: #fff;
  border-radius: 5px;
}
</style>
