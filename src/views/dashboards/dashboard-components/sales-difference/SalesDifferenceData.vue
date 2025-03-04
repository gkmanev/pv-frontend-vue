<script>
export default {
  viewChart: {
    series: [25, 10],
    labels: ["", ""],
    chartOptions: {
      chart: {
        type: "donut",
        height: 150,
        fontFamily: "Rubik,sans-serif",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0,
      },

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
      colors: ["#39c449", "#ebf3f5"],
      tooltip: {
        show: true,
        fillSeriesColor: false,
      },
      legend: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 1025,
          options: {
            chart: {
              height: 150,
              width: 135,
            },
          },
        },
      ],
    },
  },
};
</script>