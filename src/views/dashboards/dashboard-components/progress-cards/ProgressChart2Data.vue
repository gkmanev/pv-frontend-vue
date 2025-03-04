<script>
export default {
  ProgressBChart: {
    series: [6, 15],
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
      colors: ["#fc4b6c", "rgb(250, 250, 250)"],
      tooltip: {
        enabled: false,
        theme: "dark",
      },
    },
  },
};
</script>
