<template>
  <div class="card-body">
    <!-- Header -->
    <div class="d-md-flex align-items-center">
      <div>
        <h4 class="card-title">Total Revenue</h4>
      </div>
      <div class="ml-auto d-flex no-block align-items-center m-2 mt-md-0">
        <ul class="list-group list-group-horizontal font-12 mb-0">
          <li
            class="list-group-item border-0 p-0 d-flex align-items-center mr-2"
          >
            <h6 class="text-muted">
              <i
                class="mdi mdi-checkbox-blank-circle mr-1"
                style="color: #51bdff"
              ></i>
              2015
            </h6>
          </li>
          <li
            class="list-group-item border-0 p-0 d-flex align-items-center mr-2"
          >
            <h6 class="text-muted">
              <i
                class="mdi mdi-checkbox-blank-circle mr-1"
                style="color: #11a0f8"
              ></i>
              2016
            </h6>
          </li>
          <li class="list-group-item border-0 p-0 d-flex align-items-center">
            <h6 class="text-muted">
              <i class="mdi mdi-checkbox-blank-circle mr-1 text-info"></i>
              2020
            </h6>
          </li>
        </ul>
      </div>
    </div>
    <vue-apex-charts
      type="bar"
      height="360px"
      :options="TotalChart.RevenueChart.chartOptions"
      :series="TotalChart.RevenueChart.series"
    ></vue-apex-charts>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
import TotalChart from "./TotalRevenueBarData";
export default {
  name: "TotalRevenueBar",
  data: () => ({
    title: "TotalRevenueBar",
    TotalChart: TotalChart,
  }),
  components: {
    VueApexCharts,
  },
};
</script>