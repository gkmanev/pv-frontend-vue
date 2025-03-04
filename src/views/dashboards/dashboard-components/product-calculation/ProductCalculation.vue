<template>
  <div>
    <b-row>
      <b-col lg="4" cols="12" md="5" class="border-right">
        <div class="p-3">
          <h2 class="mb-2">Welcome Steave</h2>
          <h6 class="card-subtitle font-weight-light text-muted mt-2">
            you have 4 new messages
          </h6>
          <div class="mt-3">
            <div
              v-for="(item, i) in messages"
              :key="i"
              class="border-bottom px-3 py-2"
            >
              <div class="d-flex align-items-center">
                <b-avatar
                  :src="item.btnbg"
                  variant="none"
                  class="rounded-circle"
                  badge
                  :badge-variant="item.badgebg"
                  size="45"
                >
                </b-avatar>
                <div class="ml-3 w-75">
                  <h6 class="fw-medium mb-0">{{ item.title }}</h6>
                  <span
                    class="text-truncate font-14 d-block text-muted font-weight-light"
                    >{{ item.subtext }}</span
                  >
                  <small class="text-muted">{{ item.time }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col lg="8" cols="12" md="7">
        <div class="p-3">
          <!-- Header -->
          <div class="d-md-flex align-items-center">
            <div>
              <h4 class="card-title mb-0 fw-medium">Product Calculation</h4>
            </div>
            <div class="ml-auto d-flex no-block align-items-center m-2 mt-md-0">
              <ul class="list-group list-group-horizontal font-12 mr-3 mb-0">
                <li
                  class="list-group-item border-0 p-0 d-flex align-items-center mr-2"
                >
                  <h6 class="text-muted">
                    <i
                      class="mdi mdi-checkbox-blank-circle mr-1 text-success"
                    ></i>
                    2016
                  </h6>
                </li>
                <li
                  class="list-group-item border-0 p-0 d-flex align-items-center"
                >
                  <h6 class="text-muted">
                    <i class="mdi mdi-checkbox-blank-circle mr-1 text-info"></i>
                    2020
                  </h6>
                </li>
              </ul>
            </div>
          </div>

          <vue-apex-charts
            type="area"
            height="350px"
            :options="ProductCalcChart.viewChart.chartOptions"
            :series="ProductCalcChart.viewChart.series"
          ></vue-apex-charts>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
import ProductCalcChart from "./ProductCalculationData";

import img1 from "../../../../assets/images/users/1.jpg";
import img2 from "../../../../assets/images/users/2.jpg";
import img3 from "../../../../assets/images/users/3.jpg";
import img4 from "../../../../assets/images/users/4.jpg";

export default {
  name: "ProductCalculation",
  data: () => ({
    title: "Product Calculation",
    messages: [
      {
        btnbg: img1,
        badgebg: "danger",
        title: "Pavan kumar",
        subtext: "Just see the my new admin!",
        time: "9:30AM",
      },
      {
        btnbg: img2,
        badgebg: "success",
        title: "Sonu Nigam",
        subtext: "Just a reminder that you have event",
        time: "1:30PM",
      },
      {
        btnbg: img3,
        badgebg: "primary",
        title: "Arijit Sinh",
        subtext: "You can customize this template as you want",
        time: "9:30AM",
      },
      {
        btnbg: img4,
        badgebg: "warning",
        title: "Pavan kumar",
        subtext: "Sent you an notification",
        time: "1:30PM",
      },
    ],
    ProductCalcChart: ProductCalcChart,
  }),
  components: {
    VueApexCharts,
  },
};
</script>