<template>
  <b-row class="justify-content-center">
    <b-col lg="4" cols="12" md="12">
      <b-card no-body class="mb-4">
        <div class="card-body">
          <h4 class="card-title mb-0">Recent comments</h4>
        </div>
        <RecentComments></RecentComments>
      </b-card>
      <b-card class="mb-4">
        <h4 class="card-title">Recent Chats</h4>
        <RecentChats></RecentChats>
      </b-card>
      <b-card class="mb-4" no-body>
        <div class="card-body pb-0">
          <h4 class="card-title">Browse Stats</h4>
        </div>
        <BrowseStats></BrowseStats>
      </b-card>
    </b-col>
    <b-col lg="4" cols="12" md="12">
      <b-card class="mb-4">
        <h4 class="card-title">Recent Messages</h4>
        <RecentMessages></RecentMessages>
      </b-card>
      <b-card class="mb-4" no-body>
        <div class="card-body pb-0">
          <h4 class="card-title">Notifications</h4>
        </div>
        <RecentNotification></RecentNotification>
      </b-card>
      <b-card no-body class="mb-4">
        <div class="card-body">
          <!-- Header -->
          <div class="d-md-flex align-items-center">
            <div>
              <h4 class="card-title mb-0">Project Month</h4>
            </div>
            <div class="ml-auto">
              <b-form-select :options="monthoptions1" v-model="month1">
              </b-form-select>
            </div>
          </div>
        </div>
        <ProjectTable></ProjectTable>
      </b-card>
      <b-card class="mb-4">
        <h4 class="card-title">Feeds</h4>
        <Feeds></Feeds>
      </b-card>
    </b-col>
    <b-col lg="4" cols="12" md="12">
      <b-card class="mb-4">
        <UserProfile></UserProfile>
      </b-card>
      <b-card class="text-center mb-4">
        <FollowProfile></FollowProfile>
      </b-card>
      <b-card class="mb-4">
        <h4 class="card-title mb-2 pb-1">Result of the Poll</h4>
        <h5 class="card-subtitle font-weight-normal text-muted">
          Here is the result for the latest poll
        </h5>
        <p class="mt-3 fw-medium">What is your mobile app usage daily?</p>
        <ResultPoll></ResultPoll>
      </b-card>
      <b-card class="mb-4">
        <h4 class="card-title mb-2">Poll of the week</h4>
        <h5 class="card-subtitle font-weight-normal text-muted">
          Here is the latest polll
        </h5>
        <p class="font-weight-bold text-dark mt-2">
          What is your mobile app usage daily?
        </p>
        <PollWeek></PollWeek>
      </b-card>
      <b-card class="mb-4">
        <h4 class="card-title">Visits around the countries</h4>
        <VisitCountry></VisitCountry>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
import RecentComments from "../../dashboards/dashboard-components/recent-comments/RecentComments";
import RecentChats from "../../dashboards/dashboard-components/recent-chats/RecentChats";
import RecentMessages from "../other-widgets/recent-messages/RecentMessages";
import RecentNotification from "../other-widgets/recent-notifications/RecentNotifications";
import UserProfile from "../other-widgets/user-profile/UserProfile";
import FollowProfile from "../other-widgets/follow-profile/FollowProfile";
import ProjectTable from "../other-widgets/project-table/ProjectTable";
import BrowseStats from "../other-widgets/browse-stats/BrowseStats";
import ResultPoll from "../other-widgets/result-poll/ResultPoll";
import PollWeek from "../other-widgets/poll-week/PollWeek";
import VisitCountry from "../other-widgets/visit-country/VisitCountry";
import Feeds from "../other-widgets/feeds/Feeds";

export default {
  name: "widgetapps",
  data: () => ({
    title: "widgetapps",
    // Month Table
    month1: 0,
    monthoptions1: [
      { text: "March", value: 0 },
      { text: "April", value: 1 },
      { text: "May", value: 2 },
      { text: "June", value: 3 },
    ],
  }),
  components: {
    RecentComments,
    RecentChats,
    RecentMessages,
    RecentNotification,
    UserProfile,
    FollowProfile,
    ProjectTable,
    BrowseStats,
    ResultPoll,
    PollWeek,
    VisitCountry,
    Feeds,
  },
};
</script>