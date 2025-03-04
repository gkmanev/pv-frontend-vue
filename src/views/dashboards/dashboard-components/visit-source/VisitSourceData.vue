<script>
export default {
  SourceChart: {
    labels: ["Desktop", "Mobile", "Other", "Tablet"],
    series: [5.5, 3.5, 3, 2],
    chartOptions: {
      chart: {
        type: "donut",
        height: 280,
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
            size: "86%",
            labels: {
              show: true,
              name: {
                show: false,
                offsetY: 7,
              },
              value: {
                show: true,
                fontSize: "20px",
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
      colors: ["#745af2", "#26c6da", "#dadada", "#f62d51"],
      tooltip: {
        show: true,
        fillSeriesColor: false,
      },
      legend: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 426,
          options: {
            chart: {
              height: 230,
              width: 200,
            },
          },
        },
      ],
    },
  },
};
</script>