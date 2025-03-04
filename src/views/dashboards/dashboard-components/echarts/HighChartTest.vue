<template>
  <b-card class="mb-4">
    <div class="chart" ref="plotlyChart"></div>
  </b-card>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
import Plotly from 'plotly.js-dist';

export default {
  name: "HelloWorld",
  data() {
    return {
      created_date_or_created: 'created_date',
      traceVisibility: {
        // Add more devIds as needed
      }
    };
  },
  mounted() {
    this.fetchData();
    this.populateTraceVisibility();
  },
  computed: {
    ...mapState(['dateRange', 'selectedDev', 'selectBoxDevs']),
  },
  watch: {
    selectBoxDevs: {
      handler(newBox, oldBox) {
        if (newBox !== oldBox) {
          this.traceVisibility = newBox;
          this.fetchData();
        }
      },
      deep: true // If selectBoxDevs is an array or object, use deep: true
    },
    dateRange(newRange, oldRange) {
      if (newRange !== oldRange) {
        this.fetchData();
      }
    },
    selectedDev(newDev, oldDev) {
      if (newDev !== oldDev) {
        this.fetchData();
      }
    },
  },
  methods: {
    populateTraceVisibility() {
      for (let i = 1; i <= 2; i++) {
        const devId = 'batt-' + ('000' + i).slice(-4); // Generate devId with leading zeros
        this.$set(this.traceVisibility, devId, true); // Set visibility for each devId
      }
    },
    fetchData() {
      let url = '';

      if (this.$route.path.endsWith('entra')) {
        if (this.dateRange === "today") {
          url = `http://85.14.6.37:16543/api/state_of_charge/?date_range=today`;
        } else {
          url = `http://85.14.6.37:16455/api/posts/?date_range=${this.dateRange}`;
        }
      } else {
        if (this.selectedDev) {
          url = `http://85.14.6.37:16455/api/posts/?date_range=${this.dateRange}&dev=${this.selectedDev}`;
        }
      }

      try {
        let requestOne = [];
        if (url) {
          requestOne = axios.get(url);
        }
        let requestTwo = [];

        axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
          let devData = responses[0].data;
          this.createPlotlyChart(devData);
        }));
      } catch (error) {
        console.log(error);
      }
    },

    createPlotlyChart(devData) {
      const traces = [];

      if (Array.isArray(devData) && devData.length > 0) {
        const devIds = [...new Set(devData.map(item => item.devId))];
        const uniqueDates = [...new Set(devData.map(item => item.timestamp))].sort();
        console.log("uniqueDates:", uniqueDates);

        const traceMap = {};
        const colors = [];

        // Function to generate a random color
        const getRandomColor = () => {
          const letters = '0123456789ABCDEF';
          let color = '#';
          for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
        };

        devIds.forEach(devId => {
          if (this.traceVisibility[devId]) {
            const traceColor = getRandomColor();
            colors.push(traceColor);
            const trace = {
              x: uniqueDates,
              y: Array(uniqueDates.length).fill(0),
              type: 'scatter',
              mode: 'lines',
              stackgroup: 'one', // Group traces together for stacking
              fill: 'tonexty',    // Fill area for stacking
              name: devId,
              line: { width: 0.5 },
              hoverinfo: 'text',
              marker: { color: traceColor },
              hovertemplate: 
                `<b style="display: inline-block; margin-right: 5px; color: ${traceColor};">&#x25CF;</b>` +
                `<b style="display: inline-block; margin-right: 5px;">%{fullData.name}</b><br>` +
                `<i>Time: %{x}</i><br>` +
                `<span style="color: gray;">SoC: </span><span>%{y}</span><br><extra></extra>`,
            };
            traceMap[devId] = traces.length;
            traces.push(trace);
          }
        });

        devData.forEach(item => {
          const dateIndex = uniqueDates.indexOf(item.timestamp);
          const traceIndex = traceMap[item.devId];
          if (traceIndex !== undefined && dateIndex !== -1) {
            // Divide y values by 2 for devId 'batt-0002'
            if (item.devId === 'batt-0002') {
              traces[traceIndex].y[dateIndex] = item.state_of_charge / -2.4;
            } else {
              traces[traceIndex].y[dateIndex] = item.state_of_charge;
            }
          }
        });

        if (traces.length > 0) {
          const layout = {
            title: 'State Of Charge',
            font: { color: '#20C997' },
            xaxis: {
              showspikes: true,
              spikemode: 'across',
              spikethickness: 1,
              spikedash: 'dot',
              spikecolor: '#858687',
              tickfont: { color: '#00a3cf' },
            },
            yaxis: {
              tickfont: { color: '#858687' },
              range: 'auto',
            },
            hoverlabel: { bgcolor: "#272b34", bordercolor: "black", font: { color: "white" } },
            plot_bgcolor: '#272b34',
            showlegend: false,
            paper_bgcolor: '#272b34',
          };

          // Configure the layout based on the dateRange
          if (this.dateRange === 'today') {
            Object.assign(layout.xaxis, {
              tick0: new Date().setHours(0, 0, 0, 0),
              tickangle: -45,
              dtick: 3600000,
              range: [new Date().setHours(0, 0, 0, 0), new Date().setHours(23, 59, 59, 999)],
              type: 'date',
              tickformat: '%H:%M',
              rangeslider: {
                tickformat: '%H:%M',
                tickmode: 'linear',
                tick0: new Date().setHours(0, 0, 0, 0),
                dtick: 3600000,
                bordercolor: '#858687',
                borderwidth: 2,
                thickness: 0.05,
              }
            });
          } else if (this.dateRange === 'month') {
            const firstDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
            const lastDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);

            Object.assign(layout.xaxis, {
              type: 'date',
              tickformat: '%d',
              tickmode: 'linear',
              tick0: firstDayOfMonth.getTime(),
              dtick: 24 * 60 * 60 * 1000,
              range: [firstDayOfMonth.getTime(), lastDayOfMonth.getTime()],
              tickangle: -45,
              rangeslider: {
                tickformat: '%d',
                tickmode: 'linear',
                tick0: firstDayOfMonth.getTime(),
                dtick: 24 * 60 * 60 * 1000,
                bordercolor: '#858687',
                borderwidth: 2,
                thickness: 0.05,
              }
            });
          } else {
            const firstDayOfYear = new Date(new Date().getFullYear(), 0, 1);
            const lastDayOfYear = new Date(new Date().getFullYear(), 11, 31);

            Object.assign(layout.xaxis, {
              type: 'date',
              tickformat: '%b',
              tickmode: 'linear',
              tick0: firstDayOfYear.getTime(),
              dtick: 30 * 24 * 60 * 60 * 1000,
              range: [firstDayOfYear.getTime(), lastDayOfYear.getTime()],
              tickangle: -45,
              rangeslider: {
                tickformat: '%d',
                tickmode: 'linear',
                tick0: firstDayOfYear.getTime(),
                dtick: 24 * 60 * 60 * 1000,
                bordercolor: '#858687',
                borderwidth: 2,
                thickness: 0.05,
              }
            });
          }

          const config = { responsive: true };

          Plotly.newPlot(this.$refs.plotlyChart, traces, layout, config).then(() => {
            this.$refs.plotlyChart.on('plotly_hover', data => {
              let update = { 'line': { width: 3 } };
              Plotly.restyle(this.$refs.plotlyChart, update, [data.points[0].curveNumber]);
            });

            this.$refs.plotlyChart.on('plotly_unhover', data => {
              let update = { 'line': { width: 1 } };
              Plotly.restyle(this.$refs.plotlyChart, update, [data.points[0].curveNumber]);
            });
          });
        } else {
          console.log('No traces to display.');
        }
      }
    }
  }
}
</script>

<style scoped>
.chart {
  height: 650px;
  background-color: black;
}
</style>
