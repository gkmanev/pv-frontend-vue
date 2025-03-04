<template>
  <b-row>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <BasicTabs />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <CardIntegration />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <PillTabs />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <FillTabs />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <JustifiedTabs />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <AlignmentTabs />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <BottomPlacementTabs />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <VerticalTabs />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <RightVerticalTabs />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <CustomContentTabs />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <LazyLoadTabs />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Tabs",

  data: () => ({
    page: {
      title: "Tabs",
    },
  }),
  components: {
    BasicTabs: () => import("@/components/ui/tabs/BasicTabs"),
    CardIntegration: () => import("@/components/ui/tabs/CardIntegration"),
    PillTabs: () => import("@/components/ui/tabs/PillTabs"),
    FillTabs: () => import("@/components/ui/tabs/FillTabs"),
    JustifiedTabs: () => import("@/components/ui/tabs/JustifiedTabs"),
    AlignmentTabs: () => import("@/components/ui/tabs/AlignmentTabs"),
    VerticalTabs: () => import("@/components/ui/tabs/VerticalTabs"),
    RightVerticalTabs: () => import("@/components/ui/tabs/RightVerticalTabs"),
    CustomContentTabs: () => import("@/components/ui/tabs/CustomContentTabs"),
    LazyLoadTabs: () => import("@/components/ui/tabs/LazyLoadTabs"),
    BottomPlacementTabs: () =>
      import("@/components/ui/tabs/BottomPlacementTabs"),
  },
};
</script>
