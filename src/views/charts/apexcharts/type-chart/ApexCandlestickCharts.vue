<template>
  <b-card class="mb-4">
    <h4 class="card-title">Candle Stick Chart</h4>

    <div class="mt-4">
      <vue-apex-charts
        type="candlestick"
        height="350"
        :options="apexChartData.candlestickChart.chartOptions"
        :series="apexChartData.candlestickChart.series"
      ></vue-apex-charts>
    </div>
  </b-card>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import apexChartData from "../ApexChartsData.js";

export default {
  name: "ApexCandlestickCharts",
  data: () => ({
    caldlechart: false,
    apexChartData: apexChartData,
  }),
  components: {
    VueApexCharts,
  },
};
</script>


