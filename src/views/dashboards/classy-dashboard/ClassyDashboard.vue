<template>
  <b-row>
    <b-col cols="12">
      <b-card no-body class="mb-4">
        <AndroidIos />
      </b-card>
    </b-col>
    <b-col cols="12" md="6">
      <b-card class="mb-4 bg-primary">
        <BandwidthUsage />
      </b-card>
    </b-col>
    <b-col cols="12" md="6">
      <b-card class="mb-4 bg-danger">
        <DownloadCount />
      </b-card>
    </b-col>
    <b-col cols="12" lg="6">
      <b-card class="mb-4">
        <h4 class="card-title">Notification</h4>
        <Notifications />
      </b-card>
    </b-col>
    <b-col cols="12" lg="6">
      <b-card class="mb-4">
        <div class="d-md-flex align-items-center">
          <h4 class="card-title">Visit source</h4>
          <div class="ml-auto">
            <b-form-select
              v-model="visitselected"
              :options="visitoptions"
            ></b-form-select>
          </div>
        </div>
        <VisitSource />
      </b-card>
    </b-col>
    <b-col cols="12">
      <b-card class="mb-4">
        <DownloadCount2 />
      </b-card>
    </b-col>
    <!-- --------------------------------------------------------- 
    Reviews
    --------------------------------------------------------- -->
    <b-col lg="12" cols="12" md="12">
      <b-card no-body class="mb-4">
        <Reviews></Reviews>
      </b-card>
    </b-col>
    <!-- --------------------------------------------------------- 
    Products of the Month
    --------------------------------------------------------- -->
    <b-col cols="12">
      <b-card class="mb-4">
        <!-- Header -->
        <div class="d-md-flex align-items-center">
          <div>
            <h4 class="card-title">Products Availability</h4>
            <h5 class="card-subtitle text-muted font-weight-light">
              March 2020
            </h5>
          </div>
          <div class="ml-auto mt-3 mt-md-0">
            <b-form-select :options="monthoptions1" v-model="month1">
            </b-form-select>
          </div>
        </div>
        <!-- Content -->
        <ProductTable></ProductTable>
      </b-card>
    </b-col>
    <b-col cols="12" lg="4" class="d-flex align-items-stretch">
      <b-card
        overlay
        class="mb-4 profile-card w-100"
        img-src="../../../assets/images/background/socialbg.jpg"
        img-alt="Card Image"
        text-variant="white"
      >
        <UserProfile />
      </b-card>
    </b-col>
    <b-col cols="12" lg="8" class="d-flex align-items-stretch">
      <b-card no-body class="mb-4 w-100">
        <Experiences />
      </b-card>
    </b-col>
    <b-col cols="12" lg="4">
      <b-card class="mb-4" no-body>
        <UserProfileDetail />
      </b-card>
    </b-col>
    <b-col cols="12" lg="8">
      <b-card no-body class="mb-4">
        <Timeline />
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
// -----------------------------------------
// Import Components Here
// -----------------------------------------
import ProductTable from "../dashboard-components/product-table/ProductTable";
import Reviews from "../dashboard-components/reviews/Reviews";
import AndroidIos from "../dashboard-components/android-vs-ios/AndroidIos";
import BandwidthUsage from "../dashboard-components/bandwidth-usage/BandwidthUsage";
import DownloadCount from "../dashboard-components/download-count/DownloadCount";
import Notifications from "../dashboard-components/notifications/Notifications";
import VisitSource from "../dashboard-components/visit-source/VisitSource";
import DownloadCount2 from "../dashboard-components/download-count2/DownloadCount2";
import UserProfile from "../dashboard-components/user-profile/UserProfile";
import Experiences from "../dashboard-components/experiences/Experiences";
import UserProfileDetail from "../dashboard-components/user-profile-detail/UserProfileDetail";
import Timeline from "../dashboard-components/timeline/Timeline";

// -----------------------------------------
// Export Here
// -----------------------------------------
export default {
  name: "ClassyDashboard",
  data: () => ({
    title: "ClassyDashboard",
    // Month Table
    month1: 0,
    monthoptions1: [
      { text: "Electronics", value: 0 },
      { text: "Kitchen", value: 1 },
      { text: "Crocory", value: 2 },
      { text: "Wooden", value: 3 },
    ],
    visitselected: 0,
    visitoptions: [
      { text: "Monthly", value: 0 },
      { text: "Daily", value: 1 },
      { text: "Weekly", value: 2 },
      { text: "Yearly", value: 3 },
    ],
  }),
  components: {
    ProductTable,
    Reviews,
    AndroidIos,
    BandwidthUsage,
    DownloadCount,
    Notifications,
    VisitSource,
    DownloadCount2,
    UserProfile,
    Experiences,
    UserProfileDetail,
    Timeline,
  },
};
</script>