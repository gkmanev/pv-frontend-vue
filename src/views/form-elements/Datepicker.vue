<template>
  <b-row>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <BasicDatepicker />
    </b-col>

    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <DisabledReadonlyDatepicker />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <MinimumMaximumDatepicker />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <DisabledDatesDatepicker />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <ValidationStatesDatepicker />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <DatepickerSize />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <DatepickerOptionalControls />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <ButtonOnlyModeDatepicker />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <DateformatDatepicker />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <FullwidthDropdownDatepicker />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <InternationalizationDatepicker />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Datepicker",

  data: () => ({
    page: {
      title: "Datepicker",
    },
  }),
  components: {
    BasicDatepicker: () =>
      import("@/components/forms-element/datepicker/BasicDatepicker"),
    InternationalizationDatepicker: () =>
      import(
        "@/components/forms-element/datepicker/InternationalizationDatepicker"
      ),
    FullwidthDropdownDatepicker: () =>
      import(
        "@/components/forms-element/datepicker/FullwidthDropdownDatepicker"
      ),
    ButtonOnlyModeDatepicker: () =>
      import("@/components/forms-element/datepicker/ButtonOnlyModeDatepicker"),
    DatepickerOptionalControls: () =>
      import(
        "@/components/forms-element/datepicker/DatepickerOptionalControls"
      ),
    DatepickerSize: () =>
      import("@/components/forms-element/datepicker/DatepickerSize"),
    DisabledDatesDatepicker: () =>
      import("@/components/forms-element/datepicker/DisabledDatesDatepicker"),
    DisabledReadonlyDatepicker: () =>
      import(
        "@/components/forms-element/datepicker/DisabledReadonlyDatepicker"
      ),
    MinimumMaximumDatepicker: () =>
      import("@/components/forms-element/datepicker/MinimumMaximumDatepicker"),
    ValidationStatesDatepicker: () =>
      import(
        "@/components/forms-element/datepicker/ValidationStatesDatepicker"
      ),
    DateformatDatepicker: () =>
      import("@/components/forms-element/datepicker/DateformatDatepicker"),
  },
};
</script>
