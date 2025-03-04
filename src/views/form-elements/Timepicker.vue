<template>
  <b-row>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <BasicTimepicker />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <DisabledReadonlyTimepicker />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <ValidationTimepicker />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <SizeTimepicker />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <EnableSecondTimepicker />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <OptionalControlTimepicker />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <ButtonModeTimepicker />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <InternationalizationTimepicker />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Timepicker",

  data: () => ({
    page: {
      title: "Timepicker",
    },
  }),
  components: {
    BasicTimepicker: () =>
      import("@/components/forms-element/timepicker/BasicTimepicker"),
    InternationalizationTimepicker: () =>
      import(
        "@/components/forms-element/timepicker/InternationalizationTimepicker"
      ),
    ButtonModeTimepicker: () =>
      import("@/components/forms-element/timepicker/ButtonModeTimepicker"),
    OptionalControlTimepicker: () =>
      import("@/components/forms-element/timepicker/OptionalControlTimepicker"),
    EnableSecondTimepicker: () =>
      import("@/components/forms-element/timepicker/EnableSecondTimepicker"),
    SizeTimepicker: () =>
      import("@/components/forms-element/timepicker/SizeTimepicker"),
    DisabledReadonlyTimepicker: () =>
      import(
        "@/components/forms-element/timepicker/DisabledReadonlyTimepicker"
      ),
    ValidationTimepicker: () =>
      import("@/components/forms-element/timepicker/ValidationTimepicker"),
  },
};
</script>
