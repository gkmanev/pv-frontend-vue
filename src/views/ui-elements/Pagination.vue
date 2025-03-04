<template>
  <b-row>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <BasicPagination />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <ButtonContentPagination />
    </b-col>
    <b-col cols="12" md="5" class="d-flex align-items-stretch">
      <FirstLastButtonPagination />
    </b-col>
    <b-col cols="12" md="7" class="d-flex align-items-stretch">
      <ButtonSizePagination />
    </b-col>
    <b-col cols="12" md="7" class="d-flex align-items-stretch">
      <PillPagination />
    </b-col>
    <b-col cols="12" md="5" class="d-flex align-items-stretch">
      <AlignmentPagination />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <CenterAlignmentPagination />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <FillAlignmentPagination />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <RightAlignmentPagination />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Pagination",

  data: () => ({
    page: {
      title: "Pagination",
    },
  }),
  components: {
    BasicPagination: () => import("@/components/ui/pagination/BasicPagination"),
    PillPagination: () => import("@/components/ui/pagination/PillPagination"),
    RightAlignmentPagination: () =>
      import("@/components/ui/pagination/RightAlignmentPagination"),
    FillAlignmentPagination: () =>
      import("@/components/ui/pagination/FillAlignmentPagination"),
    CenterAlignmentPagination: () =>
      import("@/components/ui/pagination/CenterAlignmentPagination"),
    AlignmentPagination: () =>
      import("@/components/ui/pagination/AlignmentPagination"),
    ButtonSizePagination: () =>
      import("@/components/ui/pagination/ButtonSizePagination"),
    FirstLastButtonPagination: () =>
      import("@/components/ui/pagination/FirstLastButtonPagination"),
    ButtonContentPagination: () =>
      import("@/components/ui/pagination/ButtonContentPagination"),
  },
};
</script>
