<template>
  <div>
    <div class="d-flex align-items-center">
      <h1 class="text-white">
        <i class="icon-cloud-download"></i>
      </h1>
      <div class="ml-3">
        <h3 class="text-white">Download count</h3>
        <h6 class="text-white">March 2020</h6>
      </div>
    </div>
    <b-row>
      <b-col cols="12" lg="6" class="d-flex align-items-center">
        <h4 class="display-7 text-white text-truncate">35487</h4>
      </b-col>
      <b-col cols="12" lg="6">
        <vue-apex-charts
          type="bar"
          height="120px"
          :options="DownloadChart.CountChart.chartOptions"
          :series="DownloadChart.CountChart.series"
        ></vue-apex-charts>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
import DownloadChart from "./DownloadCountData";
export default {
  name: "DownloadCount",
  data: () => ({
    title: "DownloadCount",
    DownloadChart: DownloadChart,
  }),
  components: {
    VueApexCharts,
  },
};
</script>