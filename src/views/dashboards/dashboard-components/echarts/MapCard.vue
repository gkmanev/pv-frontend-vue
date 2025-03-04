<template>
    <b-card>
          <div id="map-canvas" class="heatmap" style="height: 250px; width: 100%;"></div>
    </b-card>
  
    </template>
    
    <script>
    import * as L from 'leaflet';
    import 'leaflet/dist/leaflet.css';
    import 'leaflet.heat'; // Import Leaflet.heat plugin
    import axios from 'axios';
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
        this.fetchData();
      },
    
      methods: {
        async pollData() {
          this.addressPoints = [];
          this.polling = setInterval(async () => {
            try {
              await this.addData();
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          }, 15000);
        },
    
        normalizeValues(val) {
          return val / 100; // Adjust normalization as needed
        },
  
      async fetchData() {
        try {       
  
          let url = 'http://209.38.208.230:8000/api/pvmeasurementdata/?all=all'
          const response = await axios.get(url);             
          this.deviceData = response.data;
          if (this.deviceData.length > 0) {
            this.calculateAverageProductionPerFarm();
          } else {
            console.error('No data found');
          }
          this.calculateAverageProductionPerFarm();
        } catch (error) {
          console.error('There was an error fetching the data!', error);
        }
      },
      calculateAverageProductionPerFarm() {
        const farmProduction = {};
  
        this.deviceData.forEach(farm => {
          if (!farmProduction[farm.farm]) {
            
            farmProduction[farm.farm] = {
              totalProduction: 0,
              count: 0,
              lat: farm.latitude,
              long: farm.longitude,
            };
          }
          farmProduction[farm.farm].totalProduction += parseFloat(farm.total_production);
          farmProduction[farm.farm].count += 1;
        });
  
        for (const farm in farmProduction) {
          farmProduction[farm].averageProduction = farmProduction[farm].totalProduction / farmProduction[farm].count;
          farmProduction[farm].farm = farm;
          // farmProduction[farm].averageProduction = farmProduction[farm].lat;  
        }
        this.avgProductionPerFarm = farmProduction;  
        
        
        this.addData();    
       
      },
    
        addData() {
  
          this.addressPoints = [];
          for (const farm in this.avgProductionPerFarm) {
            
            const farmData = this.avgProductionPerFarm[farm];  
                 
            const averageProduction = farmData.averageProduction;          
            const lat = farmData.lat;
            const long = farmData.long;
            if (!isNaN(averageProduction) && averageProduction >= 0 && lat) {
              // let intensity = this.normalizeValues(averageProduction);
              this.addressPoints.push([lat, long, averageProduction]);
            }
            
          }
  
          
    
          if (this.heatLayer) {
            this.map.removeLayer(this.heatLayer);
          }
    
          const heatPoints = this.addressPoints.map((p) => [p[0], p[1], p[2]]);
          this.heatLayer = L.heatLayer(heatPoints, this.heatLayerOptions).addTo(this.map);
        },
    
        initializeMap() {
          this.map = L.map('map-canvas', {
            scrollWheelZoom: false // Disable scroll wheel zoom
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
    