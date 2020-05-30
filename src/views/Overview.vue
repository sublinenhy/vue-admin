<template>
  <div id="overview">
    <div class="overview-info">Overview</div>
    <div class="single-data-block-wrap">
      <SingleDataBlock
        v-for="item in singleDataItems"
        :key="item.name"
        :name="item.name"
        :amount="item.amount"
        :rate="item.rate"
        :info="item.info"
      ></SingleDataBlock>
    </div>
    <div class="chart-wrap">
      <Chart></Chart>
    </div>
  </div>
</template>

<script>
import SingleDataBlock from "@/components/SingleDataBlock.vue";
import Chart from "@/components/Chart.vue";

export default {
  name: "Overview",
  components: {
    SingleDataBlock,
    Chart
  },
  data() {
    return {
      singleDataItems: [
        {
          name: "Sales",
          amount: 27903,
          rate: 1.5,
          info: "Compared with last year"
        },
        {
          name: "Purchase",
          amount: 3901,
          rate: 3.2,
          info: "Compared with last year"
        },
        {
          name: "Return",
          amount: 180,
          rate: 0.4,
          info: "Compared with last year"
        },
        {
          name: "Deal",
          amount: 23,
          rate: 0.1,
          info: "Compared with last year"
        }
      ]
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
.overview-info {
  font-size: 25px;
  font-weight: 500;
}
.single-data-block-wrap {
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
}
.chart-wrap {
  margin-top: 30px;
}
</style>
