<template>    
    <b-card>
        <div ref="chart" style="width: 100%; height: 250px;"><span v-if="noDataMessage">There Are no Data for this Period</span></div>
    </b-card>
</template>

<script>
import * as echarts from 'echarts';

import { mapState } from 'vuex';

export default {
  name: 'MeasurementData',
  data() {
    return {
      chart: null,
      measurementData: [],
      timestampField: 'timestamp',
      valueFieldTemp: 'avg_temperature',
      valueFieldRadiation: 'direct_radiation',
      noDataMessage: false
    };
  },
    mounted() {
        this.fetchAllData();
        window.addEventListener('resize', this.handleResize);
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
            this.fetchAllData(newData);           
        }
      },  
      dateRange(newRange, oldRange) {
        if (newRange !== oldRange) {
            this.fetchAllData();           
        }
      },  
      selectedDev(newDev, oldDev) {
      if (newDev !== oldDev) {        
        this.fetchAllData();
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
    async fetchAllData(data) {
      let baseUrl = 'http://209.38.208.230:8000/api/pvmeasurementdata';
      this.timestampField = 'day';
      this.valueFieldRadiation = 'avg_direct_radiation';        
   
        if(this.dateRange == 'y-1' || this.dateRange == 'y-2')
        {
          baseUrl += `/?all=all&${this.dateRange}&farm=${this.selectedDev}`;
        }
        else if(this.dateRange == 'ytd'){
          baseUrl = `http://209.38.208.230:8000/api/pvmeasurementdata/?${this.dateRange}&farm=${this.selectedDev}`
          this.timestampField = 'timestamp';
          this.valueFieldRadiation = 'direct_radiation';
        }
        else if (this.dateRange == '7d'){
          this.timestampField = 'timestamp';
          this.valueFieldRadiation = 'direct_radiation_forecast';
        }
        else{
          baseUrl += `/?all=all&${this.dateRange}&farm=${this.selectedDev}`;
        }   
            console.log(baseUrl)
      try {                 
        if (data && data.length > 0) {
          this.measurementData = data;         

          this.initChart();
        } else {
          console.error('No Weather Data Found');
          this.noDataMessage = true
          if(this.chart){
              this.chart.clear();
              this.option = {
                title: {
                  text: 'No Weather Data Available',
                  left: 'center',
                  top: 'middle',
                  textStyle: {
                    fontSize: 16,
                    color: '#b2b9bf',
                    fontFamily: 'Arial',
                    fontWeight: 'normal'
                  }
                }
              };
            this.chart.setOption(this.option);   
          } 
        }
      } catch (error) {
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
      
      const groupedData = this.groupDataByFarm(this.measurementData);      
      const timestamps = this.getAllTimestamps(this.measurementData);
      let totalSeries = [];    
      totalSeries = this.createSeries(groupedData, timestamps);
       
      if(this.dateRange == '7d'){
        let seriesToday = this.createSeriesToday(groupedData, timestamps);       
        let dayAhead = this.createDayAheadSeries(groupedData, timestamps);      
        let dayBefore = this.createDayBeforeSeries(groupedData, timestamps);
        let fiveDaysAgo = this.createfiveDaysAgo(groupedData, timestamps); 
        let fiveDaysAgoForecast = this.createfiveDaysAgoForecast(groupedData, timestamps);      
        // forecast 5days ago

        totalSeries = fiveDaysAgoForecast.concat(fiveDaysAgo).concat(dayBefore).concat(seriesToday).concat(dayAhead);        
      }     

      
      
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
    createSeries(groupedData, timestamps){
     
      return Object.keys(groupedData).map(farm => {
        const dataMap = new Map(groupedData[farm].map(item => [item[this.timestampField], item[this.valueFieldRadiation]]));        
        const data = timestamps.map(timestamp => [timestamp, dataMap.get(timestamp)]); // Use null for missing data
        return {
          name: farm,
          type: 'line',
          stack: 'total',
          connectNulls: false,
          lineStyle: {
            color: 'rgba(255,255,255,1)',            
          },
          showSymbol: false,
          data: data,
        };
      });

    },
    createSeriesToday(groupedData, timestamps) {
      //filter out the timestamps untill tomorrow at 00:00
      const yesterday = new Date();
      yesterday.setHours(0, 0, 0, 0);
      yesterday.setDate(yesterday.getDate());
      const tomorrow = new Date();
      tomorrow.setHours(0, 0, 0, 0);
      tomorrow.setDate(tomorrow.getDate() + 1);      
      const filteredTimestamps = timestamps.filter(timestamp => yesterday < new Date(timestamp) && new Date(timestamp) < tomorrow);
     
      return Object.keys(groupedData).map(farm => {
        console.log(groupedData);
        const dataMap = new Map(groupedData[farm].map(item => [item[this.timestampField], item[this.valueFieldRadiation]]));     
       
        const data = filteredTimestamps.map(timestamp => [timestamp, dataMap.get(timestamp) ]); // Use null for missing data
        
        return {
          name: 'Forecast',
          type: 'line',         
          connectNulls: false,
          lineStyle: {
            color: 'rgba(255,255,255,0.6)',            
          },
          showSymbol: false,
    
          data: data,
        };
      });
    },

    createfiveDaysAgo(groupedData, timestamps){
      const fiveDaysAgo = new Date();
      fiveDaysAgo.setHours(0, 0, 0, 0);
      fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);

      const today = new Date();
      today.setHours(0, 0, 0, 0);
      today.setDate(today.getDate() - 1);
      this.valueFieldRadiation = 'direct_radiation'

      const filteredTimestamps = timestamps.filter(timestamp => fiveDaysAgo < new Date(timestamp) && new Date(timestamp) < today);  
      return Object.keys(groupedData).map(farm => {
        const dataMap = new Map(groupedData[farm].map(item => [item[this.timestampField], item[this.valueFieldRadiation]]));        
        const data = filteredTimestamps.map(timestamp => [timestamp, dataMap.get(timestamp)]); // Use null for missing data
        return {
          name: 'Actual',
          type: 'line',          
          connectNulls: false,
          lineStyle: {
            color: 'rgba(255,255,255,1)',

          },
          showSymbol: false,
          data: data,
          color: 'rgba(255,255,255,1)'
        };
      })
     
    },
    createfiveDaysAgoForecast(groupedData, timestamps){
      const fiveDaysAgo = new Date();
      fiveDaysAgo.setHours(0, 0, 0, 0);
      fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);

      const today = new Date();
      today.setHours(0, 0, 0, 0);
      today.setDate(today.getDate() - 1);
      this.valueFieldRadiation = 'direct_radiation_forecast'

      const filteredTimestamps = timestamps.filter(timestamp => fiveDaysAgo < new Date(timestamp) && new Date(timestamp) < today);  
      return Object.keys(groupedData).map(farm => {
        const dataMap = new Map(groupedData[farm].map(item => [item[this.timestampField], item[this.valueFieldRadiation]]));        
        const data = filteredTimestamps.map(timestamp => [timestamp, dataMap.get(timestamp)]); // Use null for missing data
        return {
          name: 'Forecast',
          type: 'line',
          color:'orange',         
          connectNulls: false,
          lineStyle: {
            color: 'orange',
            type: 'dotted',
            opacity: 1,
            width: 1
          },
          showSymbol: false,
          data: data,        
        };
      })
     
    },

    createDayBeforeSeries(groupedData, timestamps) {
      
      // Filter out the timestamps untill tomorrow at 00:00
      const yesterday = new Date();
      yesterday.setHours(0, 0, 0, 0);
      yesterday.setDate(yesterday.getDate() - 1);

      const today = new Date();
      today.setHours(0, 0, 0, 0);
      today.setDate(today.getDate());

      const filteredTimestamps = timestamps.filter(timestamp => yesterday < new Date(timestamp) && new Date(timestamp) < today);      
      
      return Object.keys(groupedData).map(farm => {
        const dataMap = new Map(groupedData[farm].map(item => [item[this.timestampField], item[this.valueFieldRadiation]]));        
        const data = filteredTimestamps.map(timestamp => [timestamp, dataMap.get(timestamp)]); // Use null for missing data
        return {
          name: 'Actual',
          type: 'line',         
          connectNulls: false,
          lineStyle: {
            color: 'rgba(255,255,255,1)',

          },
          showSymbol: false,
          data: data,
          color: 'rgba(255,255,255,1)'
        };
      })
    },

    createDayAheadSeries(groupedData, timestamps) {      
      // Filter out the timestamps starting from tomorrow at 00:00
      const tomorrow = new Date();
      tomorrow.setHours(0, 0, 0, 0);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const filteredTimestamps = timestamps.filter(timestamp => new Date(timestamp) >= tomorrow);
      return Object.keys(groupedData).map(farm => {
        const dataMap = new Map(groupedData[farm].map(item => [item[this.timestampField], item[this.valueFieldRadiation]]));   
        const data = filteredTimestamps.map(timestamp => [timestamp, dataMap.get(timestamp)]); // Use null for missing data
        return {
          name: 'Forecast t+1',
          type: 'line',         
          connectNulls: false,
          lineStyle: {
            color: 'rgba(255,255,255,0.3)',
            type: 'dotted'
          },
          showSymbol: false,
          data: data,
          color: 'rgba(255,255,255,0.3)'
        };
      })
    },
  },
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>