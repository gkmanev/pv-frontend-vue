<template>
  <div>
    <b-row>
      <b-col cols="12" md="12">
        <b-card class="mb-4">
          <b-row class="py-1">
            <b-col cols="6">
              <h2 class="font-weight-light">{{ missedData }} %</h2>
              <h6 class="text-muted">Missing Data Points</h6>
            </b-col>
            <b-col cols="6">
              <div class="position-relative float-right chart-container">
                <vue-apex-charts type="donut" height="50" width="50" :options="ProgressAChart.chartOptions" :series="ProgressAChart.series"></vue-apex-charts>
                <i class="mdi mdi-av-timer text-muted display-7 chart-inner-icon centered-icon"></i>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>    
  </div>
  </template>
  
  <script>
  import VueApexCharts from "vue-apexcharts";
  import axios from 'axios';
  import { mapState } from 'vuex';
  export default {
    name: "ProgressCards",
    data() {
      return {
        totalData: 0,
        missedData: 0,

        ProgressAChart: {
          series: [],
          chartOptions: {
            labels: ["Search Traffic", "Free"],
            dataLabels: {
              enabled: false,
            },
            grid: {
              padding: {
                left: 0,
                right: 0,
              },
            },
            plotOptions: {
              pie: {
                donut: {
                  size: "50px",
                },
              },
            },
            stroke: {
              width: 0,
            },
            legend: {
              show: false,
            },
            colors: ["rgb(41, 198, 255)", "rgb(250, 250, 250)"],
            tooltip: {
              enabled: false,
              theme: "dark",
            },
          },
        },
      };
    },
    components: {
      VueApexCharts,
    },

    computed: {
        ...mapState(['dateRange','selectedDev']),
    },
    watch: { 
    
        dateRange(newRange, oldRange) {
        if (newRange !== oldRange) {
          this.ProgressAChart.series = [];
            this.fetchData();
        }
        },
        selectedDev(newDev, oldDev) {
        if (newDev !== oldDev) {
           
            this.ProgressAChart.series = [];                
            this.fetchData();
        }
        },   
    },
    methods: {
        
        fetchData() { 

            
                let url = `http://85.14.6.37:16455/api/missing/?date_range=${this.dateRange}&devId=${this.selectedDev}`    
                
                if(url){                
                axios
                .get(url)
                .then((response) => {
                  
                    this.totalData = response.data.missing 
                    const missed = 100 - this.totalData
                    this.missedData = missed.toFixed(2)               
                    this.ProgressAChart.series.push(this.totalData)
                    this.ProgressAChart.series.push(100 - this.totalData)


                }
                )      
                .catch((error) => console.log(error))      
                }
             
        }

    },



  };
  </script>
  
  <style scoped>
.chart-container {
  position: relative;
  width: 50px; /* same as chart width */
  height: 50px; /* same as chart height */
}

.centered-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px; /* Adjust size as needed */
  pointer-events: none; /* Optional: Ensures the icon doesn't interfere with chart interaction */
}
</style>