<script>
export default {
  donutChart: {
    series: [45, 15, 27, 18],
    chartOptions: {
      chart: {
        fontFamily: '"Nunito Sans",sans-serif',
        foreColor: "#a1aab2",
      },
      labels: ["Others", "Failed", "Pending", "Success"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        padding: {
          left: 0,
          right: 0,
        },
        borderColor: "rgba(0,0,0,0.1)",
      },
      plotOptions: {
        pie: {
          donut: {
            size: "75px",
            labels: {
              show: true,
              name: {
                show: true,
                offsetY: 10,
              },
              value: {
                show: false,
              },
              total: {
                show: true,
                fontSize: "13px",
                color: "#a1aab2",
                label: "Order",
              },
            },
          },
        },
      },
      stroke: {
        width: 0,
      },
      legend: {
        show: false,
      },
      colors: ["#eff3f7", "#fb8c00", "#3699ff", "#2962ff"],
      tooltip: {
        fillSeriesColor: false,
      },
    },
  },
};
</script>