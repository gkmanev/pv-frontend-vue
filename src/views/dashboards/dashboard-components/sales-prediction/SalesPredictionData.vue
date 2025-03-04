<script>
export default {
  predictionChart: {
    series: [100],

    chartOptions: {
      colors: ["#8c76f9"],

      chart: {
        height: 170,
        type: "radialBar",
        fontFamily: "Rubik,sans-serif",
        spacingTop: 0,
        spacingBottom: 0,
        spacingLeft: 0,
        spacingRight: 0,
        offsetY: -30,
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          track: {
            background: "#E0E0E0",
            startAngle: -135,
            endAngle: 135,
          },
          hollow: {
            size: "35%",
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
      grid: {
        padding: {
          top: 20,
        },
      },
      fill: {
        type: "solid",
      },
      stroke: {
        lineCap: "butt",
      },
      tooltip: {
        enabled: true,
        fillSeriesColor: false,
        theme: "dark",
      },
      responsive: [
        {
          breakpoint: 1025,
          options: {
            chart: {
              height: 150,
            },
          },
        },
        {
          breakpoint: 769,
          options: {
            chart: {
              height: 190,
            },
          },
        },
        {
          breakpoint: 426,
          options: {
            chart: {
              height: 150,
            },
          },
        },
      ],
      labels: ["Sales Prediction"],
    },
  },
};
</script>