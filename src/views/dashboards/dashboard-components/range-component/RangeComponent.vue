<template>
  <div>
    <b-row>
      <b-col cols="auto">
      <b-button-group>
        <!-- <b-button 
          v-if="isVisible" 
          @click="filterContent('dam')" 
          :class="{ 'active': selectedPeriod === 'dam' }"
        >
          Day Ahead
        </b-button> -->
        <!-- <b-button v-if="isVisible"
          @click="filterContent('all')" 
          :class="{ 'active': selectedPeriod === 'all' }"
        >
          All
        </b-button> -->
        <b-button 
          @click="filterContent('y-2')" 
          :class="{ 'active': selectedPeriod === 'y-2' }"
        >
          2023
        </b-button>
        <b-button 
          @click="filterContent('y-1')" 
          :class="{ 'active': selectedPeriod === 'y-1' }"
        >
          2024
        </b-button>
        <b-button 
          @click="filterContent('ytd')" 
          :class="{ 'active': selectedPeriod === 'ytd' }"
        >
          YTD
        </b-button>
        <b-button v-if="isVisible"
          @click="filterContent('7d')" 
          :class="{ 'active': selectedPeriod === '7d' }">
          7 Days
        </b-button>
      </b-button-group>   
    </b-col>
    <b-col v-if="isVisible" cols="auto">
      <b-form-datepicker 
        id="datepicker-buttons"
        v-model="selectedDate"
        @input="handleDateChange"
        today-button
        reset-button
        close-button
        locale="en"
        class="me-2"
      ></b-form-datepicker>
      </b-col>
      <b-col v-if="isVisible" cols="auto">
      <b-form-select 
        id="number-picker"
        @input="selectNumberChange"
        v-model="selectedNumber"
        :options="[1, 2, 3, 4, 5]"
        class="me-2"
      ></b-form-select>
      </b-col>
      <b-col v-if="isVisible" cols="auto">
        <b-button @click="confidance('checking')" >         
          Check Confidance
        </b-button>
      </b-col>

  </b-row>
   
  </div>
</template>

  
  <script>
  import { mapActions } from 'vuex';
  import { mapState } from 'vuex';

  export default {
    props:['isVisible'],
    data() {
      return {        
        selectedPeriod: 'all',  
        selectedDate: null,
        selectedNumber: null,      
      };
    },

    computed: {
      ...mapState(['dateRange']),    
  
    },
    mounted() {  
    
      this.selectedPeriod = this.dateRange
    },

    watch: {      
      dateRange(newRange, oldRange) {
        if (newRange !== oldRange) {
            this.selectedPeriod = newRange       
        }
      }
    },
  
    methods: {

      ...mapActions(['updateDateRange', 'updateConfidance']),
      

      filterContent(period) {        
        this.selectedPeriod = period       
        this.updateDateRange(period)              
      },
      handleDateChange(date) {
        this.updateConfidance(false);
        this.selectedDate = date;   
        if(date && this.selectedNumber){
          let startPeriod = date;
          //add number of days to the selected date
          let endPeriod = new Date(startPeriod);
          endPeriod.setDate(endPeriod.getDate() + this.selectedNumber);
          this.rangeString = `start_date=${startPeriod}&end_date=${endPeriod.toISOString().slice(0, 10)}`;
         
          this.updateDateRange(this.rangeString);
          
        }        
      },
      selectNumberChange(number) {
        this.selectedNumber = number;
        if (this.selectedDate && number)
        {
          let startPeriod = this.selectedDate;
          //add number of days to the selected date
          let endPeriod = new Date(startPeriod);
          endPeriod.setDate(endPeriod.getDate() + number);
          this.rangeString = `start_date=${startPeriod}&end_date=${endPeriod.toISOString().slice(0, 10)}`;
          this.updateDateRange(this.rangeString);
          
        }       
        
      },  
      confidance(){    
        this.updateConfidance(true)    
      }


    },
  };
  </script>
  
  <style scoped>
   button.btn.btn-secondary.active{
    background-color: #272b34;
   }
   .btn-forecast {   
    background: #8d5cf5;
    color: #ffffff;
  } 

  .btn-forecast:hover{
    background: #a57efa;
  }

  </style>