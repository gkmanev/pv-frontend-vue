<template>
    <div class="widget card" ref="widgetRef">
      <div class="card-content">
        <div id="map-canvas" class="heatmap" style="height: 450px;"></div>
      </div>
    </div>
  </template>
  
  <script>
  import * as L from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  import 'leaflet.heat'; // Import Leaflet.heat plugin

  import { mapState } from 'vuex';
  
  export default {
    data() {
      return {
        polling: null,
        initialCenter: [42.9222, 25.9292], // Initial map center
        addressPoints: [],
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
      this.addData();
      this.pollData();
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
  
      addData() {
        this.addressPoints = [];
        this.all_devs.forEach((el) => {
          const power = parseFloat(el.power);
          if (!isNaN(power) && power >= 0 && el.lat) {
            let intensity = this.normalizeValues(power);
            if(el.lat == 42.6718 || el.lat == 42.6218){
              intensity = 3
            }
            this.addressPoints.push([el.lat, el.long, intensity]);
          }
        });
  
        if (this.heatLayer) {
          this.map.removeLayer(this.heatLayer);
        }
  
        const heatPoints = this.addressPoints.map((p) => [p[0], p[1], p[2]]);
        this.heatLayer = L.heatLayer(heatPoints, this.heatLayerOptions).addTo(this.map);
      },
  
      initializeMap() {
        this.map = L.map('map-canvas', {
          scrollWheelZoom: false // Disable scroll wheel zoom
        }).setView(this.initialCenter, 7);
        L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          subdomains: ['a', 'b', 'c'],
        }).addTo(this.map);
        this.addData(); // Initialize with initial data
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
  