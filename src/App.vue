<template>
  <div id="main-wrapper">
    <router-view />
  </div>
</template>

<script>

import axios from 'axios';
import { pvAssets } from './ProjectMaping';
import { mapActions } from 'vuex';
export default {  
  name: 'App',
  data() {
    return {
      all: [],        
    }
  },
  components: {
    
  },
  created (){     
    this.all = pvAssets;
    this.allDevsCreation(this.all); 

    this.fetchApi();
    this.fetchToCheckLatestComersialData();
  },
  

  mounted(){
           
  },
  methods:{
    ...mapActions(['allDevsCreation']),

    fetchToCheckLatestComersialData() {
      let today = new Date();
      let yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      const start_date = yesterday.toISOString().split('T')[0];
      const end_date = today.toISOString().split('T')[0];      
      const url = `http://209.38.208.230:8000/api/pvmeasurementdata/?start_date=${start_date}&end_date=${end_date}`;
      
      axios.get(url)
      .then(response => {        
        if(response.data.length > 0){
          this.checkLatestComercial(response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    },
      

    fetchApi() {
      let responseData = [];
      axios.get('http://209.38.208.230:8000/api/last-n-unique/')
      .then(response => {     
        responseData = response.data;       
      })
      .catch(error => {
      console.error('Error fetching data:', error);
      })
      .finally(() => {
        this.createAllDevs(responseData);
      });
    },
    createAllDevs(data) {  
      const mergedData = pvAssets.map(item => {
      const matchedData = data.find(c => c.installation_name === item.farm);
        return {
        ...item,
        power: matchedData ? matchedData.signal_value : null, // Handle undefined matchedData
        online: matchedData ? "online" : "offline" 
        };
        });    
    this.all = mergedData;
    this.allDevsCreation(this.all);
    },

    checkLatestComercial(data) { 
      
      this.all = this.all.map(item => {
        const matchedData = data.find(c => c.farm === item.farm);       

        return {
          ...item,
          commercial: matchedData && matchedData.production !== null ? "updated" : "not-updated"
        };
      });

      this.allDevsCreation(this.all);
    },

    },

}
</script>

<style>

</style>
