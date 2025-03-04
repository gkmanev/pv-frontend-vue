<template>
  <b-card class="mb-4">
    <h4 class="card-title">Line Chart</h4>

    <div class="mt-4">
      <vue-apex-charts
        type="line"
        height="350"
        :options="apexChartData.lineChartSimple.chartOptions"
        :series="apexChartData.lineChartSimple.series"
      ></vue-apex-charts>
    </div>
  </b-card>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import apexChartData from "../ApexChartsData.js";

export default {
  name: "ApexLineCharts",
  data: () => ({
    apexChartData: apexChartData,
  }),
  components: {
    VueApexCharts,
  },
};
</script>


