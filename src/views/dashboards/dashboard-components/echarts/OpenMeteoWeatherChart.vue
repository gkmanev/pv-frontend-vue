<template>    
    <b-card>
        <div ref="chart" style="width: 100%; height: 250px;"><span v-if="noDataMessage">There Are no Data for this Period</span></div>
    </b-card>
</template>

<script>
import * as echarts from 'echarts';

import { mapState } from 'vuex';
import { fetchWeatherApi } from 'openmeteo';
export default {
  name: 'MeasurementData',
  data() {
    return {

    };
  },
    mounted() {     
        window.addEventListener('resize', this.handleResize);
        this.fetchHistoricalWeather();
    },
    computed: {
      ...mapState(['dateRange', 'selectedDev', 'updateZoom', 'updateResponse']),  
      chartHeight() {
        return window.innerHeight * 0.1; // Adjust this factor as needed
      }          
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
      if (this.chart) {
        this.chart.dispose();
      }
    },
    watch: {      
      updateZoom(newRange, oldRange) {
        if (newRange !== oldRange) {
          
          const option = this.chart.getOption();   
          option.dataZoom[0].start = newRange.start;
          option.dataZoom[0].end = newRange.end;
          this.chart.setOption(option);                
        }
      },
      updateResponse(newData, oldData) {
        if (newData !== oldData) {         
           // this.fetchAllData(newData);           
        }
      },  
      dateRange(newRange, oldRange) {
        if (newRange !== oldRange) {
            //this.fetchAllData();           
        }
      },  
      selectedDev(newDev, oldDev) {
      if (newDev !== oldDev) {        
       // this.fetchAllData();
      }
    },
    },
  methods: {
    handleResize() {
      if (this.chart) {
        this.chart.resize();
      }
    },
    lastRouteSegment() {
      const pathArray = this.$route.path.split('/');    
      return pathArray.pop() || pathArray[pathArray.length - 1]; // This handles non-trailing slash URLs
    },
    async fetchHistoricalWeather() {
      const params = {
        latitude: 52.52,
        longitude: 13.41,
        start_date: '2025-02-11',
        end_date: '2025-02-25',
        "hourly": ["temperature_2m", "rain", "direct_radiation"]
      };

      const url = 'https://archive-api.open-meteo.com/v1/archive';
      try {
        const responses = await fetchWeatherApi(url, params);

        // Helper function to form time ranges
        const range = (start, stop, step) =>
          Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

        // Process first location. Add a for-loop for multiple locations or weather models
        const response = responses[0];
        const hourly = response.hourly();
        const weatherData = {
          hourly: {
            time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
              (t) => new Date((t) * 1000)
            ),
            temperature2m: hourly.variables(0).valuesArray(),
            rain: hourly.variables(1).valuesArray(),
            directRadiation: hourly.variables(2).valuesArray(),
          },
        };
        this.weatherData = weatherData;
        this.initChart();  

      }catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    initChart() {
      if (!this.chart) {
        this.chart = echarts.init(this.$refs.chart);        
      }
      else{
        this.chart.clear();
        this.option = {};           
      }

      let totalSeries = [];    
      
      
      let timestamps = this.weatherData.hourly.time.map(date => date.toISOString());
      console.log(timestamps);
      //totalSeries = this.createSeries(groupedData, timestamps);
       
 
      //series.push(...dayAhead); 
      const xAxis = this.getXAxisConfig(timestamps);
      this.option = {
        title: {
            text: 'Direct Radiation [W/m²]', 
            left: 'center',
            top: 'top',   
            textStyle: {
              fontSize: 16,
              color:'#b2b9bf',
              fontFamily: 'Arial',
              fontWeight: 'normal'
            },   
  
          },
          grid: {
            bottom: '25%',
            left:'10%',
            containLabel: false
            },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line',
            label: {
              backgroundColor: '#6a7985',
            },
          },
          backgroundColor: '',
          borderWidth: 0,
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowColor: 'transparent',
            formatter: (params) => {
            if (params && params.length) {
              let tooltipContent = `<div class="tooltip-set" style="text-align:left; padding:0; margin:0; background-color: black; border-radius: 8px;">`;
              const utcTime = new Date(params[0].data[0]);
              const hours = utcTime.getHours().toString().padStart(2, '0');
              const minutes = utcTime.getMinutes().toString().padStart(2, '0');
              const day = utcTime.getDate().toString().padStart(2, '0');
              const month = (utcTime.getMonth() + 1).toString().padStart(2, '0');
              const year = utcTime.getFullYear();
              const localTime = `${day}.${month}.${year} ${hours}:${minutes}`;
              
              tooltipContent += `
              <div style="padding-right:15px;padding-left:15px;padding-top:3px;padding-bottom:3px;margin-bottom:0;border-bottom-left-radius: 8px;border-bottom-right-radius: 8px;">
              <ul style="list-style-type: none; margin: 0; padding-left: 0;">`;
              
                params.forEach(param => {
                tooltipContent += `
                <li>
                <span style="color: ${param.color};">${param.seriesName}: ${param.data[1]}</span>
                </li>`;
                });
              
              tooltipContent += `
              </ul>
              </div>`;
              
              let footer = `
              <div style="color: white; padding: 10px; background-color: #333; border-top: 1px solid #999;">
              <strong>Time: ${localTime}</strong>
              </div>`;
              
              tooltipContent += footer;
              tooltipContent += `</div>`;
              return tooltipContent;
            }
            return '';
            },
        },
        xAxis: xAxis, 

        yAxis: {
          type: 'value',
          axisLine: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
        },
        dataZoom: [
          {
            type: 'slider',
            start: 0,
            end: 100,
            height: 20, // Adjust the height to make the slider tinier
            bottom: 10, // Adjust the bottom to lower the slider
            handleSize: '80%', // Adjust the handle size
            handleStyle: {
              color: '#fff',
              borderColor: '#ccc',
            },
            fillerColor: 'rgba(167,183,204,0.4)', // Adjust the filler color
            backgroundColor: 'rgba(47,69,84,0.25)', // Adjust the background color
            borderColor: '#ddd', // Adjust the border color
            textStyle: {
              color: '#fff',
            },
            borderWidth: {
              top: 1, // Adjust the width of the top border
              right: 1,
              bottom: 1,
              left: 1
            }
          },
        ],
        series: totalSeries,
      };      
      this.chart.setOption(this.option);
    },
    groupDataByFarm(data) {
      return data.reduce((acc, item) => {
        if (!acc[item.farm]) {
          acc[item.farm] = [];
        }
        acc[item.farm].push(item);
        return acc;
      }, {});
    },
    getXAxisConfig(timestamps) {
     
      return {
        type: 'time',
        min: timestamps[0],
        max: timestamps[timestamps.length - 1],
        boundaryGap: false
      };
    },
    getAllTimestamps(data) {
      const timestamps = new Set();
      data.forEach(item => {       
        timestamps.add(item[this.timestampField]);
      });
      return Array.from(timestamps).sort();
    },
    // createSeries(groupedData, timestamps){     
      
    //     // return {
    //     //   name: farm,
    //     //   type: 'line',
    //     //   stack: 'total',
    //     //   connectNulls: false,
    //     //   lineStyle: {
    //     //     color: 'rgba(255,255,255,1)',            
    //     //   },
    //     //   showSymbol: false,
    //     //   data: data,
    //     // };
     

    // },

  },
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>