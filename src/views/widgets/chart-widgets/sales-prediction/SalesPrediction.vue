<template>
  <div>
    <h4 class="card-title">Sales Prediction</h4>
    <b-row class="mt-4 pt-3">
      <b-col lg="6" cols="6" sm="6" class="d-flex align-items-center">
        <div>
          <h1 class="display-6 font-weight-light text-dark">$3528</h1>
          <h6 class="text-muted">(150-165 Sales)</h6>
        </div>
      </b-col>
      <b-col lg="6" cols="6" sm="6">
        <div style="width: 150px" class="float-right">
          <vue-apex-charts
            type="radialBar"
            height="170"
            :options="SalesPredictionChart.predictionChart.chartOptions"
            :series="SalesPredictionChart.predictionChart.series"
          ></vue-apex-charts>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import SalesPredictionChart from "./SalesPredictionData";

export default {
  name: "SalesPrediction",
  data: () => ({
    title: "SalesPrediction",
    SalesPredictionChart: SalesPredictionChart,
  }),
  components: {
    VueApexCharts,
  },
};
</script>