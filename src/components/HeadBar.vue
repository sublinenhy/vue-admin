<template>
  <div id="headbar"></div>
</template>

<script>
export default {
  name: "HeadBar",
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
#headbar {
  float: top;
  height: 70px;
  width: 100%;
  background-color: #ffffff;
  border-bottom-style: outset;
  border-width: 0.3px;
  border-color: #fffefe4a;
}
</style>
