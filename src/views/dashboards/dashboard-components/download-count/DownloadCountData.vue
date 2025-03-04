<script>
export default {
  CountChart: {
    series: [
      {
        name: "",
        data: [2, 3, 8, 10, 8, 12, 2, 8, 2, 4, 1, 10, 8, 12, 10],
      },
    ],
    chartOptions: {
      chart: {
        type: "bar",
        fontFamily: "Rubik,sans-serif",
        height: 120,
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      colors: ["rgba(255, 255, 255, 0.3)"],
      grid: {
        show: false,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          startingShape: "flat",
          endingShape: "flat",
          columnWidth: "100%",
          barHeight: "100%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 4,
        colors: ["transparent"],
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      axisBorder: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        theme: "dark",
        style: {
          fontSize: "12px",
          fontFamily: "Rubik,sans-serif",
        },
        x: {
          show: false,
        },
        y: {
          formatter: undefined,
        },
      },
    },
  },
};
</script>