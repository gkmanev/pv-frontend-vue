<script>
export default {
  ProgressDChart: {
    series: [4, 10],
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
      colors: ["#1e88e5", "rgb(250, 250, 250)"],
      tooltip: {
        enabled: false,
        theme: "dark",
      },
    },
  },
};
</script>
