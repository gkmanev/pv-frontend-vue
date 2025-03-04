<template>
  <b-row class="jusitfy-content-center">
    <b-col cols="12" lg="6" md="6">
      <b-card class="mb-4">
        <h4 class="card-title mb-0" slot="header">Active User</h4>
        <ActiveUsers></ActiveUsers>
      </b-card>
      <b-card class="mb-4">
        <h4 class="card-title mb-0" slot="header">TotalVisits</h4>
        <TotalVisits></TotalVisits>
      </b-card>
      <b-card class="mb-4">
        <h4 class="card-title mb-0" slot="header">Order Stats</h4>
        <OrderStats></OrderStats>
      </b-card>
      <b-card class="mb-4">
        <WalletBalance></WalletBalance>
      </b-card>
      <b-card class="mb-4">
        <h4 class="card-title">Estimated Sales</h4>
        <EstimatedSales></EstimatedSales>
      </b-card>
      <b-card class="mb-4">
        <h4 class="card-title">Referral Earnings</h4>
        <ReferralEarnings></ReferralEarnings>
      </b-card>
    </b-col>
    <b-col cols="12" lg="6" md="6">
      <b-card class="mb-4">
        <h4 class="card-title mb-0" slot="header">Device Visit</h4>
        <DeviceVisits></DeviceVisits>
      </b-card>

      <b-card class="mb-4" no-body>
        <div class="card-body">
          <h4 class="card-title">Sales Ratio</h4>
        </div>
        <SalesRatio></SalesRatio>
      </b-card>
      <b-card class="mb-4">
        <h2 class="card-title mb-0">56.33%</h2>
        <span class>Bounce Rate</span>
        <MonthBounceRate></MonthBounceRate>
      </b-card>
      <b-card class="mb-4">
        <h4 class="card-title mb-0" slot="header">Bounce Rate</h4>
        <BounceRate></BounceRate>
      </b-card>
      <b-card class="mb-4">
        <TotalEarnings></TotalEarnings>
      </b-card>
      <b-card class="mb-4" no-body>
        <div class="card-body">
          <h4 class="card-title">Overview Campaign</h4>
        </div>
        <OverviewCampaignChart></OverviewCampaignChart>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
import ActiveUsers from "../chart-widgets/active-users/ActiveUsers";
import DeviceVisits from "../chart-widgets/device-visit/DeviceVisit";
import BounceRate from "../chart-widgets/bounce-rate/BounceRate";
import OrderStats from "../chart-widgets/order-stats/OrderStats";
import TotalVisits from "../chart-widgets/total-visits/TotalVisits";
import MonthBounceRate from "../chart-widgets/month-bounce-rate/MonthBounceRate";
import EstimatedSales from "../chart-widgets/estimated-sales/EstimatedSales";
import OverviewCampaignChart from "../chart-widgets/overview-campaign/OverviewCampaign";
import ReferralEarnings from "../chart-widgets/referral-earnings/ReferralEarnings";
import SalesRatio from "../chart-widgets/sales-ratio/SalesRatio";
import TotalEarnings from "../chart-widgets/total-earnings/TotalEarnings";
import WalletBalance from "../chart-widgets/wallet-balance/WalletBalance";

export default {
  name: "widgetdata",
  data: () => ({
    title: "widgetdata",
  }),
  components: {
    ActiveUsers,
    DeviceVisits,
    BounceRate,
    OrderStats,
    TotalVisits,
    MonthBounceRate,
    EstimatedSales,
    OverviewCampaignChart,
    ReferralEarnings,
    SalesRatio,
    TotalEarnings,
    WalletBalance,
  },
};
</script>