<template>
  <b-card class="mb-4">
    <h4 class="card-title">3D Bubble Chart</h4>
    <div class="mt-4">
      <vue-apex-charts
        type="bubble"
        height="350"
        :options="apexChartData.bubbleChart.chartOptions"
        :series="apexChartData.bubbleChart.series"
      ></vue-apex-charts>
    </div>
  </b-card>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import apexChartData from "../ApexChartsData.js";

export default {
  name: "Apex3DBubbleCharts",
  data: () => ({
    title: "Apexcharts",
    linechart: false,
    apexChartData: apexChartData,
  }),
  components: {
    VueApexCharts,
  },
};
</script>


