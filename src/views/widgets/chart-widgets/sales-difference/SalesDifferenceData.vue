<script>
export default {
  viewChart: {
    series: [35, 15, 10],
    labels: ["", "", ""],
    chartOptions: {
      plotOptions: {
        pie: {
          expandOnClick: true,
          donut: {
            size: "65%",
            labels: {
              show: false,
              name: {
                show: true,
                offsetY: 7,
              },
              value: {
                show: false,
              },
              total: {
                show: false,
                color: "#a1aab2",
                fontSize: "13px",
                label: "Visits",
              },
            },
          },
        },
      },

      chart: {
        type: "donut",
        height: 200,
        fontFamily: "Rubik,sans-serif",
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      colors: ["#39c449", "#ebf3f5", "#009efb"],
      tooltip: {
        show: true,
        fillSeriesColor: false,
        theme: "dark",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0,
      },
      legend: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 426,
          options: {
            chart: {
              height: 130,
              offsetY: 10,
              offsetX: -35,
              width: 200,
            },
          },
        },
      ],
    },
  },
};
</script>