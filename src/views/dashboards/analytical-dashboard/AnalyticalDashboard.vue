<template>
  <div>
    <b-row>
      <b-col cols="12">
        <BarCards />
      </b-col>
      <b-col cols="12" lg="8">
        <b-card class="mb-4" no-body>
          <TotalRevenueBar />
        </b-card>
      </b-col>
      <b-col cols="12" lg="4">
        <b-card class="mb-4 w-100">
          <SalesPrediction />
        </b-card>
        <b-card class="mb-4 w-100">
          <SalesDifference />
        </b-card>
      </b-col>
      <b-col cols="12" lg="8">
        <b-card class="mb-4">
          <h4 class="card-title">Total Visits</h4>
          <div style="height: 390px">
            <App
              :countryData="countryData"
              defaultCountryFillColor="rgba(0, 0, 0, 0.1)"
              highColor="rgba(0, 0, 0, 0.2)"
              lowColor="rgba(0, 0, 0, 0.2)"
              countryStrokeColor="transparent"
            />
          </div>
        </b-card>
        <TotalVisits />
      </b-col>
      <b-col cols="12" lg="4">
        <b-card class="mb-4">
          <h4 class="card-title">Browser Stats</h4>
          <BrowserStats />
        </b-card>
      </b-col>
      <b-col cols="12" lg="8" class="d-flex align-items-strech">
        <Calendar class="mb-4 calendar-app w-100" />
      </b-col>
      <!-- --------------------------------------------------------- 
    profile card
    --------------------------------------------------------- -->
      <b-col lg="4" cols="12" md="12" class="d-flex align-items-strech">
        <b-card class="mb-4 w-100" no-body>
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
    </b-row>
  </div>
</template>

<script>
import BarCards from "../dashboard-components/bar-cards/BarCards";
import TotalRevenueBar from "../dashboard-components/total-revenue-bar/TotalRevenueBar";
import SalesPrediction from "../dashboard-components/sales-prediction/SalesPrediction";
import SalesDifference from "../dashboard-components/sales-difference/SalesDifference";
import BrowserStats from "../dashboard-components/browser-stats/BrowserStats";
import TotalVisits from "../dashboard-components/total-visits/TotalVisits";
import ProfileCard from "../dashboard-components/profile-card/ProfileCard";
import Calendar from "../../apps/calendar/Calendar";
import RecentMessages from "../dashboard-components/recent-messages/RecentMessages";
import RecentChats from "../dashboard-components/recent-chats/RecentChats";
import App from "vue-world-map";

export default {
  name: "AnalyticalDashboard",
  data: () => ({
    countryData: {
      US: 100,
      IN: 200,
    },
  }),
  components: {
    BarCards,
    TotalRevenueBar,
    SalesPrediction,
    SalesDifference,
    BrowserStats,
    TotalVisits,
    App,
    ProfileCard,
    Calendar,
    RecentMessages,
    RecentChats,
  },
};
</script>
