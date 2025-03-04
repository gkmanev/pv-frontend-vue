<script>
export default {
  RevenueChart: {
    series: [
      {
        name: "2020",
        data: [
          800000,
          1200000,
          1400000,
          1300000,
          1200000,
          1400000,
          1300000,
          1300000,
          1200000,
        ],
      },
      {
        name: "2016",
        data: [
          200000,
          400000,
          500000,
          300000,
          400000,
          500000,
          300000,
          300000,
          400000,
        ],
      },
      {
        name: "2015",
        data: [
          100000,
          200000,
          400000,
          600000,
          200000,
          400000,
          600000,
          600000,
          200000,
        ],
      },
    ],
    chartOptions: {
      chart: {
        fontFamily: "Rubik,sans-serif",
        type: "bar",
        height: 360,
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      grid: {
        borderColor: "rgba(0,0,0,0.1)",
        strokeDashArray: 3,
      },
      colors: ["#0f8edd", "#11a0f8", "#51bdff"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "45%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
        ],
        labels: {
          style: {
            colors: "#a1aab2",
          },
        },
      },
      yaxis: {
        tickAmount: 10,
        labels: {
          style: {
            colors: "#a1aab2",
          },
        },
      },
      tooltip: {
        theme: "dark",
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
    },
  },
};
</script>