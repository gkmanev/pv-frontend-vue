<template>
  <div>
    <h4 class="card-title">Sales Difference</h4>
    <b-row class="mt-3">
      <b-col lg="6" cols="5" sm="6" class="d-flex align-items-center">
        <div>
          <span class="display-6 text-success text-truncate d-block"
            >$4316</span
          >
          <h6 class="text-muted text-truncate">10% Increased</h6>
          <h5 class="text-truncate">(150-165 Sales)</h5>
        </div>
      </b-col>
      <b-col lg="6" cols="5" sm="6" class="d-flex align-items-center">
        <vue-apex-charts
          type="donut"
          height="150"
          :options="PageViewChart.viewChart.chartOptions"
          :series="PageViewChart.viewChart.series"
        ></vue-apex-charts>
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