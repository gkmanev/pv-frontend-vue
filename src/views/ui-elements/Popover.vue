<template>
  <b-row>
    <b-col cols="12" md="6" xl="3" class="d-flex align-items-stretch">
      <DirectionPopover />
    </b-col>
    <b-col cols="12" md="6" xl="3" class="d-flex align-items-stretch">
      <VarientPopover />
    </b-col>
    <b-col cols="12" md="6" xl="3" class="d-flex align-items-stretch">
      <ProgrammaticallyShowHidePopover />
    </b-col>
    <b-col cols="12" md="6" xl="3" class="d-flex align-items-stretch">
      <ReactivePopover />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <BasicPopover />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Popover",

  data: () => ({
    page: {
      title: "Popover",
    },
  }),
  components: {
    BasicPopover: () => import("@/components/ui/popover/BasicPopover"),
    DirectionPopover: () => import("@/components/ui/popover/DirectionPopover"),
    ProgrammaticallyShowHidePopover: () =>
      import("@/components/ui/popover/ProgrammaticallyShowHidePopover"),
    ReactivePopover: () => import("@/components/ui/popover/ReactivePopover"),
    VarientPopover: () => import("@/components/ui/popover/VarientPopover"),
  },
};
</script>
