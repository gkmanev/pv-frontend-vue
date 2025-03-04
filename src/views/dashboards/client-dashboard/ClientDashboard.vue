<template>

  <div>
    <b-row>     
        <b-col cols="12">            
            <SelectComponent />
        </b-col>
    </b-row>
    <b-row>
        <b-col class="mt-5" cols="12">            
            <RangeComponent class="mb-4" :isVisible="true" />          
        </b-col>
    </b-row>
    <b-row v-if="isDevSelected">
      <b-col cols="12" class="mt-4">
        <b-card>
          <MeasurementData />          
        </b-card>
      </b-col>    
    <!-- <b-row v-if="isDevSelected"> -->
      <b-col cols="12" class="mt-4">
        <b-card>
          <WeatherDataChart />
        </b-card>
      </b-col>
      <!-- <b-col cols="12" class="mt-4">
        <b-card>
          <OpenMeteoWeatherChart />
        </b-card>
      </b-col> -->
    </b-row>
     
  </div>
  </template>
  <script>
  // -----------------------------------------
  // Import Components Here
  // -----------------------------------------
  
  import SelectComponent from "../dashboard-components/select-component/SelectComponent";
  import RangeComponent from "../dashboard-components/range-component/RangeComponent";  
  import MeasurementData from "../dashboard-components/echarts/MeasurementData.vue";
  import { mapState } from 'vuex';
  import WeatherDataChart from "../dashboard-components/echarts/WeatherDataChart.vue";
  //import OpenMeteoWeatherChart from "../dashboard-components/echarts/OpenMeteoWeatherChart.vue";
  
  // -----------------------------------------
  // Export Here
  // -----------------------------------------
  export default {
    name: "ClientDashboard",
    data: () => ({
      title: "ClientDashboard",
      isDevSelected: false      
      
    }),
    components: {  
   
    SelectComponent,    
    RangeComponent,  
    MeasurementData,
    WeatherDataChart,
    //OpenMeteoWeatherChart
    
},

    mounted() {
      this.checkSelectedDev()  
    },

  computed: {
      ...mapState(['selectedDev', 'dateRange']),
    },
  

  methods: {

    checkSelectedDev(){
      if(this.selectedDev){
        this.isDevSelected = true
      }
      else{
        this.isDevSelected = false
      }
    }, 

  },
  watch: {
    selectedDev(newDev, oldDev) {
      if (newDev !== oldDev) {        
        this.checkSelectedDev()
      }
    },
    dateRange(newRange, oldRange) {
        if (newRange !== oldRange) {    
            this.checkSelectedDev()
      }
   },

  },

    };
  </script>

<style scoped>

.widget-container {
  display: flex;
  justify-content: space-between; /* Align items next to each other */
  max-height: 220px;
}
</style>