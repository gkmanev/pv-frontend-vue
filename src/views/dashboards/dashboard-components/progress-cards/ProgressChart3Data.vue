<script>
export default {
  ProgressCChart: {
    series: [8, 4],
    chartOptions: {
      labels: ["Search Traffic", "Free"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        padding: {
          left: 0,
          right: 0,
        },
      },
      chart: {},
      plotOptions: {
        pie: {
          donut: {
            size: "85px",
          },
        },
      },
      stroke: {
        width: 0,
      },
      legend: {
        show: false,
      },
      colors: ["#ffbc34", "rgb(250, 250, 250)"],
      tooltip: {
        enabled: false,
        theme: "dark",
      },
    },
  },
};
</script>
