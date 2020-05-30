<template>
  <div class="chart-wrap">
    <a class="chart-name">Sales Figures</a>
    <div id="chart"></div>
  </div>
</template>

<script>
import echart from "echarts";

export default {
  name: "SingleDataBlock",
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.initChart();
  },
  methods: {
    initChart: function() {
      var myChart = echart.init(document.getElementById("chart"));
      myChart.setOption({
        tooltip: {},
        legend: {
          show: true,
          right: 25,
          top: 0
        },
        grid: {
          show: false
        },
        xAxis: {
          splitLine: {
            show: true
          },
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {
          splitLine: {
            show: false
          }
        },
        series: [
          {
            name: "销量",
            type: "line",
            color: "#0062ff",
            data: this.chartData1,
            smooth: 0.8
          },
          {
            name: "图例2",
            type: "line",
            color: "#3dd598",
            data: this.chartData2,
            smooth: 0.7
          }
        ]
      });
    }
  },
  props: {
    chartData1: {
      type: Array,
      default: () => [5, 20, 36, 10, 10, 20]
    },
    chartData2: {
      type: Array,
      default: () => [6, 11, 26, 20, 9, 10]
    }
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
.chart-wrap {
  background-color: #fff;
  width: 790px;
  border-radius: 20px;
  padding-top: 25px;
}
.chart-name {
  font-size: 17px;
  font-weight: 700;
  margin-left: 25px;
}
#chart {
  width: 790px;
  height: 400px;
}
</style>
