<template>
  <div>
    <vue-apex-charts
      type="bar"
      height="315px"
      :options="YearChart.IncomeChart.chartOptions"
      :series="YearChart.IncomeChart.series"
    ></vue-apex-charts>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
import YearChart from "./IncomeOfTheYearData";
export default {
  name: "IncomeOfTheYear",
  data: () => ({
    title: "IncomeOfTheYear",
    YearChart: YearChart,
  }),
  components: {
    VueApexCharts,
  },
};
</script>