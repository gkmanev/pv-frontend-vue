<template>
  <div>
    <h4 class="card-title">Sales Difference</h4>
    <b-row class="mt-4 pt-3">
      <b-col lg="6" xl="8" cols="6" sm="6" class="d-flex align-items-center">
        <div>
          <h1 class="display-6 font-weight-light text-dark">$3528</h1>
          <h6 class="text-muted">(150-165 Sales)</h6>
        </div>
      </b-col>
      <b-col lg="6" xl="4" cols="6" sm="6" class="d-flex align-items-center">
        <div class="float-right">
          <vue-apex-charts
            type="donut"
            height="112"
            :options="PageViewChart.viewChart.chartOptions"
            :series="PageViewChart.viewChart.series"
          ></vue-apex-charts>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import PageViewChart from "./SalesDifferenceData";

export default {
  name: "SalesDifference",
  data: () => ({
    title: "SalesDifference",
    PageViewChart: PageViewChart,
  }),
  components: {
    VueApexCharts,
  },
};
</script>