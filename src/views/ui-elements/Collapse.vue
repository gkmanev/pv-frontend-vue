<template>
  <b-row>
    <b-col cols="12" md="6" xl="4" lg="4" class="d-flex align-items-stretch">
      <BasicCollpase />
    </b-col>
    <b-col cols="12" md="6" xl="4" lg="4" class="d-flex align-items-stretch">
      <InitialVisibilityCollpase />
    </b-col>
    <b-col cols="12" md="6" xl="4" lg="4" class="d-flex align-items-stretch">
      <VmodalSupportCollapse />
    </b-col>
    <b-col cols="12" md="6" xl="4" lg="6" class="d-flex align-items-stretch">
      <MultipleTriggerCollapse />
    </b-col>
    <b-col cols="12" md="6" xl="4" lg="6" class="d-flex align-items-stretch">
      <Accordian />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Collpase",

  data: () => ({
    page: {
      title: "Collpase",
    },
  }),
  components: {
    BasicCollpase: () => import("@/components/ui/collapse/BasicCollpase"),
    Accordian: () => import("@/components/ui/collapse/Accordian"),
    MultipleTriggerCollapse: () =>
      import("@/components/ui/collapse/MultipleTriggerCollapse"),
    VmodalSupportCollapse: () =>
      import("@/components/ui/collapse/VmodalSupportCollapse"),
    InitialVisibilityCollpase: () =>
      import("@/components/ui/collapse/InitialVisibilityCollpase"),
  },
};
</script>
