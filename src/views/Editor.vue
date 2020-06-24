<template>
  <div id="editor">
    <div class="text-area" contenteditable="true">
      <h1>aaa</h1>
      <span
        v-for="item in content"
        v-html="item.content"
        :key="item.headingLevel"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  components: {},
  data() {
    return {
      content: [
        {
          headingLevel: "h1",
          content: "<h1>这是h1标题</h1>"
        },
        {
          headingLevel: "h2",
          content: "<h2>这是h2标题</h2>"
        }
      ]
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
