<template>
  <b-row>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <BasicTooltip />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <NoninteractiveTooltips />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <VarientTooltip />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <ProgrammaticallyShowHideTooltip />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Tooltip",

  data: () => ({
    page: {
      title: "Tooltip",
    },
  }),
  components: {
    BasicTooltip: () => import("@/components/ui/tooltip/BasicTooltip"),
    VarientTooltip: () => import("@/components/ui/tooltip/VarientTooltip"),
    ProgrammaticallyShowHideTooltip: () =>
      import("@/components/ui/tooltip/ProgrammaticallyShowHideTooltip"),
    NoninteractiveTooltips: () =>
      import("@/components/ui/tooltip/NoninteractiveTooltips"),
  },
};
</script>
