<template>
  <div class="productsales-margin">
    <b-tabs pills align="end">
      <!-- -------------
      Day
      --------------- -->
      <b-tab title="Day" active>
        <div class="pt-5">
          <div>
            <vue-apex-charts
              type="line"
              height="400"
              :options="ProductSalesData.dayChart.chartOptions"
              :series="ProductSalesData.dayChart.series"
            ></vue-apex-charts>
          </div>
        </div>
      </b-tab>
      <!-- -------------
      Week
      --------------- -->
      <b-tab title="Week">
        <b-row class="justify-content-center pt-5">
          <b-col lg="5" cols="12" md="5">
            <div>
              <vue-apex-charts
                type="donut"
                height="400"
                width="400"
                :options="ProductSalesData.weekChart.chartOptions"
                :series="ProductSalesData.weekChart.series"
              ></vue-apex-charts>
            </div>
          </b-col>
        </b-row>
      </b-tab>
      <!-- -------------
      Month
      --------------- -->
      <b-tab title="Month">
        <div class="pt-5">
          <div>
            <vue-apex-charts
              type="donut"
              height="400"
              :options="ProductSalesData.monthChart.chartOptions"
              :series="ProductSalesData.monthChart.series"
            ></vue-apex-charts>
          </div>
        </div>
      </b-tab>
    </b-tabs>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
import ProductSalesData from "./ProductSalesData";

export default {
  name: "ProductSales",
  data: () => ({
    title: "ProductSales",
    ProductSalesData: ProductSalesData,
  }),
  components: {
    VueApexCharts,
  },
};
</script>