<template>
  <div>
    <b-row>
      <b-col lg="8" cols="12" md="8">
        <h4 class="card-title">Order Status</h4>
        <h5 class="card-subtitle mb-0 font-weight-normal text-muted">
          Total Earnings of the Month
        </h5>
        <b-row class="my-4">
          <b-col lg="4" cols="4" md="4" class="border-right">
            <i class="mdi mdi-checkbox-blank-circle text-primary"></i>
            <h3 class="mb-0">5489</h3>
            <span>Success</span>
          </b-col>
          <b-col lg="4" cols="4" md="4" class="border-right">
            <i class="mdi mdi-checkbox-blank-circle text-orange"></i>
            <h3 class="mb-0">954</h3>
            <span>Pending</span>
          </b-col>
          <b-col lg="4" cols="4" md="4">
            <i class="mdi mdi-checkbox-blank-circle text-info"></i>
            <h3 class="mb-0">736</h3>
            <span>Failed</span>
          </b-col>
        </b-row>
      </b-col>
      <b-col lg="4" cols="12" md="4">
        <div class="mt-4 text-center">
          <vue-apex-charts
            type="donut"
            height="150"
            :options="apexChartData.donutChart.chartOptions"
            :series="apexChartData.donutChart.series"
          ></vue-apex-charts>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
import apexChartData from "../../../charts/apexcharts/ApexChartsData";

export default {
  name: "TotalEarnings",
  data: () => ({
    title: "TotalEarnings",
    apexChartData: apexChartData,
  }),
  components: {
    VueApexCharts,
  },
};
</script>