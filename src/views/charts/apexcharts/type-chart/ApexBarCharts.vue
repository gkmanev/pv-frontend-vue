<template>
  <b-card class="mb-7">
    <h4 class="card-title">Bar Chart</h4>

    <div class="mt-4">
      <div>
        <vue-apex-charts
          type="bar"
          height="350"
          :options="apexChartData.barChart.chartOptions"
          :series="apexChartData.barChart.series"
        ></vue-apex-charts>
      </div>
    </div>
  </b-card>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import apexChartData from "../ApexChartsData.js";

export default {
  name: "ApexBarCharts",
  data: () => ({
    barchart: false,
    apexChartData: apexChartData,
  }),
  components: {
    VueApexCharts,
  },
};
</script>


