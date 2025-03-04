<template>
  <div>
    <div class="d-md-flex align-items-center">
      <div>
        <h3 class="card-title mb-1">Download Count</h3>
        <h6 class="text-muted font-weight-light">you can check the count</h6>
      </div>
      <div class="ml-auto">
        <ul class="list-inline">
          <li class="list-inline-item">
            <h6 class="text-muted">
              <i class="fa fa-circle mr-1 text-success"></i>Free
            </h6>
          </li>
          <li class="list-inline-item">
            <h6 class="text-muted">
              <i class="fa fa-circle mr-1 text-primary"></i>Premium
            </h6>
          </li>
        </ul>
      </div>
    </div>
    <vue-apex-charts
      type="bar"
      height="300px"
      :options="DownloadChart.CountChart.chartOptions"
      :series="DownloadChart.CountChart.series"
    ></vue-apex-charts>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
import DownloadChart from "./DownloadCount2Data";
export default {
  name: "DownloadCount2",
  data: () => ({
    title: "DownloadCount2",
    DownloadChart: DownloadChart,
  }),
  components: {
    VueApexCharts,
  },
};
</script>