<template>
  <b-row>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <ProgressLabels />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <CustomProgressLabels />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <WidthHeightProgress />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <ProgressBackground />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <ProgressStripedBackground />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <ProgressAnimation />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <MultipleProgress />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Progress",

  data: () => ({
    page: {
      title: "Progress",
    },
  }),
  components: {
    ProgressLabels: () => import("@/components/ui/progress/ProgressLabels"),
    MultipleProgress: () => import("@/components/ui/progress/MultipleProgress"),
    CustomProgressLabels: () =>
      import("@/components/ui/progress/CustomProgressLabels"),
    WidthHeightProgress: () =>
      import("@/components/ui/progress/WidthHeightProgress"),
    ProgressAnimation: () =>
      import("@/components/ui/progress/ProgressAnimation"),
    ProgressStripedBackground: () =>
      import("@/components/ui/progress/ProgressStripedBackground"),
    ProgressBackground: () =>
      import("@/components/ui/progress/ProgressBackground"),
  },
};
</script>
