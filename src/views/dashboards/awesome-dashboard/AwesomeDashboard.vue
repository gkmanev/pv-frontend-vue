<template>
  <b-row>
    <!-- --------------------------------------------------------- 
    Awesome Cards
    --------------------------------------------------------- -->
    <b-col cols="12">
      <AwesomeCards />
    </b-col>
    <!-- --------------------------------------------------------- 
    Product Calculation
    --------------------------------------------------------- -->
    <b-col cols="12">
      <b-card no-body class="mb-4">
        <ProductCalculation />
      </b-card>
    </b-col>
    <!-- --------------------------------------------------------- 
    Member Activity
    --------------------------------------------------------- -->
    <b-col cols="12" lg="6" class="d-flex align-items-stretch">
      <b-card class="mb-4 w-100">
        <div class="d-md-flex align-items-center">
          <div>
            <h4 class="card-title mb-1">Members Activity</h4>
            <h6 class="text-muted font-weight-light">
              what members preformance status
            </h6>
          </div>
          <div class="ml-auto">
            <b-button-group>
              <b-button>Today</b-button>
              <b-button>Week</b-button>
              <b-button>Month</b-button>
            </b-button-group>
          </div>
        </div>
        <MemberActivity />
      </b-card>
    </b-col>

    <!-- --------------------------------------------------------- 
    Recent Comments
    --------------------------------------------------------- -->
    <b-col lg="6" cols="12" class="d-flex align-items-stretch">
      <b-card no-body class="mb-4 w-100">
        <div class="p-3">
          <h4 class="card-title mb-1">Customer Support</h4>
          <h6 class="text-muted font-weight-light mb-0">
            24 new support ticket request generate
          </h6>
        </div>
        <RecentComments />
      </b-card>
    </b-col>
    <b-col lg="4" cols="12" md="12" class="d-flex align-items-stretch">
      <b-card class="mb-4 w-100">
        <h4 class="card-title mb-1">Today's Schedule</h4>
        <h6 class="text-muted font-weight-light mb-0">
          check out your daily schedule
        </h6>
        <TodaySchedule />
      </b-card>
    </b-col>
    <b-col lg="8" cols="12" md="12" class="d-flex align-items-stretch">
      <b-card no-body class="mb-4 w-100">
        <div class="d-md-flex align-items-center card-body">
          <div>
            <h4 class="card-title mb-1">Sales Overview</h4>
            <h6 class="text-muted font-weight-light mb-0">
              Check the monthly sales
            </h6>
          </div>
          <div class="ml-auto">
            <b-form-select
              v-model="selected"
              :options="options"
            ></b-form-select>
          </div>
        </div>
        <div class="card-body bg-light">
          <b-row>
            <b-col cols="12" md="6" class="d-flex align-items-center">
              <div>
                <h2 class="mb-0">March 2021</h2>
                <h5 class="font-weight-light mb-0 text-muted">
                  Report for this month
                </h5>
              </div>
            </b-col>
            <b-col
              cols="12"
              md="6"
              class="align-self-center display-6 text-info text-left text-md-right"
              >$3,690</b-col
            >
          </b-row>
        </div>
        <SalesOverviewTable />
      </b-card>
    </b-col>
    <b-col cols="12">
      <StorageBox />
    </b-col>
    <!-- --------------------------------------------------------- 
    Total Earnings
    --------------------------------------------------------- -->
    <b-col lg="6" cols="12" md="12">
      <b-card no-body class="mb-4">
        <div class="d-md-flex align-items-center card-body border-bottom">
          <div>
            <h4 class="card-title mb-0">Total Earning</h4>
            <h2 class="mt-1">$586</h2>
          </div>
          <div class="ml-auto">
            <b-form-select
              v-model="earningselected"
              :options="earningoptions"
            ></b-form-select>
          </div>
        </div>
        <TotalEarnings />
      </b-card>
    </b-col>

    <!-- --------------------------------------------------------- 
    Feeds
    --------------------------------------------------------- -->
    <b-col lg="6" cols="12" md="12">
      <b-card class="mb-4">
        <h4 class="card-title">Feeds</h4>
        <Feeds />
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
// -----------------------------------------
// Import Components Here
// -----------------------------------------

import AwesomeCards from "../dashboard-components/awesome-cards/AwesomeCards";
import ProductCalculation from "../dashboard-components/product-calculation/ProductCalculation";
import MemberActivity from "../dashboard-components/member-activity/MemberActivity";
import TodaySchedule from "../dashboard-components/today-schedule/TodaySchedule";
import SalesOverviewTable from "../dashboard-components/sales-overview-table/SalesOverviewTable";
import StorageBox from "../dashboard-components/storage-box/StorageBox";
import TotalEarnings from "../dashboard-components/total-earnings/TotalEarnings";
import RecentComments from "../dashboard-components/recent-comments/RecentComments";
import Feeds from "../dashboard-components/feeds/Feeds";

// -----------------------------------------
// Export Here
// -----------------------------------------
export default {
  name: "AwesomeDashboard",
  data: () => ({
    title: "AwesomeDashboard",
    selected: 0,
    options: [
      { value: "0", text: "January" },
      { value: "1", text: "February" },
      { value: "2", text: "March" },
      { value: "3", text: "April" },
      { value: "4", text: "May" },
    ],
    earningselected: 0,
    earningoptions: [
      { value: "0", text: "January" },
      { value: "1", text: "February" },
      { value: "2", text: "March" },
      { value: "3", text: "April" },
      { value: "4", text: "May" },
    ],
  }),
  components: {
    AwesomeCards,
    ProductCalculation,
    MemberActivity,
    TodaySchedule,
    SalesOverviewTable,
    StorageBox,
    TotalEarnings,
    RecentComments,
    Feeds,
  },
};
</script>