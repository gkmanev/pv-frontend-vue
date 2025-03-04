<script>
export default {
  SourceChart: {
    series: [9, 3, 2, 2],
    labels: ["Social", "Marketing", "Search Engine", "Organic Sales"],
    chartOptions: {
      chart: {
        type: "donut",
        height: 260,
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
      colors: ["#edf1f5", "#009efb", "#55ce63", "#745af2"],
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