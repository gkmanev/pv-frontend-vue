<template>
  <b-card class="mb-4">
    <h4 class="card-title">Column Chart</h4>

    <div class="mt-4">
      <vue-apex-charts
        type="bar"
        height="350"
        :options="apexChartData.columnChart.chartOptions"
        :series="apexChartData.columnChart.series"
      ></vue-apex-charts>
    </div>
  </b-card>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import apexChartData from "../ApexChartsData.js";

export default {
  name: "ApexColumnCharts",
  data: () => ({
    columnchart: false,
    apexChartData: apexChartData,
  }),
  components: {
    VueApexCharts,
  },
};
</script>


