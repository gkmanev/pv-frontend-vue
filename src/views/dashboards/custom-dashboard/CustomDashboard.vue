<template>
  <div>
   
    <b-row class="mb-4"> 
      <b-col cols="12">            
        <RangeComponent @filter="handleFilter" :isVisible="false" />          
      </b-col>      
    </b-row>
    <b-row>
        <b-col cols="12">
            <MeasurementData />
        </b-col>
    </b-row>
    <b-row>
        <b-col cols="12" class="mt-4">
            <MapCard />            
        </b-col>     
    </b-row>
    <b-row>
      <b-col cols="12" class="mt-4">
          <TableChartSystem />          
      </b-col>     
    </b-row>

  </div>  
  
  </template>
  <script>
  // -----------------------------------------
  // Import Components Here
  // -----------------------------------------

  import { mapState } from 'vuex';
  // import AwesomeCards from "../dashboard-components/awesome-cards/AwesomeCards";  
  import RangeComponent from "../dashboard-components/range-component/RangeComponent";
  // import InvertorPower from "../dashboard-components/echarts/InvertorPower.vue";
  // import PriceChart from "../dashboard-components/echarts/PriceChart";
  // import TableChart from "../dashboard-components/echarts/TableChart";

  // import GridNodes from "../dashboard-components/echarts/GridNodes";
  import MapCard from '../dashboard-components/echarts/MapCard.vue';
 //import StateOfCharge from '../dashboard-components/echarts/StateOfCharge.vue';
  import MeasurementData from '../dashboard-components/echarts/MeasurementData.vue';
  import TableChartSystem from '../dashboard-components/echarts/TableChartSystem.vue';
  //import MeasurementDataDayAhead from '../dashboard-components/echarts/MeasurementDataDayAhead.vue';
//  import PowerFlow from '../dashboard-components/echarts/PowerFlow.vue';

// import RevenueChart from "../dashboard-components/echarts/RevenueChart.vue";

  //import HighChartTest from '../dashboard-components/echarts/HighChartTest.vue';

  


  
  // -----------------------------------------
  // Export Here
  // -----------------------------------------
  export default {
    name: "ModernDashboard",
    data: () => ({
      title: "ModernDashboard",
      show:false,
      updateTodayData: [],
      updateYearData:[],
      updateMonthData: [],
      // Month Table
      month1: 0,
      monthoptions1: [
        { text: "Monthly", value: 0 },
        { text: "Daily", value: 1 },
        { text: "Weekly", value: 2 },
        { text: "Yearly", value: 3 },
      ],
      // top selling
      selling1: 0,
      sellingoptions1: [
        { text: "Monthly", value: 0 },
        { text: "Daily", value: 1 },
        { text: "Weekly", value: 2 },
        { text: "Yearly", value: 3 },
      ],
      // weather report
      weather1: 0,
      weatheroptions1: [
        { text: "Today", value: 0 },
        { text: "Weekly", value: 1 },
      ],
    }),
    components: {
    // AwesomeCards,    
    RangeComponent,
    //InvertorPower,
    //HighChartTest,
    //PriceChart,
    TableChartSystem,   
    MapCard,
    //GridNodes,
    //StateOfCharge,
    MeasurementData,
    //MeasurementDataDayAhead
    //PowerFlow,   
    //RevenueChart
    //LineChart
    
},
    methods: {
        handleFilter(period) {
        // Perform API request based on the selected period (today, week, month)
        // Update your content based on the API response
        console.log(`Filtering content for ${period}`);
        // Make API request here and update content
        },


        


  },
    mounted() {
        // Trigger "today" filter when the component is created
        console.log()
        this.handleFilter('2024');
      
    },
    computed: {
      ...mapState(['dateRange']),  
    },

//     watch: {     
//       dateRange(newRange, oldRange) {
//         if (newRange !== oldRange) {
//           if(this.dateRange === 'today' || this.dateRange === 'dam'){
//             this.fetchToday()
//           } 
//           else if (this.dateRange === 'month'){
//             this.fetchMonth()
//           }    
//           else if(this.dateRange === 'year'){
//             this.fetchYear()
//           }
              
//       }
//    },
   
//  },



    };
  </script>

<style scoped>
.widget-container {
  display: flex;
  justify-content: space-between; /* Align items next to each other */
  max-height: 220px;
}
.battery-chart{
  max-width: 120px;

}
</style>