<template>
  <div>
    <b-row class="mt-2">
      <b-col lg="5" cols="5" md="5" class="d-flex align-items-center">
        <div>
          <h3 class="fw-medium mb-0">56.33%</h3>
          <span class>Total Bounce</span>
        </div>
      </b-col>
      <b-col lg="7" cols="7" md="7">
        <div>
          <vue-apex-charts
            type="area"
            height="120px"
            :options="BounceRateChart.rateChart.chartOptions"
            :series="BounceRateChart.rateChart.series"
          ></vue-apex-charts>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import BounceRateChart from "./BounceRateData";

export default {
  name: "BounceRate",
  data: () => ({
    title: "BounceRate",
    BounceRateChart: BounceRateChart,
  }),
  components: {
    VueApexCharts,
  },
};
</script>