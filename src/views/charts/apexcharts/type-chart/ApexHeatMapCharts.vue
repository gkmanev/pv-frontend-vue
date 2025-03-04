<template>
  <b-card class="mb-4">
    <h4 class="card-title">Heat Map Chart</h4>

    <div class="mt-4">
      <vue-apex-charts
        type="heatmap"
        height="350"
        :options="apexChartData.heatMapChart.chartOptions"
        :series="apexChartData.heatMapChart.series"
      ></vue-apex-charts>
    </div>
  </b-card>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import apexChartData from "../ApexChartsData.js";

export default {
  name: "ApexHeatMapCharts",
  data: () => ({
    heatchart: false,
    apexChartData: apexChartData,
  }),
  components: {
    VueApexCharts,
  },
};
</script>


