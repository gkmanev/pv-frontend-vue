<template>
  <b-card class="mb-4">
    <h4 class="card-title">Line Area Chart</h4>

    <div class="mt-4">
      <vue-apex-charts
        type="area"
        height="350"
        :options="apexChartData.lineAreaChartSpline.chartOptions"
        :series="apexChartData.lineAreaChartSpline.series"
      ></vue-apex-charts>
    </div>
  </b-card>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import apexChartData from "../ApexChartsData.js";

export default {
  name: "ApexLineAreaCharts",
  data: () => ({
    lineareachart: false,
    apexChartData: apexChartData,
  }),
  components: {
    VueApexCharts,
  },
};
</script>


