<template>
  <b-card class="mb-4">
    <h4 class="card-title">Pie Chart</h4>

    <div class="mt-4">
      <vue-apex-charts
        type="pie"
        height="350"
        :options="apexChartData.pieChart.chartOptions"
        :series="apexChartData.pieChart.series"
      ></vue-apex-charts>
    </div>
  </b-card>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import apexChartData from "../ApexChartsData.js";

export default {
  name: "ApexPieCharts",
  data: () => ({
    piechart: false,
    apexChartData: apexChartData,
  }),
  components: {
    VueApexCharts,
  },
};
</script>


