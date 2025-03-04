<template>
  <div>
    <b-row class="mt-2">
      <b-col lg="5" cols="12" md="6" class="d-flex align-items-center">
        <div>
          <b-form-select :options="monthoptions1" v-model="month1">
          </b-form-select>
        </div>
      </b-col>
      <b-col lg="7" cols="12" md="6">
        <div>
          <vue-apex-charts
            type="area"
            height="90px"
            :options="MonthBounceRateChart.monthrateChart.chartOptions"
            :series="MonthBounceRateChart.monthrateChart.series"
          ></vue-apex-charts>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import MonthBounceRateChart from "./MonthBounceRateData";

export default {
  name: "MonthBounceRate",
  data: () => ({
    title: "MonthBounceRate",
    MonthBounceRateChart: MonthBounceRateChart,
    // Month Table
    month1: 0,
    monthoptions1: [
      { text: "April", value: 0 },
      { text: "May", value: 1 },
      { text: "June", value: 2 },
      { text: "July", value: 3 },
    ],
  }),
  components: {
    VueApexCharts,
  },
};
</script>