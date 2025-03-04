<template>
    <b-row class="justify-content-start">   

        <!-- <b-col cols="12">
            <TableChartSystem />
        </b-col> -->
      
      <!-- --------------------------------------------------------- 
      Sales Summary
      --------------------------------------------------------- -->
      <!-- <b-col cols="12">
        <b-card class="mb-4" no-body>
          <RevenueStatistics />
        </b-card>
      </b-col>      -->
    </b-row>
  </template>
  <script>
  // -----------------------------------------
  // Import Components Here
  // -----------------------------------------

  //import TableChartSystem from "../dashboard-components/echarts/TableChartSystem";

  


  
  // -----------------------------------------
  // Export Here
  // -----------------------------------------
  export default {
    name: "ModernDashboard",
    data: () => ({
      title: "ModernDashboard",
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

   // TableChartSystem,   

    
},
    methods: {
        handleFilter(period) {
        // Perform API request based on the selected period (today, week, month)
        // Update your content based on the API response
        console.log(`Filtering content for ${period}`);
        // Make API request here and update content
        },
  },
    created() {
        // Trigger "today" filter when the component is created
        this.handleFilter('today');
    },
    };
  </script>