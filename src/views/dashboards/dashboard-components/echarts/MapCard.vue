<template>
    <b-card>
          <div id="map-canvas" class="heatmap" style="height: 250px; width: 100%;"></div>
    </b-card>
  
    </template>
    
    <script>
    import * as L from 'leaflet';
    import 'leaflet/dist/leaflet.css';
    import 'leaflet.heat'; // Import Leaflet.heat plugin
    //import axios from 'axios';
    import { mapState } from 'vuex';
    
    export default {
      data() {
        return {
          polling: null,
          initialCenter: [52.578824, 17.795749], // Initial map center
          addressPoints: [],
          deviceData: [],
          avgProductionPerFarm: {},
          
          heatLayerOptions: {
            radius: 25,
            blur: 25,
            maxZoom: 9,
            scaleRadius: true,
            opacity: 0.8,
          },
          heatLayer: null, // Reference to the heat layer instance
        };
      },
    
      computed: {
        ...mapState(['all_devs']),
      },
    
      mounted() {
        this.initializeMap();      
        this.pollData();
        //this.fetchData();
      },
    
      methods: {

        async createAllDevs() {        
         this.all = this.all_devs        
         this.all.forEach(dev => {
          dev.coordinates = `${dev.latitude} / ${dev.longitude}`;
          if (!isNaN(dev.power)) {
            dev.power = parseFloat(dev.power).toFixed(2);
          } 
        });
        return this.all
       },


       async pollData() {
           this.polling = setInterval(async () => {
             await this.addData(); 
           }, 15000);
         },
    
        normalizeValues(val) {
          return val / 100; // Adjust normalization as needed
        },
  
    //   async fetchData() {

    //     let all_devs = this.createAllDevs();

    //   },         
  

      calculateAverageProductionPerFarm() {
        // const farmProduction = {};
  
        // this.deviceData.forEach(farm => {
        //   if (!farmProduction[farm.farm]) {
            
        //     farmProduction[farm.farm] = {
        //       totalProduction: 0,
        //       count: 0,
        //       lat: farm.latitude,
        //       long: farm.longitude,
        //     };
        //   }
        //   farmProduction[farm.farm].totalProduction += parseFloat(farm.total_production);
        //   farmProduction[farm.farm].count += 1;
        // });
  
        // for (const farm in farmProduction) {
        //   farmProduction[farm].averageProduction = farmProduction[farm].totalProduction / farmProduction[farm].count;
        //   farmProduction[farm].farm = farm;
        //   // farmProduction[farm].averageProduction = farmProduction[farm].lat;  
        // }
        // this.avgProductionPerFarm = farmProduction;  
        
        
        this.addData();    
       
      },
    
        async addData() {
  
          this.addressPoints = [];          
         
          this.all_devs.forEach(dev => {
            
            const lat = dev.latitude;
            const long = dev.longitude;
            let power = dev.power;            
            if (!isNaN(power) && power >= 0 && lat) {
              // let intensity = this.normalizeValues(averageProduction);
              this.addressPoints.push([lat, long, power/50]);
            }
            
          });         
    
          if (this.heatLayer) {
            this.map.removeLayer(this.heatLayer);
          }    
          
          // cut the length of addressPoints to 2        
           
          const heatPoints = this.addressPoints.map((p) => [p[0], p[1], p[2]]);
          this.heatLayer = L.heatLayer(heatPoints, this.heatLayerOptions).addTo(this.map);
        },
    
        initializeMap() {
          this.map = L.map('map-canvas', {
            scrollWheelZoom: true // Disable scroll wheel zoom
          }).setView(this.initialCenter, 6);
          L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            subdomains: ['a', 'b', 'c'],
          }).addTo(this.map);
          //this.addData(); // Initialize with initial data
        },
    
        beforeDestroy() {
          clearInterval(this.polling);
        },
      },
    };
    </script>
    
    <style scoped>
  
    /* Add your component-specific styles here */
    </style>
    