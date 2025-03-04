<template>
  <b-card class="mb-4">
    <h4 class="card-title">Scatter Chart</h4>

    <div class="mt-4">
      <vue-apex-charts
        type="scatter"
        height="350"
        :options="apexChartData.scatterChart.chartOptions"
        :series="apexChartData.scatterChart.series"
      ></vue-apex-charts>
    </div>
  </b-card>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import apexChartData from "../ApexChartsData.js";

export default {
  name: "ApexScatterCharts",
  data: () => ({
    scatterchart: false,
    apexChartData: apexChartData,
  }),
  components: {
    VueApexCharts,
  },
};
</script>


