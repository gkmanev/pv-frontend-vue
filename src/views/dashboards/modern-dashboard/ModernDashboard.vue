<template>
  <b-row>
    <b-col cols="12">
      <SalesCard />
    </b-col>
    <!-- --------------------------------------------------------- 
    Sales Summary
    --------------------------------------------------------- -->
    <b-col cols="12">
      <b-card class="mb-4" no-body>
        <RevenueStatistics />
      </b-card>
    </b-col>
    <!-- --------------------------------------------------------- 
    Email Campaigns
    --------------------------------------------------------- -->
    <b-col lg="4" cols="12" md="12" class="d-flex align-items-stretch">
      <b-card class="mb-4 w-100">
        <SalesOftheMonth />
      </b-card>
    </b-col>
    <!-- --------------------------------------------------------- 
    Revenue Statistics
    --------------------------------------------------------- -->
    <b-col lg="4" cols="12" md="12">
      <b-card class="mb-4 w-100">
        <SalesPrediction />
      </b-card>
      <b-card class="mb-4">
        <SalesDifference />
      </b-card>
    </b-col>
    <!-- --------------------------------------------------------- 
    profile card
    --------------------------------------------------------- -->
    <b-col lg="4" cols="12" md="12" class="d-flex align-items-stretch">
      <b-card class="mb-4" no-body>
        <ProfileCard />
      </b-card>
    </b-col>
    <!-- --------------------------------------------------------- 
    Recent Chats
    --------------------------------------------------------- -->
    <b-col lg="6" cols="12" md="12">
      <b-card class="mb-4">
        <h4 class="card-title mb-0">Recent Chats</h4>
        <RecentChats></RecentChats>
      </b-card>
    </b-col>
    <!-- --------------------------------------------------------- 
    Recent Messages
    --------------------------------------------------------- -->
    <b-col lg="6" cols="12" md="12">
      <b-card class="mb-4">
        <h4 class="card-title mb-0">Recent Messages</h4>
        <RecentMessages />
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
    <b-col lg="12" cols="12" md="12">
      <BlogCard />
    </b-col>
    <b-col lg="6" cols="12" md="12" class="d-flex align-items-stretch">
      <b-card no-body class="mb-4 w-100">
        <div class="card-body">
          <h4 class="card-title mb-0">Recent Comments</h4>
        </div>
        <RecentComments />
      </b-card>
    </b-col>
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
import SalesCard from "../dashboard-components/sales-card/SalesCard";
import RevenueStatistics from "../dashboard-components/revenue-statistics/RevenueStatistics";
import SalesOftheMonth from "../dashboard-components/sales-of-the-month/SalesOftheMonth";
import SalesPrediction from "../../widgets/chart-widgets/sales-prediction/SalesPrediction";
import SalesDifference from "../../widgets/chart-widgets/sales-difference/SalesDifference";
import RecentChats from "../dashboard-components/recent-chats/RecentChats";
import ProfileCard from "../dashboard-components/profile-card/ProfileCard";
import RecentMessages from "../dashboard-components/recent-messages/RecentMessages";
import RecentComments from "../dashboard-components/recent-comments/RecentComments";
import BlogCard from "../dashboard-components/blog-card/BlogCard";
import SellingProduct from "../dashboard-components/selling-product/SellingProduct";
import WeatherReport from "../dashboard-components/weather-report/WeatherReport";
import TodoList from "../dashboard-components/todo-list/TodoList";

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
    SalesCard,
    RevenueStatistics,
    SalesOftheMonth,
    SalesPrediction,
    SalesDifference,
    RecentChats,
    ProfileCard,
    RecentMessages,
    RecentComments,
    BlogCard,
    SellingProduct,
    WeatherReport,
    TodoList,
  },
};
</script>