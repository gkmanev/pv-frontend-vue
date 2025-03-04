<script>
export default {
  CountChart: {
    series: [
      {
        name: "Premium ",
        data: [5, 4, 3, 7, 5, 10, 3],
      },
      {
        name: "Free ",
        data: [3, 2, 9, 5, 4, 6, 4],
      },
    ],
    chartOptions: {
      chart: {
        fontFamily: "Rubik,sans-serif",
        type: "bar",
        height: 300,
        offsetY: 10,
        toolbar: {
          show: false,
        },
      },
      grid: {
        show: true,
        strokeDashArray: 3,
        borderColor: "rgba(0,0,0,0.1)",
      },
      colors: ["#7460ee", "#39c449"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "10%",
          endingShape: "flat",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 5,
        colors: ["transparent"],
      },
      xaxis: {
        type: "category",
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        tickAmount: "16",
        tickPlacement: "on",
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#a1aab2",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#a1aab2",
          },
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        theme: "dark",
      },
      legend: {
        show: false,
      },
    },
  },
};
</script>