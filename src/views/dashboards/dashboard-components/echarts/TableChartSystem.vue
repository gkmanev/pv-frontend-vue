<template>
    <b-row>
     <b-col cols="12">
       <b-card class="mb-4">
         <h5 class="card-title mb-3">All Farms Data</h5>
         <b-table :items="all" :fields="fields" :select-mode="selectMode" responsive="sm" ref="selectableTable" selectable @row-selected="onRowSelected">
           <!-- Scoped slot for the 'online' status -->
           <template #cell(status)="{ item }">
             <span class="led-indicator" :class="getLedClass(item.online)"></span>
           </template>
           <template #cell(updated)="{ item }">
             <span class="led-indicator" :class="getLedClass(item.commercial)"></span>
           </template>
         </b-table>
 
         <p class="btn-grp">
           <b-button size="sm" variant="outline-primary" @click="selectAllRows">Select all</b-button>
           <b-button size="sm" variant="outline-danger" @click="clearSelected">Clear selected</b-button>
         </p>
         <!-- <p>Selected Rows:<br />{{ selected }}</p> -->
       </b-card>
     </b-col>
   </b-row>
 </template>
   
   <script>
   import { mapState } from 'vuex';

   // import { coords } from './coords.js';
   //import PahoMQTT from 'paho-mqtt';
   export default {
   
     data() {
       return {
         selectMode: 'multi',        
         selected: [],
         currentGrid:'',      
         currentLat:'',
         currentLong:'',
         currentCap:'',
         inputGrid:'',
         inputLat:'',
         inputLong:'',
         inputCap:'',
         fields: [
         { key: 'farm', sortable: true },
         { key: 'status', sortable: true, label: 'Commercial' },  
         { key: 'updated', sortable: true, label: 'Tech' },      
         { key: 'power', sortable: true, label: 'Power kW'},
         {key: 'coordinates', sortable: true, label: 'Coordinates'},
      
         { key: 'farm_type', sortable: true },            
         { key: 'capacity', label: 'Capacity'},         
       ],        
         power: '',
         powerCorr:'',
         time:'',
         countDown: {},
         polling: null,
         newEntries: {},
         singleCorrection:{},
         checked: {},
         allSelected: true,
         activeClass: 'disabled',
         btn_class: 'btn btn-success mb-2',
         all: [],
         posts: [],
      
       };
     },
   
     methods: {    
 
         async pollData() {
           this.polling = setInterval(async () => {
             await this.createAllDevs();
 
           }, 15000);
         },
         
    
         getLedClass(status) {
             switch (status) {
              case 'updated':
                  return 'led-green';
              case 'not-updated':
                  return 'led-gray';
              case 'online':
                  return 'led-blue';
              case 'offline':
                  return 'led-gray';
              case 'ready':
                  return 'led-green';
              case 'providing':
                  return 'led-orange';
              default:
                  return '';
             }
         },
          
         onRowSelected(selectedItems) {
         this.selected = selectedItems;
         },
         selectAllRows() {
         this.$refs.selectableTable.selectAllRows();
         },
         clearSelected() {
         this.$refs.selectableTable.clearSelected();
         },
 
       
      
       async createAllDevs() {        
         this.all = this.all_devs   
        
         this.all.forEach(dev => {
          dev.coordinates = `${dev.latitude} / ${dev.longitude}`;
          if (isNaN(dev.power)) {
            dev.power = '-';
          } else {
            dev.power = parseFloat(dev.power).toFixed(2);
          }
        });
       } 
     },
   
     created (){       
       this.createAllDevs()      
       this.pollData()
       
     },
     beforeDestroy () {
          clearInterval(this.polling)
     },
     computed: {
       isDisabled: function(){
           return !this.power || !this.countDown;
       },
       ...mapState(['all_devs']),

      }
   
   
   
   };
   </script>
   
   <style scoped>
 
    .table td {
        padding: 0 !important;
    }
   .led-indicator {
   display: inline-block;
   width: 12px;
   height: 12px;
   border-radius: 50%;
   margin-right: 5px;
 }
 
 .led-blue {
   background-color:skyblue;
 }
 
 .led-gray {
   background-color: gray;
 }
 
 .led-green {
   background-color: #4eefce;
 }
 
 .led-orange {
   background-color: orange;
 }

 .led-red {
   background-color: red;
  }
   </style>
   