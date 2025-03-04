<template>
    <div class="ml-auto">
            <b-button-group>
              <b-button @click="filterContent('today')" :class="{ 'active': selectedPeriod === 'today' }">Today</b-button>
              <b-button @click="filterContent('month')" :class="{ 'active': selectedPeriod === 'month' }">Month</b-button>
              <b-button @click="filterContent('year')"  :class="{ 'active': selectedPeriod === 'year' }">Year</b-button>
            </b-button-group>
          </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        selectedPeriod: 'today',
      };
    },
    methods: {

      ...mapActions(['updateDateRange']),

      filterContent(period) {
        this.selectedPeriod = period
        this.updateDateRange(period)
       
        //this.$emit('filter', period);          
      },
    },
  };
  </script>
  