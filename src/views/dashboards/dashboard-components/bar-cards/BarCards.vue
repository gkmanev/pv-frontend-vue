<template>
  <div>
    <b-row>
      <b-col cols="12" md="6" lg="3">
        <b-card class="mb-4">
          <b-row>
            <b-col cols="7">
              <span class="display-6 text-nowrap"
                >2376 <i class="ti-angle-down ml-2 font-14 text-danger"></i
              ></span>
              <h6>Total Visits</h6>
            </b-col>
            <b-col cols="5" class="align-self-center text-right">
              <div>
                <vue-apex-charts
                  type="bar"
                  height="50"
                  :options="Bar1Chart.BarAChart.chartOptions"
                  :series="Bar1Chart.BarAChart.series"
                ></vue-apex-charts>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col cols="12" md="6" lg="3">
        <b-card class="mb-4">
          <b-row>
            <b-col cols="7">
              <span class="display-6 text-nowrap"
                >3670 <i class="ti-angle-up ml-2 font-14 text-success"></i
              ></span>
              <h6>Page Views</h6>
            </b-col>
            <b-col cols="5" class="align-self-center text-right">
              <div style="height: 50px">
                <vue-apex-charts
                  type="bar"
                  height="50"
                  width="70"
                  :options="Bar2Chart.BarBChart.chartOptions"
                  :series="Bar2Chart.BarBChart.series"
                ></vue-apex-charts>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col cols="12" md="6" lg="3">
        <b-card class="mb-4">
          <b-row>
            <b-col cols="7">
              <span class="display-6 text-nowrap"
                >1562 <i class="ti-angle-up ml-2 font-14 text-success"></i
              ></span>
              <h6>Unique Visits</h6>
            </b-col>
            <b-col cols="5" class="align-self-center text-right">
              <div style="height: 50px">
                <vue-apex-charts
                  type="bar"
                  height="50"
                  width="70"
                  :options="Bar3Chart.BarCChart.chartOptions"
                  :series="Bar3Chart.BarCChart.series"
                ></vue-apex-charts>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col cols="12" md="6" lg="3">
        <b-card class="mb-4">
          <b-row>
            <b-col cols="7">
              <span class="display-6 text-nowrap"
                >35% <i class="ti-angle-down ml-2 font-14 text-danger"></i
              ></span>
              <h6>Bounce Rate</h6>
            </b-col>
            <b-col cols="5" class="align-self-center text-right">
              <div style="height: 50px">
                <vue-apex-charts
                  type="bar"
                  height="50"
                  width="70"
                  :options="Bar4Chart.BarDChart.chartOptions"
                  :series="Bar4Chart.BarDChart.series"
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
import Bar1Chart from "./BarCards1Data";
import Bar2Chart from "./BarCards2Data";
import Bar3Chart from "./BarCards3Data";
import Bar4Chart from "./BarCards4Data";

export default {
  name: "BarCards",
  data: () => ({
    title: "BarCards",
    Bar1Chart: Bar1Chart,
    Bar2Chart: Bar2Chart,
    Bar3Chart: Bar3Chart,
    Bar4Chart: Bar4Chart,
  }),
  components: {
    VueApexCharts,
  },
};
</script>