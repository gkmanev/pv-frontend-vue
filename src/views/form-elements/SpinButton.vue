<template>
  <b-row>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <BasicSpinButton />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <MinMaxStepSpinButton />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <NumberWrapSpinButton />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <InlineSpinButton />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <VerticalSpinButton />
    </b-col>

    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <DisabledReadonlySpinButton />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <EventsSpinButton />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <NumberFormatLocaleSpinButton />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <SizeSpinsButton />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "SpinButton",

  data: () => ({
    page: {
      title: "SpinButton",
    },
  }),
  components: {
    BasicSpinButton: () =>
      import("@/components/forms-element/spin-button/BasicSpinButton"),
    SizeSpinsButton: () =>
      import("@/components/forms-element/spin-button/SizeSpinsButton"),
    EventsSpinButton: () =>
      import("@/components/forms-element/spin-button/EventsSpinButton"),
    MinMaxStepSpinButton: () =>
      import("@/components/forms-element/spin-button/MinMaxStepSpinButton"),
    NumberWrapSpinButton: () =>
      import("@/components/forms-element/spin-button/NumberWrapSpinButton"),
    InlineSpinButton: () =>
      import("@/components/forms-element/spin-button/InlineSpinButton"),
    VerticalSpinButton: () =>
      import("@/components/forms-element/spin-button/VerticalSpinButton"),
    NumberFormatLocaleSpinButton: () =>
      import(
        "@/components/forms-element/spin-button/NumberFormatLocaleSpinButton"
      ),
    DisabledReadonlySpinButton: () =>
      import(
        "@/components/forms-element/spin-button/DisabledReadonlySpinButton"
      ),
  },
};
</script>
