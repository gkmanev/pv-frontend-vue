<script>
export default {
  RevenueChart: {
    series: [
      {
        name: "2016 ",
        data: [4, 2, 3.5, 1.5, 4, 3],
      },
      {
        name: "2020 ",
        data: [2, 4, 2, 4, 2, 4],
      },
    ],
    chartOptions: {
      chart: {
        fontFamily: "Rubik,sans-serif",
        height: 220,
        type: "line",
        toolbar: {
          show: false,
        },
      },
      grid: {
        show: true,
        strokeDashArray: 3,
        borderColor: "rgba(0,0,0,0.1)",
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
      colors: ["#39c449", "#009efb"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
        colors: ["#009efb", "#39c449"],
      },
      markers: {
        size: 3,
        strokeColors: "transparent",
        colors: ["#009efb", "#39c449"],
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        categories: ["0", "4", "8", "12", "16", "20", "24", "30"],
        labels: {
          style: {
            colors: "#a1aab2",
          },
        },
      },
      yaxis: {
        min: 1,
        max: 5,
        tickAmount: 5,
        labels: {
          style: {
            colors: "#a1aab2",
          },
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
        theme: "dark",
      },
      legend: {
        show: false,
      },
    },
  },
};
</script>