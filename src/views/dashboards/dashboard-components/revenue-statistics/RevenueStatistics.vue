<template>
  <div>
    <div class="card-body">
      <!-- Header -->
      <div class="d-md-flex align-items-center">
        <div>
          <h4 class="card-title">Smartmeters Accumulated Power</h4>
          <!-- <h5 class="card-subtitle text-muted font-weight-light">
            January 2021
          </h5> -->
        </div>
      </div>
      <!-- Chart and Data Section -->
      <div class="d-flex flex-column w-100">
        <vue-apex-charts
          type="area"
          height="250"
          :options="apexChartData.lineAreaChartSpline.chartOptions"
          :series="apexChartData.lineAreaChartSpline.series"
        ></vue-apex-charts>
      </div>
    </div>
    <!-- Footer -->
    <MonthlyProfitList :totalincomes="totalincomes"></MonthlyProfitList>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
import apexChartData from "../../../charts/apexcharts/ApexChartsData";
import MonthlyProfitList from "../monthly-profit-list/MonthlyProfitList";
export default {
  name: "RevenueStatistics",
  data: () => ({
    title: "Revenue Statistics",
    sales1: 0,
    apexChartData: apexChartData,
    // Data for TotalIncome
    totalincomes: [
      {
        gridlg: "col-lg-3",
        gridsm: "col-md-6",
        text: "Total Revenue",
        money: "$54578",
      },
      {
        gridlg: "col-lg-3",
        gridsm: "col-md-6",
        text: "Online Revenue",
        money: "$43451",
      },
      {
        gridlg: "col-lg-3",
        gridsm: "col-md-6",
        text: "Product A",
        money: "$44578",
      },
      {
        gridlg: "col-lg-3",
        gridsm: "col-md-6",
        text: "Product B",
        money: "$12578",
      },
    ],
  }),
  components: {
    VueApexCharts,
    MonthlyProfitList,
  },
};
</script>