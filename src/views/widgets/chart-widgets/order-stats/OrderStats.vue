<template>
  <div>
    <div class="mt-4 mb-5 text-center">
      <vue-apex-charts
        type="donut"
        height="275"
        :options="OrderStatsData.donutChart.chartOptions"
        :series="OrderStatsData.donutChart.series"
      ></vue-apex-charts>
    </div>
    <div class="card-body border-top">
      <b-row>
        <b-col lg="4" cols="4" sm="4">
          <i class="mdi mdi-checkbox-blank-circle text-primary"></i>
          <h3 class="mb-0 font-medium">5489</h3>
          <span>Success</span>
        </b-col>
        <b-col lg="4" cols="4" sm="4">
          <i class="mdi mdi-checkbox-blank-circle text-info"></i>
          <h3 class="mb-0 font-medium">954</h3>
          <span>Pending</span>
        </b-col>
        <b-col lg="4" cols="4" sm="4">
          <i class="mdi mdi-checkbox-blank-circle text-orange"></i>
          <h3 class="mb-0 font-medium">736</h3>
          <span>Failed</span>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
import OrderStatsData from "./OrderStatsData";

export default {
  name: "OrderStats",
  data: () => ({
    title: "OrderStats",
    OrderStatsData: OrderStatsData,
  }),
  components: {
    VueApexCharts,
  },
};
</script>