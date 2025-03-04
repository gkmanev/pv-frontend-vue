<template>
  <div>
    <div class="border-bottom">
      <b-row>
        <b-col cols="12" md="4" lg="6">
          <div class="card-body">
            <h3>Android vs iOS</h3>
            <h6 class="text-muted mb-0">check the difference of OS</h6>
          </div>
        </b-col>
        <b-col cols="12" lg="3" md="4" class="border-right">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div>
                <h3 class="mb-0">31568</h3>
                <h5 class="text-muted mb-0">Growth</h5>
              </div>
              <div class="ml-auto">
                <b-button variant="success" class="b-avatar rounded-circle">
                  <i class="mdi mdi-angular"></i>
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
        <b-col cols="12" lg="3" md="4">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div>
                <h3 class="mb-0">15478</h3>
                <h5 class="text-muted mb-0">Loss</h5>
              </div>
              <div class="ml-auto">
                <b-button variant="dark" class="b-avatar rounded-circle">
                  <i class="mdi mdi-apple"></i>
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
    <vue-apex-charts
      type="area"
      height="350px"
      :options="AndroidIosChart.aiChart.chartOptions"
      :series="AndroidIosChart.aiChart.series"
    ></vue-apex-charts>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
import AndroidIosChart from "./AndroidIosData";
export default {
  name: "AndroidIos",
  data: () => ({
    title: "AndroidIos",
    AndroidIosChart: AndroidIosChart,
  }),
  components: {
    VueApexCharts,
  },
};
</script>