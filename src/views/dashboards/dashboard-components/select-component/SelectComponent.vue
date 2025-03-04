<template>
    <div>
      <b-row>
        <b-form-select v-model="selected" @change="setSelected(selected)" :options="options"></b-form-select>      
      </b-row>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  import { mapState } from 'vuex';
  export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Please select an option' }
        ],
      }
    },
    computed: {
      ...mapState(['all_devs', 'selectedDev'])     
    }, 
    mounted() {
      this.populateOptions();
      if (this.selectedDev) {
        this.selected = this.selectedDev;
        const selectedOption = this.options.find(option => option.value === this.selectedDev);
        if (selectedOption) {
          this.options[0] = { value: this.selectedDev, text: this.selectedDev };
        }
      }
    },
    methods: {
      ...mapActions(['updateSelected']),
      setSelected(sel) {        
        this.updateSelected(sel);
      },
      populateOptions() {    
        
        const devOptions = this.all_devs.map(dev =>         
        ({                    
          value: dev.farm, 
          text: dev.farm,                              
        }));   
        
        devOptions.forEach(el => {          
          this.options.push(el);       
        });        
      },
    },
  }
  </script>
  
  <style scoped>
  .custom-select {
    max-width: 307px;
}
  </style>