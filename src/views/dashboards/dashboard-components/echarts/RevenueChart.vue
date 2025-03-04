<template>
    <b-card class="mb-4">
      <div class="mt-4">
        <v-chart class="chart" height="250" :option="option" autoresize />
      </div>
    </b-card>
  </template>
  
  <script>
  import * as echarts from 'echarts';
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
  
  
  export default {
    name: "RevenueChart",
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
        
        //option
        option: {
          title: {
          text: 'NET Revenue',    
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
            formatter: (params) => {
                    if (params && params.length) {
                    let tooltipContent = `<div class="tooltip-set" style="text-align:left; padding:0; margin:0; background-color: black; border-radius: 8px;">`;
                    let localTime;
                    // Loop over each series data point
                    params.forEach(param => {
                        if (param.seriesName === 'Deviation') {
                            tooltipContent += `<li>
                            <span style="color: gray;">Deviation: </span>
                            <span style="color: white;">${param.data[1].toFixed(2)}</span>
                            </li>`;
                        }
                      const utcTime = new Date(param.data[0]);
                      const hours = utcTime.getHours().toString().padStart(2, '0');
                      const minutes = utcTime.getMinutes().toString().padStart(2, '0');
                      const day = utcTime.getDate().toString().padStart(2, '0');
                      const month = (utcTime.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
                      const year = utcTime.getFullYear();
                        // Construct time in the desired format: 13:13 | 01.10.2024
                      localTime = `${hours}:${minutes} | ${day}.${month}.${year}`;

                      if(parseInt(hours) == this.removeDoublePriceTitles()){                        
                        if(param.seriesName === 'price '){                      
                 
                           tooltipContent = ``          
                          
                        }
                      }
                        tooltipContent += `
                        <div style="vertical-align: middle; color: white; padding-left: 10px;">
                            ${param.seriesName}
                        </div>
                        <div style="padding-right:15px;padding-left:15px;padding-top:3px;padding-bottom:3px;margin-bottom:0;background-color: #272b34;border-bottom-left-radius: 8px;border-bottom-right-radius: 8px;">
                            <ul style="list-style-type: none; margin: 0; padding-left: 0;">
                            <li>
                                <div class="color-point" style="width: 10px; height: 10px; border-radius: 50%; display: inline-block; margin-right: 5px; background-color: ${param.color};"></div>
                                <span style="color: gray;"></span><span style="color: white;">${param.data[1]}</span>
                            </li>
                            <li>
                                <span style="color: gray;">Time: </span><span style="color: white;">${localTime}</span>
                            </li>
                            </ul>
                        </div>`;
                    });

                    tooltipContent += `</div>`;
                    return tooltipContent;
                    }
                    return ''; // Return an empty string if there's no data to show
                }
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
          data:[]
        
      },
    
    yAxis: [
    {
        type: 'value',
        splitLine: { show: false },
        name: 'Revenue',
        position: 'left',
    },
    {
        type: 'value',
        splitLine: { show: false },
        name: 'Deviation',
        position: 'right',
    }
      
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
        name: "Actual",
           
        lineStyle:{
            width:1
        },      
        data: [],
        type: 'line',       
        itemStyle: {
                color: 'yellow',
                opacity:0,
                width: 1
            },    
      
    },
    {   
        name: "Actual",
        lineStyle:{
            width:1,
            type:'dotted'
        },  
        data: [],
        type: 'line',  
        itemStyle: {
                color: 'yellow',
                opacity:0,
                width: 1
            },             
      
    },
    {
        name: "Plan",
           
        lineStyle:{
            width:1
        },      
        data: [],
        type: 'line',       
        itemStyle: {
                color: 'orange',
                opacity:0,
                width: 1
            },    
      
    },
    {   
        name: "Plan",
        lineStyle:{
            width:1,
            type:'dotted'
        },  
        data: [],
        type: 'line',  
        itemStyle: {
                color: 'orange',
                opacity:0,
                width: 1
            },             
      
    },
    {
        name: "Deviation",
        type: 'line',
        lineStyle: { width: 1 },
        itemStyle: { color: 'green', opacity: 0, width: 1 },
        areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: 'rgba(255, 0, 0, 0.8)' },
        { offset: 1, color: 'rgba(255, 0, 0, 0.1)' }
        ])
  },
        data: []
    }
   
      

       
    ]
  }
        //end option
      };
    },
  
    mounted() {
      this.fetchData();
      this.removeDoublePriceTitles();
    },
  
    computed: {
      ...mapState(['dateRange', 'zoomData', 'selectedDev'])
    },
    watch: {

        zoomData(newZoom, oldZoom){
            if (newZoom !== oldZoom){
            const start = newZoom[0]
            const end = newZoom[1]
            if(this.dateRange !== 'year'){          
                this.option.dataZoom[0].start = start
                this.option.dataZoom[0].end = end
            }
            }

        },
        
        dateRange(newRange, oldRange) {
            if (newRange !== oldRange) {
            this.option.series[0].data = []         
            this.fetchData();
            }
        },
        selectedDev(newDev, oldDev) {
            if(newDev !== oldDev){
            this.option.series[0].data = []         
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

        removeDoublePriceTitles(){
            const today = new Date;
            return today.getHours()

        },
        lastRouteSegment() {
            const pathArray = this.$route.path.split('/');           
            return pathArray.pop() || pathArray[pathArray.length - 1]; // This handles non-trailing slash URLs
        },
        
  
     
  
        setAxisTimeRange() {
            //const today = new Date(Date.UTC(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate()));
            const today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
            let start = new Date(today); // Initialized with today's date            
            let end = new Date(today);   // Initialized with today's date
    
            if (this.dateRange === 'today') {
                end.setHours(23, 59, 59); // Set end time to the end of the day                
                    this.option.xAxis.splitNumber = 24; // 24 hours in a day              
                    this.option.dataZoom[0].start = 0;
                    this.option.dataZoom[0].end = 100;
                    this.option.dataZoom[0].zoomLock = false;
            } else if (this.dateRange === 'dam'){
                start.setHours(0, 0, 0); // Start of today at 00:00
                end.setDate(end.getDate() + 2); // Move to the day after tomorrow
                end.setHours(1, 0, 0); // Set end time to 01:00 of the day after tomorrow             
                this.option.xAxis.splitNumber = 24; // 48 half-hour intervals in 24 hours
                this.option.dataZoom[0].start = 0;
                this.option.dataZoom[0].end = 100;
                this.option.dataZoom[0].zoomLock = false;
            }
            else if (this.dateRange === 'month') {
                start.setDate(1); // Start of the month
                end.setMonth(end.getMonth() + 1, 0); // Last day of the current month
                end.setHours(23, 59, 59); // Set end time to the end of the day
                this.option.xAxis.splitNumber = 12;
                this.option.dataZoom[0].start = 0;
                this.option.dataZoom[0].end = 100;
                this.option.dataZoom[0].zoomLock = false;              
                this.option.xAxis.splitNumber = end.getDate(); // Number of days in the month
            } else if (this.dateRange === 'year') {
                start.setMonth(0, 1); // Start of the year (January 1st)
                    end.setFullYear(end.getFullYear(), 11, 31); // Last day of the year (December 31st)
                    end.setHours(23, 59, 59); // Set end time to the end of the day
                
                    this.option.xAxis.splitNumber = 12; // 12 months in a year
                    // Adjust the zoom window for one month (approx 8% of the year)
                    // Calculate the zoom window for the current month
                    const currentMonth = today.getMonth();
                    const totalMonths = 12;

                    // Calculate the percentage range for the current month
                    const startPercentage = ((currentMonth / totalMonths) * 100) - 1;
                    const endPercentage = ((currentMonth + 1) / totalMonths) * 100;

                    this.option.dataZoom[0].start = startPercentage;
                    this.option.dataZoom[0].end = endPercentage;
            }
    
            this.option.xAxis.min = start.getTime();                
            this.option.xAxis.max = end.getTime();
      },
  
  
    async fetchData() {
        this.option.series[0].data = []
        this.option.series[1].data = []
        this.option.series[2].data = []
        this.option.series[3].data = []

        let queryParam = this.dateRange;
    

        // Configuration based on dateRange
        if (queryParam === 'today' || queryParam === 'dam') {  
            let url1 = ``
            let urlForecast = ``
            if (this.lastRouteSegment() === 'entra'){
                url1 = `http://85.14.6.37:16543/api/accumulated-flow-price/?date_range=today`;            
                urlForecast = `http://85.14.6.37:16543/api/accumulated-flow-price/?date_range=today&forecasted_price=true`;   
            }
            else if(this.lastRouteSegment() === 'client'){
                url1 = `http://85.14.6.37:16543/api/accumulated-flow-price/?date_range=today&devId=${this.selectedDev}`;            
                urlForecast = `http://85.14.6.37:16543/api/accumulated-flow-price/?date_range=today&devId=${this.selectedDev}&forecasted_price=true`; 

            }                    
            try {
                const [responseOne, responseTwo] = await Promise.all([
                    axios.get(url1),
                    axios.get(urlForecast)
                ]);               
                this.processResponseData(responseOne.data, responseTwo.data)              
            

            } catch (error) {
                console.error('Error fetching data:', error);
            }
            
           
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
    processResponseData(data, forecastData) {

            let actualData = [];
            let planData = [];
                
            data.forEach(el =>{
                let date = new Date(el.timestamp);
                let now = new Date()
                date = new Date(date.getTime() - (2 * 60 * 60 * 1000));      
                
                const seriesPoint = [date.toISOString(), el.revenue*(-1)]
                actualData.push(seriesPoint);
                if (date <= now){
                    
                    this.option.series[0].data.push(seriesPoint) 
                }
                else{
                    this.option.series[1].data.push(seriesPoint) 
                }
            })     
            forecastData.forEach(el =>{
                let date = new Date(el.timestamp);
                let now = new Date()
                date = new Date(date.getTime() - (2 * 60 * 60 * 1000));               
                
                const seriesPoint = [date.toISOString(), el.revenue*(-1)]
                planData.push(seriesPoint);
                if (date <= now){
                    
                    this.option.series[2].data.push(seriesPoint) 
                }
                else{
                    this.option.series[3].data.push(seriesPoint) 
                }
            })    
            // Calculate deviation
            let deviationData = actualData.map((actualPoint, index) => {
                if (planData[index]) {
                return [actualPoint[0], actualPoint[1] - planData[index][1]];
                }
                return null;
            }).filter(point => point !== null);
           
            this.option.series[4].data = deviationData; 
        

      },



   


   
      }
    };
  

  
  
  </script>
  
  <style scoped>
  .chart {
    height: 450px;
  }
  </style>