<script>
export default {
  BandWidthChart: {
    series: [
      {
        name: "",
        labels: ["0", "4", "8", "12", "16", "20", "24", "30"],
        data: [5, 0, 12, 1, 8, 3, 12, 15],
      },
    ],
    chartOptions: {
      chart: {
        height: 120,
        type: "line",
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      colors: ["#fff"],
      fill: {
        type: "solid",
        opacity: 1,
        colors: ["#fff"],
      },
      grid: {
        show: false,
      },
      stroke: {
        curve: "smooth",
        lineCap: "square",
        colors: ["#fff"],
        width: 4,
      },
      markers: {
        size: 0,
        colors: ["#fff"],
        strokeColors: "transparent",
        shape: "square",
        hover: {
          size: 7,
        },
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
      tooltip: {
        theme: "dark",
        style: {
          fontSize: "10px",
          fontFamily: "Rubik,sans-serif",
        },
        x: {
          show: false,
        },
        y: {
          formatter: undefined,
        },
        marker: {
          show: true,
        },
        followCursor: true,
      },
    },
  },
};
</script>