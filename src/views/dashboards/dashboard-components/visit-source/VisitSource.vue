<template>
  <div class="mt-4">
    <vue-apex-charts
      type="donut"
      height="280px"
      :options="VisitChart.SourceChart.chartOptions"
      :series="VisitChart.SourceChart.series"
    ></vue-apex-charts>
    <div class="text-center mt-5">
      <ul class="list-inline">
        <li class="list-inline-item">
          <h6 class="text-muted">
            <i class="fa fa-circle mr-1 text-primary"></i>Desktop
          </h6>
        </li>
        <li class="list-inline-item">
          <h6 class="text-muted">
            <i class="fa fa-circle mr-1 text-danger"></i>Tablet
          </h6>
        </li>
        <li class="list-inline-item">
          <h6 class="text-muted">
            <i class="fa fa-circle mr-1 text-megna"></i>Mobile
          </h6>
        </li>
        <li class="list-inline-item">
          <h6 class="text-muted">
            <i class="fa fa-circle mr-1 text-muted"></i>Other
          </h6>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
import VisitChart from "./VisitSourceData";
export default {
  name: "VisitSource",
  data: () => ({
    title: "VisitSource",
    VisitChart: VisitChart,
  }),
  components: {
    VueApexCharts,
  },
};
</script>