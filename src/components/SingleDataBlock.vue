<template>
  <div id="single-data-block">
    <div class="block-name">{{ name }}</div>
    <div class="statistics-wrap">
      <div class="amount">${{ amount }}</div>
      <div class="rate">+{{ rate }}%</div>
    </div>
    <div class="block-info">{{ info }}</div>
  </div>
</template>

<script>
export default {
  name: "SingleDataBlock",
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  props: {
    name: String,
    amount: Number,
    rate: Number,
    info: String
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
#single-data-block {
  float: left;
  width: 250px;
  height: 135px;
  border-radius: 20px;
  background-color: #fff;
  margin-right: 20px;
  margin-top: 20px;
}
.block-name {
  margin-top: 20px;
  margin-left: 25px;
  font-size: 17px;
  font-weight: 700;
}
.statistics-wrap {
  margin-top: 19px;
  margin-left: 25px;
  height: 40px;
}
.amount {
  float: left;
  font-size: 30px;
  font-weight: 700;
}
.rate {
  float: left;
  margin-left: 12px;
  margin-top: 10px;
  font-size: 15px;
  font-weight: 700;
  color: #0062ff;
}
.block-info {
  margin-top: 10px;
  margin-left: 25px;
  font-size: 10px;
  color: #696974;
}
</style>
