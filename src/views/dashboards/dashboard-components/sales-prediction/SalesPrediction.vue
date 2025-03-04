<template>
  <div>
    <h4 class="card-title">Sales Prediction</h4>
    <b-row class="mt-3 pt-1">
      <b-col lg="6" cols="5" sm="6" class="d-flex align-items-center">
        <div>
          <span class="display-6 text-primary text-truncate d-block"
            >$3528</span
          >
          <h6 class="text-muted text-truncate">10% Increased</h6>
          <h5 class="text-truncate">(150-165 Sales)</h5>
        </div>
      </b-col>
      <b-col lg="6" cols="7" sm="6">
        <div>
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