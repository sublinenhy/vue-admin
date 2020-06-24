<template>
  <div id="editor">
    <div class="text-area" contenteditable="true">
      <h1>aaa</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  components: {},
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
#editor {
  float: left;
  height: 100%;
  width: 100%;
  background-color: #fafafb;
  padding: 20px;
  box-sizing: border-box;
}
.text-area {
  resize: none;
  width: 100%;
  height: 100%;
  border: none;
  border-width: 1px;
  outline: none;
}
</style>
