<template>    
    <b-card>
        <div ref="chart" style="width: 100%; height: 400px;"></div>
    </b-card>
</template>

<script>
import * as echarts from 'echarts';
import axios from 'axios';
import { mapState } from 'vuex';
export default {
  name: 'MeasurementData',
  data() {
    return {
      chart: null,
      measurementData: [],
    };
  },
    mounted() {
        this.fetchAllData();
    },
    computed: {
      ...mapState(['dateRange']),      
    },
    watch: {      
      dateRange(newRange, oldRange) {
        if (newRange !== oldRange) {         
            this.fetchAllData();     
        }
      },

  
    },
  methods: {
    async fetchAllData(url = 'http://209.38.208.230:8000/api/forecastdata/?day_ahead=day_ahead') {
      try {
        const response = await axios.get(url);
        this.measurementData = response.data;
        if (this.measurementData.length > 0) {
          this.initChart();
        } else {
          console.error('No data found');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    initChart() {
      this.chart = echarts.init(this.$refs.chart);
      const groupedData = this.groupDataByFarm(this.measurementData);
      const timestamps = this.getAllTimestamps(this.measurementData);
      const series = this.createSeries(groupedData, timestamps);

      const option = {
        title: {
            text: 'PV Production [MW/h]', 
            left: 'center',   
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
              const param = params[0]; // Only show the first series being pointed to
              let tooltipContent = `<div class="tooltip-set" style="text-align:left; padding:0; margin:0; background-color: black; border-radius: 8px;">`;
              const utcTime = new Date(param.data[0]);
            //   const hours = utcTime.getHours().toString().padStart(2, '0');
            //   const minutes = utcTime.getMinutes().toString().padStart(2, '0');
              const day = utcTime.getDate().toString().padStart(2, '0');
              const month = (utcTime.getMonth() + 1).toString().padStart(2, '0');
              const year = utcTime.getFullYear();
              const localTime = `${day}.${month}.${year}`;
              const sumValue = param.data[1];
              tooltipContent += `
              <div style="padding-right:15px;padding-left:15px;padding-top:3px;padding-bottom:3px;margin-bottom:0;border-bottom-left-radius: 8px;border-bottom-right-radius: 8px;">
                <ul style="list-style-type: none; margin: 0; padding-left: 0;">
                  <li>
                    
                    <span style="color: white;">Cumulative PV Production</span>
                  </li>
                </ul>
              </div>`;
              let footer = `
              <div style="color: white; padding: 10px; background-color: #333; border-top: 1px solid #999;">
                <strong>Total ${sumValue}  </strong> at <span style="color: white;">${localTime}</span>
              </div>`;
              tooltipContent += footer;
              tooltipContent += `</div>`;
              return tooltipContent;
            }
            return '';
          },
        },
        xAxis: 
        {
            type: 'time',
            axisLabel: {
            rotate:40,
            margin:25,
            textStyle: {
                color: '#9a9a9a'
            },
        },
        axisLine: {
            show: true,
            onZero: true
        },

    
        boundaryGap: false,    
            
        },
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
          },
        ],
        series: series,
      };

      this.chart.setOption(option);
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
    getAllTimestamps(data) {
      const timestamps = new Set();
      data.forEach(item => {
        timestamps.add(item.timestamp);
      });
      return Array.from(timestamps).sort();
    },
    createSeries(groupedData, timestamps) {
      return Object.keys(groupedData).map(farm => {
        const dataMap = new Map(groupedData[farm].map(item => [item.timestamp, item.production]));
        const data = timestamps.map(timestamp => [timestamp, dataMap.get(timestamp) || 0]);
        return {
          name: farm,
          type: 'line',
          stack: 'total',
          showSymbol: false,
          areaStyle: {},
          data: data,
        };
      });
    },
  },
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>