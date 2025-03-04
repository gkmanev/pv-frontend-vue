<template>
  <b-row>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <BasicSidebar />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <PlacementSidebar />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <VariantsSidebar />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <HideDafultSidebar />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <FooterSidebar />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <BackdropSidebar />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Sidebar",

  data: () => ({
    page: {
      title: "Sidebar",
    },
  }),
  components: {
    BasicSidebar: () => import("@/components/ui/sidebar/BasicSidebar"),
    PlacementSidebar: () => import("@/components/ui/sidebar/PlacementSidebar"),
    VariantsSidebar: () => import("@/components/ui/sidebar/VariantsSidebar"),
    FooterSidebar: () => import("@/components/ui/sidebar/FooterSidebar"),
    BackdropSidebar: () => import("@/components/ui/sidebar/BackdropSidebar"),
    HideDafultSidebar: () =>
      import("@/components/ui/sidebar/HideDafultSidebar"),
  },
};
</script>
