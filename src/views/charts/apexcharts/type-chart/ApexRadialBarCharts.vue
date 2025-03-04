<template>
  <b-card class="mb-4">
    <h4 class="card-title">Radial Bar Chart</h4>

    <div class="mt-4">
      <vue-apex-charts
        type="radialBar"
        height="350"
        :options="apexChartData.radialBarChart.chartOptions"
        :series="apexChartData.radialBarChart.series"
      ></vue-apex-charts>
    </div>
  </b-card>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import apexChartData from "../ApexChartsData.js";

export default {
  name: "ApexRadialBarCharts",
  data: () => ({
    radialchart: false,
    apexChartData: apexChartData,
  }),
  components: {
    VueApexCharts,
  },
};
</script>


