<script>
export default {
  IncomeChart: {
    series: [
      {
        name: "Growth ",
        data: [5, 4, 3, 7, 5, 10, 3],
      },
      {
        name: "Net ",
        data: [3, 2, 9, 5, 4, 6, 4],
      },
    ],
    chartOptions: {
      chart: {
        fontFamily: "Rubik,sans-serif",
        type: "bar",
        height: 315,
        offsetY: 10,
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
      colors: ["#009efb", "#39c449"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
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
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        tickAmount: "16",
        tickPlacement: "on",
        axisBorder: {
          show: false,
        },
        axisTicks: {
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