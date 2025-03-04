<template>
  <b-card class="mb-4">
    <h4 class="card-title">Dount Chart</h4>

    <div class="mt-4">
      <vue-apex-charts
        type="donut"
        height="350"
        :options="apexChartData.donutChart.chartOptions"
        :series="apexChartData.donutChart.series"
      ></vue-apex-charts>
    </div>
  </b-card>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import apexChartData from "../ApexChartsData.js";

export default {
  name: "ApexDonutCharts",
  data: () => ({
    doughnutchart: false,
    apexChartData: apexChartData,
  }),
  components: {
    VueApexCharts,
  },
};
</script>


