<template>
    <b-card class="mb-4">
      <div class="mt-4">
        <v-chart class="chart" height="250" :option="option" @mouseover="getDataSubset" autoresize />
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
    GridComponent
  } from 'echarts/components'
  import { CanvasRenderer } from 'echarts/renderers'
  
  use([
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    ToolboxComponent,
    GridComponent,
    LineChart,
    CanvasRenderer
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

//   var toolTipSet = function (params) {
//   let chartdate = new Date(params[0].value[0])
//   let month = chartdate.getMonth()+1
//   month = ("0"+month).slice(-2)
//   let day = chartdate.getDate()
//   day = ("0"+day).slice(-2)
//   let hours  = chartdate.getUTCHours()
//   hours = ("0"+hours).slice(-2)
//   let mins = chartdate.getMinutes()
//   mins = ("0" + mins).slice(-2)
//   let formatTime = day+"."+month+"/"+hours+":"+mins
//   var vals = params.reduce((prev, curr) => prev + '<li style="list-style:none">' + curr.marker + curr.seriesName + "&nbsp;&nbsp;" + curr.value[1] + "</li>", "");

//   return formatTime + vals;
//   }

  export default {
    name: "PriceChart",
    components: {
      VChart
    },
  
    data() {
      return {
        currTime:'',
        currDate:'',
        currYear:'',
        currMonth:'',
        monthLenth:'',
        created_date_or_created: 'created_date',
        //option
        option: {
          title: {
          text: 'DAM Price',    
          left: 'center',   
          textStyle: {
            fontSize: 16,
            color:'#b2b9bf',
            fontFamily: 'Arial',
            fontWeight: 'normal'
          },
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
            // left: '5%',
            // right: '1%',
            bottom: '35%',
            containLabel: false,
            
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

      //top: 0,
      height: 20,      
      handleSize: "75%",
      // handleStyle: {
      //          color: "#9a9a9a",
      //          borderColor: "rgba(255, 255, 255, 1)",
      //          opacity: 0.5
      //  },

      show: true,

      // backgroundColor:'#9a9a9a',
        //  fillerColor: "rgba(255, 255, 255, 0.1)",
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
            name: "price",
            smooth: true,
            step: 'middle',
            clip: true,
            lineStyle:{
              width:1
            },

            itemStyle: {
                color: '#39c449'
            },
            sampling: 'average',
            data: [],
            type: 'line',           
            
        },
        {
            name: "price",
            smooth: false,
            step: 'middle',
            lineStyle:{
                type: 'dotted',
                width: 1
            },
            itemStyle: {
                color: '#39c449'
            },
            sampling: 'lttb',
            data: [],
            type: "line",
        },
    ]
  }
        //end option
      };
    },
  
    mounted() {
      this.fetchData();
    },
  
    computed: {
      ...mapState(['dateRange'])
    },
    watch: {
      
      dateRange(newRange, oldRange) {
        if (newRange !== oldRange) {
          this.option.series[0].data = []
          this.option.series[1].data = []
          this.fetchData();
        }
      }
    },

    created (){
        this.getCurrTime()
        let date = this.currDate.split("T")[0].split("-")
        let year = parseInt(date[0])
        let month = parseInt(date[1])   
        this.monthLenth = this.daysInMonth(month,year)
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
                            '<span style="color: gray;">Price: </span><span style="color: white;">' + params.data[1] + '</span>'  +
                          '</li>' +
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
  
  
    async fetchData() {
        const queryParam = this.dateRange;
        const start = this.currDate;
        const end = this.currTime;
        const tomorrow = new Date(new Date(start).setDate(new Date(start).getDate() + 1)).toISOString();
        

        // Configuration based on dateRange
        if (queryParam === 'today') {
            //this.configureChartForToday(); // Extract chart configuration to a method for better readability

            const url1 = `http://85.14.6.37:16455/api/price/?timestamp=&start_date=${start}&end_date=${end}`;
            console.log(url1)
            const url2 = `http://85.14.6.37:16455/api/price/?timestamp=&start_date=${end}&end_date=${tomorrow}`;
            console.log(url2)
            try {
                const [responseOne, responseTwo] = await Promise.all([
                    axios.get(url1),
                    axios.get(url2)
                ]);
                
                this.processResponseData(1, responseOne.data); // Assuming series 1 is for the first set of data
                this.processResponseData(2, responseTwo.data); // Assuming series 2 is for the second set of data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        else{
          const url = `http://85.14.6.37:16455/api/price/?date_range=${queryParam}`;
          axios.get(url)
                 .then(response => response.data.forEach(el=>{
                    this.option.series[0].data.push([el.timestamp,el.value])
                 }))
                .catch(errors => {
                    console.log(errors)
                })
        }
        this.setAxisTimeRange()
    },
    getCurrTime(){
        let date = new Date();
        date.setDate(date.getDate());
        let y = date.getFullYear()
        this.currYear = y
        let thisMonth = date.getMonth()+1
        thisMonth = ('0' + thisMonth).slice(-2);
        this.currMonth = thisMonth
        let toDay = date.getDate()
        toDay = ('0' + toDay).slice(-2);
        let currHour = date.getHours()
        currHour = ('0' + currHour).slice(-2);
        let currMin = ":00:00Z"
        let now = y+"-"+thisMonth+"-"+toDay+"T"+currHour+currMin
        this.currTime = now
        this.currDate = y+"-"+thisMonth+"-"+toDay+"T"+"00:00:00Z"

   },

   daysInMonth (month, year) {
       return new Date(year, month, 0).getDate();
   },


    // Example of extracting data processing into a separate method
    processResponseData(seriesIndex, priceData) {
        if(seriesIndex == 1){
            priceData.forEach(el =>{
            el = [el.timestamp,el.value]
            this.option.series[0].data.push(el)
            
            })     
        }
        else{
            priceData.forEach(el =>{
            el = [el.timestamp,el.value]
            this.option.series[1].data.push(el)
            })   

        }
      }        
        // Make an API call to fetch data      
    
      }
    };
  

  
  
  </script>
  
  <style scoped>
  .chart {
    height: 450px;
  }
  </style>