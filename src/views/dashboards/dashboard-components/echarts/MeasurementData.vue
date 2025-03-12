<template>    
    <b-card >
      <div ref="chart" :style="{ width: '100%', height: '250px' }"><span v-if="noDataMessage">There Are no Data for this Period</span></div>
    </b-card>
</template>

<script>
import * as echarts from 'echarts';
import axios from 'axios';
import { mapState } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: 'MeasurementData',
  data() {
    return {
      chart: null,
      measurementData: [],
      technicalData: [],
      predictionsData: [],
      timestampField: 'day',
      valueField: 'total_production',
      noDataMessage: false
    };
  },
    mounted() {
        this.fetchAllData();
        window.addEventListener('resize', this.handleResize);
        if (this.chart) {
          this.chart.on('dataZoom', this.handleDataZoom);
        }        
    },
    computed: {
      ...mapState(['dateRange', 'selectedDev', 'confidanceCheck', 'all_devs']),      
      chartHeight() {
        return window.innerHeight * 0.1; // Adjust this factor as needed
      }
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
      if (this.chart) {
        this.chart.off('dataZoom', this.handleDataZoom);
        this.chart.dispose();
      }
    },
    watch: {      
      dateRange(newRange, oldRange) {
        if (newRange !== oldRange) {
            this.fetchAllData();           
        }
      },  

      confidanceCheck(newVal, oldVal) {
        
        if (newVal !== oldVal) {
          if(newVal == true){
            
            this.fetchConfidence()
          }
        }
      },  
      selectedDev(newDev, oldDev) {
      if (newDev !== oldDev) {        
        this.fetchAllData();
      }
    },
    },
  methods: {

    ...mapActions(['updateZoomData', 'updateResponseData', 'updateDateRange']),

    handleResize() {
      if (this.chart) {
        this.chart.resize();
      }
    },
    handleDataZoom(params) {
    const { start, end } = params;    
    const zoomRange = { "start":start, "end":end };
    this.updateZoomData(zoomRange);


    // Perform any actions you want when zooming occurs
    // For example, you could fetch new data based on the zoom range:
    // this.fetchDataForRange(start, end);
  },

    fetchConfidence(){
      let url = 'http://209.38.208.230:8000/api/confidence/?confidence=true'
      url = `${url}&${this.dateRange}`
      this.chart.showLoading(); // Show preloader
      axios.get(url)
      .then(response => {          
        if(response.data.message == "Confidence intervals calculated and database updated."){
          this.fetchAllData();
        }     
      })
      .catch(error => {
        console.error('Error fetching confidence data:', error);
      })
      .finally(() => {
        this.chart.hideLoading(); // Hide preloader
      });
    },


    lastRouteSegment() {
      const pathArray = this.$route.path.split('/');    
      return pathArray.pop() || pathArray[pathArray.length - 1]; // This handles non-trailing slash URLs
    },
    async fetchAllData() {
      
      let baseUrl = 'http://209.38.208.230:8000/api/pvmeasurementdata';
      this.timestampField = 'day';
      this.valueField = 'total_production'; 
      baseUrl += `/?all=all&${this.dateRange}=${this.dateRange}`;
      if (this.selectedDev && this.lastRouteSegment() !== 'entra') {
        if(this.dateRange == 'ytd'){
          baseUrl = `http://209.38.208.230:8000/api/pvmeasurementdata/?${this.dateRange}=${this.dateRange}&farm=${this.selectedDev}`;
          this.timestampField = 'timestamp';
          this.valueField = 'production';
        }
        else if(this.dateRange == '7d'){
          const predictionsUrl = `http://85.14.6.37:2323/api/pvforecast/?farm=${this.selectedDev}`
          baseUrl = `http://209.38.208.230:8000/api/pvmeasurementdata/?${this.dateRange}=${this.dateRange}&farm=${this.selectedDev}`;
          const baseUrlTechnical = `http://209.38.208.230:8000/api/pvdata/?farm=${this.selectedDev}`
          console.log(baseUrlTechnical)
          const response = await axios.get(baseUrlTechnical);
          this.technicalData = response.data;         
          const responsePredictions = await axios.get(predictionsUrl);
          this.predictionsData = responsePredictions.data;
          console.log(responsePredictions.data)
          this.timestampField = 'timestamp';
          this.valueField = 'production';          
        }
        else{
          baseUrl = `http://209.38.208.230:8000/api/pvmeasurementdata/?all=all&${this.dateRange}=${this.dateRange}&farm=${this.selectedDev}`;
        }
      }     
      else if (this.lastRouteSegment() == 'entra'){
        if (this.dateRange === '7d'){  
          this.updateDateRange('ytd')     
          baseUrl = 'http://209.38.208.230:8000/api/pvmeasurementdata';
          this.timestampField = 'day';
          this.valueField = 'total_production'; 
          baseUrl += `/?all=all&ytd=ytd`;          
        }
      }
       
      try {        
        const response = await axios.get(baseUrl);
        this.measurementData = response.data;    
        this.updateResponseData(this.measurementData);  
        if (this.measurementData.length > 0) {    
          this.initChart();
          this.$nextTick(() => {
          this.handleResize();
          });
        } else {
          console.error('No data found');
          this.noDataMessage = true
          if(this.chart){
              this.chart.clear();
              this.option = {
                title: {
                  text: 'No Data Available',
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
        if (error.response.status
          && error.response.status === 401) {
          this.$router.push({ name: 'FullLogin' });
        }
        
      }
        },
    initChart() {  
      let allSeries = [];    
      let xAxis = {};
      let tooltipConfig = {};
      let newSeriesMax = [];
      let newSeriesMin = [];
      let timestampsTech = [];
      let groupedDataTech = [];
      let timestampsPrediction = [];
      let groupedDataPrediction = [];
      let titleText = 'PV Comulative Production [kWh] | Daily Resolution';
      if (!this.chart) {
        this.chart = echarts.init(this.$refs.chart);
        this.chart.on('dataZoom', this.handleDataZoom);
      }
      else{
        this.chart.clear();      
      }
      if (this.lastRouteSegment() == 'entra'){        
        const groupedData = this.groupDataByFarm(this.measurementData);
        const timestamps = this.getAllTimestamps(this.measurementData);
        const series = this.createSeries(groupedData, timestamps);
        xAxis = this.getXAxisConfig(timestamps);
        tooltipConfig = this.getTooltipConfig();
        allSeries = series      
      }
      if (this.selectedDev && this.lastRouteSegment() !== 'entra'){
        if (this.dateRange == 'y-1' || this.dateRange == 'y-2'){
          titleText = `Production [kWh]`;
        }
        else {
          titleText = `Production [kWh]`;
        }        
        const timestamps = this.getAllTimestamps(this.measurementData); 
        const groupedData = this.groupDataByFarm(this.measurementData);         
        if(this.technicalData.length > 0){          
          timestampsTech = this.getAllTimestamps(this.technicalData);       
          groupedDataTech = this.groupDataByFarmTech(this.technicalData); 
        }
        if(this.predictionsData.length > 0){
          timestampsPrediction = this.getAllTimestamps(this.predictionsData);
          groupedDataPrediction = this.groupDataByFarm(this.predictionsData);
        }
        // if(this.dateRange !== 'ytd' || this.dateRange !== '7d' || this.dateRange !== 'y-1' || this.dateRange !== 'y-2'){
          
        //   newSeriesMax = this.addMaxSeries(groupedData, timestamps); 
            
        //   newSeriesMin = this.addMinSeries(groupedData, timestamps); 
        // }
        const series = this.createSeries(groupedData, timestamps);             
        const technicalSeries = this.createTechnicalSeries(groupedDataTech, timestampsTech); 
        const predictionsSeries = this.createPredictionSeries(groupedDataPrediction, timestampsPrediction);

        xAxis = this.getXAxisConfig(timestamps);        
        allSeries = series.concat(technicalSeries).concat(newSeriesMax).concat(newSeriesMin).concat(predictionsSeries);        
        tooltipConfig = this.getTooltipConfig();
        series[0].areaStyle.opacity = 0
        series[0].lineStyle.color = "orange"        
      }     

      // Get today's date
      const today = new Date();
      const currentDateTime = today.toISOString();
      // Add markLine to the series
      allSeries.forEach(series => {
        if (!series.markLine) {
          series.markLine = {
        symbol: 'none',
        data: [
          {
            xAxis: currentDateTime,
            label: {
          formatter: 'Now',
          position: 'insideEndBottom',
          padding: [2, 4, 2, 4], // Add padding to remove the arrow
          backgroundColor: 'transparent', // Make the background transparent
          borderWidth: 0, // Remove the border                 
          color: 'gray',
          fontSize: 12,                  
            },
            lineStyle: {
          color: 'gray',
          type: 'dotted'
            }
          }
        ]
          };
        }
      });

      this.option = {
        title: {
            text: titleText, 
            left: 'center', 
            top: 'top',  
            textStyle: {
              fontSize: 18,
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
        tooltip: tooltipConfig,
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
        series: allSeries,
        //series: series,
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
    groupDataByFarmTech(data) {
      return data.reduce((acc, item) => {
        if (!acc[item.installation_name]) {
          acc[item.installation_name] = [];
        }
        acc[item.installation_name].push(item);
        return acc;
      }, {});
    },
    getAllTimestamps(data) {
      const timestamps = new Set();
      data.forEach(item => {       
        timestamps.add(item[this.timestampField]);
      });
      return Array.from(timestamps).sort();
    },
    getTooltipConfig() {
      return {        
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
                   
              let tooltipTitle = "Cumulative Production";
              const param = params[0]; // Only show the first series being pointed to
              let tooltipContent = `<div class="tooltip-set" style="text-align:center; padding:0px; margin:0; background-color: black; border-radius: 8px;">`;
              const utcTime = new Date(param.data[0]);
              const hours = utcTime.getHours().toString().padStart(2, '0');
              const minutes = utcTime.getMinutes().toString().padStart(2, '0');
              const day = utcTime.getDate().toString().padStart(2, '0');
              const month = (utcTime.getMonth() + 1).toString().padStart(2, '0');
              const year = utcTime.getFullYear();
              let localTime;
              let cumulativeValue = 0;
                params.forEach(param => {               
                // calculate cumulative value if param is not null or undefined
                if (param.data[1] !== null && param.data[1] !== undefined) {                                 
                  cumulativeValue += parseFloat(param.data[1]);                    
                }
                });
          
              
              if (this.selectedDev && this.lastRouteSegment() !== 'entra'){
                localTime = `${day}.${month}.${year} | ${hours}:${minutes}`;
                if (this.dateRange == 'y-1' || this.dateRange == 'y-2'){
                  tooltipContent += ``;
                  tooltipTitle = "";
                }
                else{
                  tooltipContent += `<ul style="list-style-type: none; padding: 5px; margin-top: 0px;">`;
                  params.forEach(param => {
                  if (param.data[1] === null || param.data[1] === undefined) {
                    return;
                  }
                  tooltipContent += `<li style="list-style-type: none; padding: 0px; margin: 0px;"><span style="color: ${param.color};">${param.seriesName}: ${param.data[1]}</span></li>`;               
                  });
                  tooltipContent += `</ul>`;
                  tooltipTitle = "";
                }
              }
              else{                
                localTime = `${day}.${month}.${year}`;
                tooltipTitle = "Cumulative Production";
              }
              //localTime = `${day}.${month}.${year}`;
              //const sumValue = param.data[1];
              tooltipContent += `
              <div style="padding-right:15px;padding-left:15px;padding-top:3px;padding-bottom:3px;margin-bottom:0;border-bottom-left-radius: 8px;border-bottom-right-radius: 8px;">
                <ul style="list-style-type: none; margin: 0; padding-left: 0;">
                  <li>                    
                    <span style="color: white;">${tooltipTitle}</span>
                  </li>
                </ul>
              </div>`;
              let footer = '';
              if (this.selectedDev && this.lastRouteSegment() !== 'entra'){
                if (this.dateRange == 'y-1' || this.dateRange == 'y-2'){
                  localTime = `${day}.${month}.${year}`
                  footer = `                
                  <div style="color: white; padding: 10px; background-color: #333; border-top: 1px solid #999;">
                    <strong></strong><span style="color: white;">${localTime} | ${parseFloat(param.data[1]).toFixed(2)}</span>
                  </div>`;
                }
                else{
                  footer = `                
                  <div style="color: white; padding: 10px; background-color: #333; border-top: 1px solid #999;">
                    <strong></strong><span style="color: white;">${localTime}</span>
                  </div>`;
                }
              }
              else{
              footer = `
                <div style="color: white; padding: 10px; background-color: #333; border-top: 1px solid #999;">
                  <strong>${localTime} </strong> | <span style="color: white;">${cumulativeValue.toFixed(2)}</span>
                </div>`;
              }
              tooltipContent += footer;
              tooltipContent += `</div>`;
              return tooltipContent;
            }
            return '';
          },        
      };
    },
    createSeries(groupedData, timestamps) { 

        let filteredTimestamps = timestamps;
        let name = ''
        let color = ''
        if (this.dateRange == '7d'){      
          name = 'Actual'
          color = 'orange'
        } 
     

     
        return Object.keys(groupedData).map(farm => {
        
          const dataMap = new Map(groupedData[farm].map(item => [item[this.timestampField], item[this.valueField]]));
          const data = filteredTimestamps.map(timestamp => [timestamp, dataMap.get(timestamp)] || null);       
          
          const config = {          
          type: 'line',
          stack: 'total',  
          itemStyle: {
            opacity:50
          },       
          lineStyle:{
           // color: 'orange'
          },   
          connectNulls: false,
          showSymbol: false,
          areaStyle: {
           
          },         
        }
          config.name = name ? name : farm
          config.data = data
          config.color = color
          return config      
      });
      
    },
    createTechnicalSeries(groupedDataTech, timestamps) {  
      return Object.keys(groupedDataTech).map(installation_name => {
          
          const dataMap = new Map(groupedDataTech[installation_name].map(item => [item[this.timestampField], item["signal_value"]]));
          
          const data = timestamps.map(timestamp => [timestamp, dataMap.get(timestamp)]); // Use null for missing data
                   
          const config = {          
          type: 'line',       
          lineStyle:{
            color:'orange',
            opacity:0.5
          },   
          connectNulls: false,
          showSymbol: false,      
        }
          config.name = `Technical`
          config.data = data
          config.color = 'orange'
          return config      
      });
    },
    createPredictionSeries(groupedDataPrediction, timestampsPrediction){
      return Object.keys(groupedDataPrediction).map(farm => {
          
          const dataMap = new Map(groupedDataPrediction[farm].map(item => [item["timestamp"], item["production_forecast"].toFixed(2)]));
          
          const data = timestampsPrediction.map(timestamp => [timestamp, dataMap.get(timestamp)]); // Use null for missing data
                    
          const config = {          
          type: 'line',       
          lineStyle:{
            width: 2,
            color: 'yellow',
            opacity: 1,
            type: 'dotted'
          },   
          connectNulls: false,
          showSymbol: false,      
        }
          config.name = `Forecast`
          config.data = data
          config.color = 'yellow'
          return config      
      });

    },
    getXAxisConfig(timestamps) {
      return {
        type: 'time',
        min: timestamps[0],
        max: timestamps[timestamps.length - 1],
        boundaryGap: false
      };
    },
    addMaxSeries(groupedData, timestamps){    
    
      return Object.keys(groupedData).map(farm => {
        const dataMap = new Map(groupedData[farm].map(item => [item[this.timestampField], item['max_production'] - item['min_production']]));
        const data = timestamps.map(timestamp => [timestamp, dataMap.get(timestamp) || null]); // Use null for missing data
        
    
      return {
        name: `${farm} Max`,
        type: 'line',
        connectNulls: false,
        showSymbol: false,
        lineStyle: {
            opacity: 0
        },     
        areaStyle: {
            color: '#ccc',
            opacity: 0.2
        },
        stack: 'confidence-band',
        symbol:'none',
        data: data,
      };    
  });
  },
  addMinSeries(groupedData, timestamps){    

    return Object.keys(groupedData).map(farm => {
      const dataMap = new Map(groupedData[farm].map(item => [item[this.timestampField], item['min_production']]));
      const data = timestamps.map(timestamp => [timestamp, dataMap.get(timestamp) || null]); // Use null for missing data      
      return {
        name: `${farm} Min`,
        type: 'line',        
        connectNulls: false,
        showSymbol: false,        
        stack: 'confidence-band',
        lineStyle: {
          opacity:0
          //color:'red'
         
        },
        symbol:'none',        
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