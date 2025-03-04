<template>
  <div v-show="elementVisible">
    <div class="d-flex">
      <h2>
        356
        <small>
          <i class="ti-arrow-up text-success"></i>
        </small>
      </h2>
      <span class="ml-auto">Users per minute</span>
    </div>
    <div
      class="mt-3 text-center"
      style="width: 130px; margin: 0px auto; position: relative"
    >
      <vue-apex-charts
        type="bar"
        :options="ActiveUsersChart.usersChart.chartOptions"
        :series="ActiveUsersChart.usersChart.series"
      ></vue-apex-charts>
    </div>
    <h5 class="mb-2 mt-3">Top Active Pages</h5>
    <ul class="list-group list-group-flush">
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        /templates/matrix-admin/
        <b-badge pill class="bg-light text-dark px-2">1</b-badge>
      </li>
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        /panel/home.asp
        <b-badge pill class="bg-primary px-2">4</b-badge>
      </li>
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        /demos/admin-t...e/index2.html
      </li>
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        /templates/adminwrap-lite/
        <b-badge pill class="bg-light text-dark px-2">14</b-badge>
      </li>
    </ul>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
import ActiveUsersChart from "./ActiveUsersData";

export default {
  name: "ActiveUsers",
  data: () => ({
    title: "ActiveUsers",
    ActiveUsersChart: ActiveUsersChart,
    elementVisible: true,
  }),
  created() {
    //setTimeout(() => (this.ActiveUsersChart ), 1000);
  },
  components: {
    VueApexCharts,
  },
};
</script>