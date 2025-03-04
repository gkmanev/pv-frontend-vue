<script>
export default {
  aiChart: {
    series: [
      {
        name: "Growth ",
        data: [
          8,
          1,
          1,
          10,
          11,
          6,
          12,
          14,
          21,
          15,
          21,
          24,
          28,
          23,
          34,
          38,
          41,
          47,
        ],
      },
      {
        name: "Loss ",
        data: [
          11,
          4,
          3,
          14,
          9,
          10,
          18,
          15,
          24,
          17,
          19,
          26,
          31,
          26,
          37,
          41,
          46,
          51,
        ],
      },
    ],
    chartOptions: {
      chart: {
        height: 350,
        type: "area",
        stacked: false,
        fontFamily: "Rubik,sans-serif",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      colors: ["rgba(38, 198, 218, 0.7)", "rgba(38, 198, 218, 0.1)"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: false,
      },
      markers: {
        size: 2,
        strokeColors: "transparent",
        colors: "#26c6da",
      },
      fill: {
        type: "solid",
        colors: ["rgba(38, 198, 218, 0.6)", "rgba(38, 198, 218, 0.3)"],
        opacity: 1,
      },
      grid: {
        show: true,
        strokeDashArray: 3,
        borderColor: "rgba(0,0,0,0.1)",
      },
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      legend: {
        show: false,
      },
      tooltip: {
        theme: "dark",
        marker: {
          show: true,
        },
      },
    },
  },
};
</script>