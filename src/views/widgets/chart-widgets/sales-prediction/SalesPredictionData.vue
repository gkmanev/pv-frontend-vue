<script>
export default {
  predictionChart: {
    series: [60],

    chartOptions: {
      colors: ["#1badcb"],
      stroke: {
        dashArray: 2,
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          track: {
            background: "#f1f1f1",
            startAngle: -135,
            endAngle: 135,
          },
          hollow: {
            size: "30%",
            background: "transparent",
          },
          dataLabels: {
            show: true,
            name: {
              show: false,
            },
            value: {
              show: false,
            },
            total: {
              show: true,
              fontSize: "20px",
              color: "#000",
              label: "91.4 %",
            },
          },
        },
      },
      chart: {
        height: 170,
        type: "radialBar",
        fontFamily: "Rubik,sans-serif",
        spacingTop: 0,
        spacingBottom: 0,
        spacingLeft: 0,
        spacingRight: 0,
        offsetY: -30,
        offsetX: 0,
        sparkline: {
          enabled: true,
        },
      },
      fill: {
        type: "solid",
      },
      tooltip: {
        enabled: true,
        fillSeriesColor: false,
        theme: "dark",
      },
      responsive: [
        {
          breakpoint: 426,
          options: {
            chart: {
              offsetX: -15,
            },
          },
        },
      ],
      labels: ["Progress"],
    },
  },
};
</script>