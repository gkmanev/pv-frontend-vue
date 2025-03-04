<template>
  <b-card class="mb-4">
    <h4 class="card-title">Radar Chart</h4>

    <div class="mt-4">
      <vue-apex-charts
        type="radar"
        height="300"
        :options="apexChartData.radarChart.chartOptions"
        :series="apexChartData.radarChart.series"
      ></vue-apex-charts>
    </div>
  </b-card>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import apexChartData from "../ApexChartsData.js";

export default {
  name: "ApexRadarCharts",
  data: () => ({
    radarchart: false,
    apexChartData: apexChartData,
  }),
  components: {
    VueApexCharts,
  },
};
</script>


