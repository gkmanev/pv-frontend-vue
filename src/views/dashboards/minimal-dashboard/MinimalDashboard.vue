<template>
  <b-row>
    <b-col cols="12" lg="6">
      <b-card no-body class="mb-4">
        <TotalRevenue />
      </b-card>
    </b-col>
    <b-col cols="12" lg="6">
      <ProgressCards />
    </b-col>
    <b-col cols="12" lg="6" class="d-flex align-items-stretch">
      <b-card class="mb-4 w-100">
        <!-- Header -->
        <div class="d-md-flex align-items-center">
          <div>
            <h4 class="card-title mb-0">Sales of the Month</h4>
          </div>
          <div class="ml-auto mt-3 mt-md-0">
            <b-form-select :options="salesoptions1" v-model="sales1">
            </b-form-select>
          </div>
        </div>
        <SalesMonth />
      </b-card>
    </b-col>
    <b-col cols="12" lg="6" class="d-flex align-items-stretch">
      <b-card class="mb-4 w-100">
        <!-- Header -->
        <div class="d-md-flex align-items-center">
          <div>
            <h4 class="card-title mb-0">Income of the Year</h4>
          </div>
          <div class="ml-auto mt-3 mt-md-0">
            <ul class="list-group list-group-horizontal font-12 mb-0">
              <li
                class="list-group-item border-0 p-0 d-flex align-items-center mr-2"
              >
                <h6 class="text-muted">
                  <i
                    class="mdi mdi-checkbox-blank-circle mr-1 text-success"
                  ></i>
                  Net
                </h6>
              </li>
              <li
                class="list-group-item border-0 p-0 d-flex align-items-center"
              >
                <h6 class="text-muted">
                  <i class="mdi mdi-checkbox-blank-circle mr-1 text-info"></i>
                  Growth
                </h6>
              </li>
            </ul>
          </div>
        </div>
        <IncomeOfTheYear />
      </b-card>
    </b-col>
    <b-col lg="8" cols="12" md="12" class="d-flex align-items-stretch">
      <b-card class="mb-4 w-100">
        <!-- Header -->
        <div class="d-md-flex align-items-center">
          <div>
            <h4 class="card-title mb-0">Projects of the Month</h4>
          </div>
          <div class="ml-auto mt-3 mt-md-0">
            <b-form-select :options="sellingoptions1" v-model="selling1">
            </b-form-select>
          </div>
        </div>
        <SellingProduct />
      </b-card>
    </b-col>
    <b-col lg="4" cols="12" md="12" class="d-flex align-items-stretch">
      <b-card class="w-100 mb-4">
        <!-- Header -->
        <div class="d-md-flex align-items-center">
          <div>
            <h4 class="card-title mb-0">Weather Report</h4>
          </div>
          <div class="ml-auto mt-3 mt-md-0">
            <b-form-select :options="weatheroptions1" v-model="weather1">
            </b-form-select>
          </div>
        </div>
        <WeatherReport />
      </b-card>
    </b-col>
    <!-- --------------------------------------------------------- 
    Recent Comments
    --------------------------------------------------------- -->
    <b-col lg="6" cols="12" md="12" class="d-flex align-items-stretch">
      <b-card no-body class="mb-4 w-100">
        <div class="card-body">
          <h4 class="card-title mb-0">Recent Comments</h4>
        </div>
        <RecentComments />
      </b-card>
    </b-col>
    <!-- --------------------------------------------------------- 
    To Do list
    --------------------------------------------------------- -->
    <b-col lg="6" cols="12" md="12" class="d-flex align-items-stretch">
      <b-card class="mb-4 w-100">
        <h4 class="card-title">To Do List</h4>
        <TodoList class="mt-4" />
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
// -----------------------------------------
// Import Components Here
// -----------------------------------------
import TotalRevenue from "../dashboard-components/total-revenue/TotalRevenue";
import ProgressCards from "../dashboard-components/progress-cards/ProgressCards";
import RecentComments from "../dashboard-components/recent-comments/RecentComments";
import TodoList from "../dashboard-components/todo-list/TodoList";
import SalesMonth from "../dashboard-components/sales-month/SalesMonth";
import SellingProduct from "../dashboard-components/selling-product/SellingProduct";
import WeatherReport from "../dashboard-components/weather-report/WeatherReport";
import IncomeOfTheYear from "../dashboard-components/income-of-the-year/IncomeOfTheYear";

// -----------------------------------------
// Export Here
// -----------------------------------------
export default {
  name: "MinimalDashboard",
  data: () => ({
    title: "MinimalDashboard",
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
    // sales of the momth
    sales1: 0,
    salesoptions1: [
      { text: "Monthly", value: 0 },
      { text: "Daily", value: 1 },
      { text: "Weekly", value: 2 },
      { text: "Yearly", value: 3 },
    ],
  }),
  components: {
    RecentComments,
    TodoList,
    SellingProduct,
    WeatherReport,
    TotalRevenue,
    ProgressCards,
    SalesMonth,
    IncomeOfTheYear,
  },
};
</script>