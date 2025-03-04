<template>
  <div>
    <b-row v-show="elementVisible">
      <b-col cols="12" sm="12" lg="6">
        <ApexLineCharts></ApexLineCharts>
      </b-col>
      <b-col cols="12" sm="12" lg="6">
        <ApexColumnCharts></ApexColumnCharts>
      </b-col>
      <b-col cols="12" sm="12" lg="6">
        <ApexLineAreaCharts></ApexLineAreaCharts>
      </b-col>
      <b-col cols="12" sm="12" lg="6">
        <ApexBarCharts></ApexBarCharts>
      </b-col>
      <b-col cols="12" sm="12">
        <ApexCandlestickCharts></ApexCandlestickCharts>
      </b-col>
      <b-col cols="12" sm="12">
        <ApexMixedCharts></ApexMixedCharts>
      </b-col>
      <b-col cols="12" sm="12" lg="6">
        <Apex3DBubbleCharts></Apex3DBubbleCharts>
      </b-col>
      <b-col cols="12" sm="12" lg="6">
        <ApexScatterCharts></ApexScatterCharts>
      </b-col>

      <b-col cols="12" sm="12">
        <ApexHeatMapCharts></ApexHeatMapCharts>
      </b-col>

      <b-col cols="12" sm="12" lg="6">
        <ApexDonutCharts></ApexDonutCharts>
      </b-col>

      <b-col cols="12" sm="12" lg="6">
        <ApexPieCharts></ApexPieCharts>
      </b-col>

      <b-col cols="12" sm="12" lg="6">
        <ApexRadialBarCharts></ApexRadialBarCharts>
      </b-col>

      <b-col cols="12" sm="12" lg="6">
        <ApexRadarCharts></ApexRadarCharts>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "ApexCharts",

  data: () => ({
    page: {
      title: "ApexCharts",
    },
    elementVisible: false,
  }),
  created() {
    setTimeout(() => (this.elementVisible = true), 1000);
  },
  methods: {},
  components: {
    ApexLineCharts: () => import("./type-chart/ApexLineCharts"),
    ApexColumnCharts: () => import("./type-chart/ApexColumnCharts"),
    ApexLineAreaCharts: () => import("./type-chart/ApexLineAreaCharts"),
    ApexBarCharts: () => import("./type-chart/ApexBarCharts"),
    ApexCandlestickCharts: () => import("./type-chart/ApexCandlestickCharts"),
    ApexMixedCharts: () => import("./type-chart/ApexMixedCharts"),
    Apex3DBubbleCharts: () => import("./type-chart/Apex3DBubbleCharts"),
    ApexHeatMapCharts: () => import("./type-chart/ApexHeatMapCharts"),
    ApexDonutCharts: () => import("./type-chart/ApexDonutCharts"),
    ApexPieCharts: () => import("./type-chart/ApexPieCharts"),
    ApexRadialBarCharts: () => import("./type-chart/ApexRadialBarCharts"),
    ApexRadarCharts: () => import("./type-chart/ApexRadarCharts"),
    ApexScatterCharts: () => import("./type-chart/ApexScatterCharts"),
  },
};
</script>

<style>
</style>
