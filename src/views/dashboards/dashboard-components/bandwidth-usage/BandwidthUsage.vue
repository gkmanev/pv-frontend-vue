<template>
  <div>
    <div class="d-flex align-items-center">
      <h1 class="text-white">
        <i class="ti-pie-chart"></i>
      </h1>
      <div class="ml-3">
        <h3 class="text-white">Bandwidth usage</h3>
        <h6 class="text-white">March 2020</h6>
      </div>
    </div>
    <b-row>
      <b-col cols="12" lg="6" class="d-flex align-items-center">
        <h4 class="display-7 text-white text-truncate">50 GB</h4>
      </b-col>
      <b-col cols="12" lg="6">
        <vue-apex-charts
          type="line"
          height="120px"
          :options="BandChart.BandWidthChart.chartOptions"
          :series="BandChart.BandWidthChart.series"
        ></vue-apex-charts>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
import BandChart from "./BandwidthUsageData";
export default {
  name: "BandwidthUsage",
  data: () => ({
    title: "BandwidthUsage",
    BandChart: BandChart,
  }),
  components: {
    VueApexCharts,
  },
};
</script>