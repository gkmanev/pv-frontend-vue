<template>
  <b-card class="mb-4 line-chart">
    <div class="mt-4">
      <v-chart class="chart" height="450" :option="option" @mouseover="getDataSubset" autoresize/>
    </div>
  </b-card>
</template>

<script>

import VChart from "vue-echarts";
import axios from 'axios';
import { mapState } from 'vuex';
import { use } from 'echarts/core'
import { LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GridComponent,
  DataZoomComponent,

} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'


use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  DataZoomComponent,
  
])

var timeLineSet = function(value) {
  // Create a Date object from the UTC date string
  let date = new Date(value);

  // Get UTC hours and minutes
  let hours = date.getUTCHours();
  let minutes = date.getUTCMinutes();

  // Format hours and minutes to ensure two digits
  hours = ("0" + hours).slice(-2);
  minutes = ("0" + minutes).slice(-2);

  return `${hours}:${minutes}`;
}

var tooltipDisplay = ''

export default {
  name: "Temperature",
  components: {
    VChart
  },

  data() {
    return {
      lat: null,
      long: null,
      option: {
        title: {
          text: 'Temperature', 
          left: 'center',   
          textStyle: {
            fontSize: 16,
            color:'#b2b9bf',
            fontFamily: 'Arial',
            fontWeight: 'normal'
          },   

        },
        legend: {
          orient: 'horizontal',
          padding:[-500,100,0,0],
          //selected:{'sm-0002':false,'sm-0004':false,'sm-00024':false,'sm-0020':false,'sm-0010':false,'sm-0011':false,'sm-0015':false,'sm-0030':false,'sm-0016:':false,'sm-0025':false,'sm-0017':false,'sm-0018':false,'sm-0008':false,'sm-0009':false}
        },
        tooltip: {
          backgroundColor: '', // Set your desired background color
          trigger: 'axis',
          borderWidth: 0, // Set border width to 0 to remove the border
          shadowBlur: 0, // Set shadow blur to 0 to remove the shadow
          shadowOffsetX: 0, // Set shadow offset X to 0
          shadowOffsetY: 0, // Set shadow offset Y to 0
          shadowColor: 'transparent', // Set shadow color to transparent
          formatter: () => {
              return tooltipDisplay;
          },
         
        
        },
 

  grid: {
    bottom: '25%',
    containLabel: false
  },
  xAxis: 
    {
      type: 'time',
      axisLabel: {
        rotate:40,
        margin:20,
        textStyle: {
            color: '#9a9a9a'
        },
    },
    axisLine: {
      show: true,
    },

      boundaryGap: false,    
      
    },
  
  yAxis: [
    {
      type: 'value',
      splitLine: {
        show: false // Set this property to false to hide horizontal grid lines
      }
    },
    
  ],
  dataZoom: [{
      height: 20,      
      handleSize: "75%",
      show: true,
      dataBackground: {
        areaStyle: {
          color: "#9a9a9a"
        }
      },
      start: 0,
      end: 100
      },
     ],
  
  series:[
  {
            name: "Temperature",
            smooth: true,            
            
            lineStyle:{
              width:1
            },
            itemStyle: {
                color: '#39c449'
            },
            sampling: 'average',
            data: [],
            type: 'line',
            showSymbol: false,           
            
        },
  ]
}
      //end option
    };
  },

  mounted() {    
    const foundObject = this.all_devs.find(obj => obj.id === this.selectedDev); 
    if (foundObject)
    {
      this.lat = foundObject.lat
      this.long = foundObject.long
    }    
    this.fetchData();
  },

  computed: {
    ...mapState(['dateRange','selectedDev', 'all_devs']),    

  },
  watch: {
 
    
    dateRange(newRange, oldRange) {
      if (newRange !== oldRange) {
        this.option.series[0].data = []
        this.fetchData();
      }
    },
    selectedDev(newDev, oldDev) {
      if (newDev !== oldDev) {
        this.option.series[0].data = []
        const foundObject = this.all_devs.find(obj => obj.id === newDev);        
        this.lat = parseInt(foundObject.lat)        
        this.long = parseInt(foundObject.long)        
        this.fetchData();
      }
    },   

  },

  methods: {
   
    getDataSubset(params) {
      

      if(params.seriesType == 'line'){
        if (params.data){
          
          tooltipDisplay = '<div class="tooltip-set" style="text-align:left; padding:0; margin:0; background-color: black; border-radius: 8px;">' +
                    '<div style="vertical-align: middle; color: white; padding-left: 10px;">' + params.seriesName + '</div>' +
                    '<div style="padding-right:15px;padding-left:15px;padding-top:3px;padding-bottom:3px;margin-bottom:0;background-color: #272b34;border-bottom-left-radius: 8px;border-bottom-right-radius: 8px;">' +
                      '<ul style="list-style-type: none; margin: 0; padding-left: 0;">' +
                        '<li>' +
                          '<div class="color-point" style="width: 10px; height: 10px; border-radius: 50%; display: inline-block; margin-right: 5px; background-color: ' + params.color + ';"></div>' +
                          '<span style="color: gray;">Temperature: </span><span style="color: white;">' + params.data[1] + '</span>'  +
                        '</li>' +
                        '<li>' +
                          '<span style="color: gray;">Time: </span><span style="color: white;">' + params.data[0].split(":00Z")[0] + '</span>' +
                        '</li>'+
                      '</ul>' +
                    '</div>' +
                  '</div>';
        }
      }   

    },

    setHourlyAxisLabels() {
      // Update xAxis axisLabel formatter and interval
      this.option.xAxis.axisLabel = {
        ...this.option.xAxis.axisLabel, // Preserve existing axisLabel properties
        formatter: function(value) {
          const date = new Date(value);
          return `${date.getHours()}:00`;
        }
      };

      this.option.xAxis.interval = 3600 * 1000; // One hour in milliseconds

    },  

    setAxisTimeRange() {
        const todayUTC = new Date(Date.UTC(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate()));
        let start = new Date(todayUTC); // Initialized with todayUTC
        let end = new Date(todayUTC); // Initialized with todayUTC

        if (this.dateRange === 'today') {
          end.setUTCHours(23, 0, 0);
          this.option.xAxis.axisLabel.formatter = timeLineSet//'{HH}:{mm}'
          this.option.xAxis.splitNumber = 23
        } else if (this.dateRange === 'month') {
          start.setUTCDate(1); // Start of the month
          end.setUTCMonth(end.getUTCMonth() + 1, 0); // Last day of the month
          end.setUTCHours(23, 0, 0);
          this.option.xAxis.axisLabel.formatter = []//'{HH}:{mm}'
          this.option.xAxis.splitNumber = 30
        } else if (this.dateRange === 'year') {
          start.setUTCMonth(0, 1); // Start of the year
          end.setUTCFullYear(end.getUTCFullYear() + 1, 0, 0); // Last day of the year
          end.setUTCHours(23, 0, 0);
          this.option.xAxis.axisLabel.formatter = []//'{HH}:{mm}'
          this.option.xAxis.splitNumber = 12
        }

        // Update xAxis min and max properties
        this.option.xAxis.min = start.getTime();
        this.option.xAxis.max = end.getTime();
        // Additional logic to update the chart as necessary
    },


    fetchData() {    

      if(this.lat && this.long){
      let url = `http://85.14.6.37:16456/api/weather/?date_range=${this.dateRange}&lat=${this.lat}&long=${this.long}`    
      console.log(url)
      if(url){
        
        axios
        .get(url)
        .then((response) => response.data.forEach(el => {
          this.option.series[0].data.push([el.timestamp, el.temperature])
          this.setAxisTimeRange()
        })
        
        
        
        )      
        .catch((error) => console.log(error))      
      }
    }   
  }
  }

};


</script>

<style scoped>



.line-chart {
  height: 480px;
}
.chart {
  height: 400px;
}
</style>