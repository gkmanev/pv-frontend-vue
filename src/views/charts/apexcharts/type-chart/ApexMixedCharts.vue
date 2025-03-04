<template>
  <b-card class="mb-7">
    <h4 class="card-title">Mixed Chart</h4>

    <div class="mt-4">
      <vue-apex-charts
        type="line"
        height="350"
        :options="apexChartData.mixedChart.chartOptions"
        :series="apexChartData.mixedChart.series"
      ></vue-apex-charts>
    </div>
  </b-card>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import apexChartData from "../ApexChartsData.js";

export default {
  name: "ApexMixedCharts",
  data: () => ({
    mixedchart: false,
    apexChartData: apexChartData,
  }),
  components: {
    VueApexCharts,
  },
};
</script>


