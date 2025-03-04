<template>
  <div>
    <b-row>
      <b-col cols="12" md="6">
        <b-card class="mb-4">
          <b-row class="py-2">
            <b-col cols="6">
              <h1 class="font-weight-light">86</h1>
              <h6 class="text-muted">New Clients</h6>
            </b-col>
            <b-col cols="6">
              <div class="position-relative float-right" style="height: 80px">
                <i
                  class="mdi mdi-account-circle text-muted display-7 chart-inner-icon"
                ></i>
                <vue-apex-charts
                  type="donut"
                  height="90"
                  width="90"
                  :options="Progress1Chart.ProgressAChart.chartOptions"
                  :series="Progress1Chart.ProgressAChart.series"
                ></vue-apex-charts>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col cols="12" md="6">
        <b-card class="mb-4">
          <b-row class="py-2">
            <b-col cols="6">
              <h1 class="font-weight-light">248</h1>
              <h6 class="text-muted">All Projects</h6>
            </b-col>
            <b-col cols="6">
              <div class="position-relative float-right" style="height: 80px">
                <i
                  class="mdi mdi-briefcase-check text-muted display-7 chart-inner-icon"
                ></i>
                <vue-apex-charts
                  type="donut"
                  height="90"
                  width="90"
                  :options="Progress2Chart.ProgressBChart.chartOptions"
                  :series="Progress2Chart.ProgressBChart.series"
                ></vue-apex-charts>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col cols="12" md="6">
        <b-card class="mb-4">
          <b-row class="py-2">
            <b-col cols="6">
              <h1 class="font-weight-light">352</h1>
              <h6 class="text-muted">New Items</h6>
            </b-col>
            <b-col cols="6">
              <div class="position-relative float-right" style="height: 80px">
                <i
                  class="mdi mdi-star-circle text-muted display-7 chart-inner-icon"
                ></i>
                <vue-apex-charts
                  type="donut"
                  height="90"
                  width="90"
                  :options="Progress3Chart.ProgressCChart.chartOptions"
                  :series="Progress3Chart.ProgressCChart.series"
                ></vue-apex-charts>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col cols="12" md="6">
        <b-card class="mb-4">
          <b-row class="py-2">
            <b-col cols="6">
              <h1 class="font-weight-light">159</h1>
              <h6 class="text-muted">Invoices</h6>
            </b-col>
            <b-col cols="6">
              <div class="position-relative float-right" style="height: 80px">
                <i
                  class="mdi mdi-receipt text-muted display-7 chart-inner-icon"
                ></i>
                <vue-apex-charts
                  type="donut"
                  height="90"
                  width="90"
                  :options="Progress4Chart.ProgressDChart.chartOptions"
                  :series="Progress4Chart.ProgressDChart.series"
                ></vue-apex-charts>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
import Progress1Chart from "./ProgressChart1Data";
import Progress2Chart from "./ProgressChart2Data";
import Progress3Chart from "./ProgressChart3Data";
import Progress4Chart from "./ProgressChart4Data";

export default {
  name: "ProgressCards",
  data: () => ({
    title: "ProgressCards",
    Progress1Chart: Progress1Chart,
    Progress2Chart: Progress2Chart,
    Progress3Chart: Progress3Chart,
    Progress4Chart: Progress4Chart,
  }),
  components: {
    VueApexCharts,
  },
};
</script>