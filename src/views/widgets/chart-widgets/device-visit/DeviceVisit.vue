<template>
  <div>
    <div class="mt-4 pt-2 text-center">
      <vue-apex-charts
        type="donut"
        height="250"
        :options="apexChartData.donutChart.chartOptions"
        :series="apexChartData.donutChart.series"
      ></vue-apex-charts>
    </div>
    <b-row class="mt-5 mb-3">
      <b-col lg="4" cols="4" sm="4" class="border-right text-left">
        <h4 class="mb-0">
          60%
          <small>
            <i class="ti-arrow-up text-success"></i>
          </small>
        </h4>
        Desktop
      </b-col>
      <b-col lg="4" cols="4" sm="4" class="border-right text-center">
        <h4 class="mb-0">
          28%
          <small>
            <i class="ti-arrow-down text-danger"></i>
          </small>
        </h4>
        Mobile
      </b-col>
      <b-col lg="4" cols="4" sm="4" class="text-right">
        <h4 class="mb-0">
          12%
          <small>
            <i class="ti-arrow-up text-success"></i>
          </small>
        </h4>
        Tablet
      </b-col>
    </b-row>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
import apexChartData from "../../../charts/apexcharts/ApexChartsData";

export default {
  name: "DeviceVisits",
  data: () => ({
    title: "DeviceVisits",
    apexChartData: apexChartData,
  }),
  components: {
    VueApexCharts,
  },
};
</script>