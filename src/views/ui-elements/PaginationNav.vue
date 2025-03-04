<template>
  <b-row>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <BasicPaginationNav />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <ArrayofPagesNavigation />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <ButtonContentPaginationNav />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <FirstLastButtonPaginationNav />
    </b-col>
    <b-col cols="12" xl="6" class="d-flex align-items-stretch">
      <ButtonSizePaginationNav />
    </b-col>
    <b-col cols="12" xl="6" class="d-flex align-items-stretch">
      <PillPaginationNav />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <AlignmentPaginationNav />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <CenterAlignmentPaginationNav />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <FillAlignmentPaginationNav />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <RightAlignmentPaginationNav />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "PaginationNav",

  data: () => ({
    page: {
      title: "PaginationNav",
    },
  }),
  components: {
    BasicPaginationNav: () =>
      import("@/components/ui/pagination-nav/BasicPaginationNav"),
    ArrayofPagesNavigation: () =>
      import("@/components/ui/pagination-nav/ArrayofPagesNavigation"),
    PillPaginationNav: () =>
      import("@/components/ui/pagination-nav/PillPaginationNav"),
    RightAlignmentPaginationNav: () =>
      import("@/components/ui/pagination-nav/RightAlignmentPaginationNav"),
    FillAlignmentPaginationNav: () =>
      import("@/components/ui/pagination-nav/FillAlignmentPaginationNav"),
    CenterAlignmentPaginationNav: () =>
      import("@/components/ui/pagination-nav/CenterAlignmentPaginationNav"),
    AlignmentPaginationNav: () =>
      import("@/components/ui/pagination-nav/AlignmentPaginationNav"),
    ButtonSizePaginationNav: () =>
      import("@/components/ui/pagination-nav/ButtonSizePaginationNav"),
    FirstLastButtonPaginationNav: () =>
      import("@/components/ui/pagination-nav/FirstLastButtonPaginationNav"),
    ButtonContentPaginationNav: () =>
      import("@/components/ui/pagination-nav/ButtonContentPaginationNav"),
  },
};
</script>
