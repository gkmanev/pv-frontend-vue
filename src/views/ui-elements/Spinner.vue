<template>
  <b-row>
    <b-col cols="12" md="4" class="d-flex align-items-stretch">
      <BorderSpinner />
    </b-col>
    <b-col cols="12" md="4" class="d-flex align-items-stretch">
      <GrowSpinner />
    </b-col>
    <b-col cols="12" md="4" class="d-flex align-items-stretch">
      <SizeSpinner />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <SpinnerVarients />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <FlexSpinner />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <FloatSpinner />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <TextalignSpinner />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <ButtonSpinner />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Spinner",

  data: () => ({
    page: {
      title: "Spinner",
    },
  }),
  components: {
    BorderSpinner: () => import("@/components/ui/spinner/BorderSpinner"),
    GrowSpinner: () => import("@/components/ui/spinner/GrowSpinner"),
    SizeSpinner: () => import("@/components/ui/spinner/SizeSpinner"),
    SpinnerVarients: () => import("@/components/ui/spinner/SpinnerVarients"),
    FlexSpinner: () => import("@/components/ui/spinner/FlexSpinner"),
    FloatSpinner: () => import("@/components/ui/spinner/FloatSpinner"),
    TextalignSpinner: () => import("@/components/ui/spinner/TextalignSpinner"),
    ButtonSpinner: () => import("@/components/ui/spinner/ButtonSpinner"),
  },
};
</script>
