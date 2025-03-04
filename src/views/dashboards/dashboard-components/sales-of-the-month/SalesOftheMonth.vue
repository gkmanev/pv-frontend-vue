<template>
  <div>
    <!-- Header -->
    <div>
      <h4 class="card-title">Sales of the Month</h4>
    </div>
    <!-- Chart and details section -->
    <div class="d-flex flex-column w-100 mt-5">
      <vue-apex-charts
        type="donut"
        height="250"
        :options="apexChartData.donutChart.chartOptions"
        :series="apexChartData.donutChart.series"
      ></vue-apex-charts>
      <div class="round-overlap mt-2">
        <feather type="shopping-cart" class="feather-lg"></feather>
      </div>
    </div>
    <ul
      class="list-group mt-4 list-group-horizontal justify-content-center mr-3 mb-0"
    >
      <li class="list-group-item border-0 p-0 d-flex align-items-center mr-2">
        <h5 class="font-weight-light mb-0">
          <i class="mdi mdi-checkbox-blank-circle mr-1 text-primary"></i>
          Item A
        </h5>
      </li>
      <li class="list-group-item border-0 p-0 d-flex align-items-center mr-2">
        <h5 class="font-weight-light mb-0">
          <i class="mdi mdi-checkbox-blank-circle mr-1 text-success"></i>
          Item B
        </h5>
      </li>
      <li class="list-group-item border-0 p-0 d-flex align-items-center">
        <h5 class="font-weight-light mb-0">
          <i class="mdi mdi-checkbox-blank-circle mr-1 text-info"></i>
          Item C
        </h5>
      </li>
    </ul>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
import apexChartData from "../../../charts/apexcharts/ApexChartsData";

export default {
  name: "SalesOftheMonth",
  data: () => ({
    title: "SalesOftheMonth",
    email1: 0,
    apexChartData: apexChartData,
  }),
  components: {
    VueApexCharts,
  },
};
</script>