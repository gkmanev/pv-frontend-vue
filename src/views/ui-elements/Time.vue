<template>
  <b-row>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <BasicTime />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <DisabledReadonlyTime />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <EnableSecondTime />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <BorderPaddingTime />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <DefaultSlotTime />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <InternationalizationTime />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Time",

  data: () => ({
    page: {
      title: "Time",
    },
  }),
  components: {
    BasicTime: () => import("@/components/ui/time/BasicTime"),
    EnableSecondTime: () => import("@/components/ui/time/EnableSecondTime"),
    BorderPaddingTime: () => import("@/components/ui/time/BorderPaddingTime"),
    DefaultSlotTime: () => import("@/components/ui/time/DefaultSlotTime"),
    InternationalizationTime: () =>
      import("@/components/ui/time/InternationalizationTime"),
    DisabledReadonlyTime: () =>
      import("@/components/ui/time/DisabledReadonlyTime"),
  },
};
</script>
