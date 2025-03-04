<template>
  <div class="mt-5">
    <b-row>
      <b-col cols="12" md="6">
        <vue-apex-charts
          type="donut"
          height="260px"
          :options="SalesChart.SourceChart.chartOptions"
          :series="SalesChart.SourceChart.series"
        ></vue-apex-charts>
      </b-col>
      <b-col cols="12" md="6" class="d-flex align-items-center">
        <div>
          <h1 class="mb-0">65<small>%</small></h1>
          <h6 class="text-muted">160 Sales January</h6>
          <ul class="list-inline mt-4 list-style-none">
            <li class="my-1 py-1">
              <i class="fa fa-circle text-purple pl-2"></i> Organic Sales
            </li>
            <li class="my-1 py-1">
              <i class="fa fa-circle text-success pl-2"></i> Search Engine
            </li>
            <li class="my-1 py-1">
              <i class="fa fa-circle text-info pl-2"></i> Marketing
            </li>
          </ul>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
import SalesChart from "./SalesMonthData";
export default {
  name: "SalesMonth",
  data: () => ({
    title: "SalesMonth",
    SalesChart: SalesChart,
  }),
  components: {
    VueApexCharts,
  },
};
</script>