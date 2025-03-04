<template>
  <b-row>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <SingleRadio />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <ChangeOptionFieldNameRadio />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <GroupedRadio />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <InlineStackedRadio />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <RadioSize />
    </b-col>

    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <ValidationRadio />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <RadiowithButton />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Radio",

  data: () => ({
    page: {
      title: "Radio",
    },
  }),
  components: {
    SingleRadio: () => import("@/components/forms-element/radio/SingleRadio"),
    GroupedRadio: () => import("@/components/forms-element/radio/GroupedRadio"),
    RadioSize: () => import("@/components/forms-element/radio/RadioSize"),
    ValidationRadio: () =>
      import("@/components/forms-element/radio/ValidationRadio"),
    RadiowithButton: () =>
      import("@/components/forms-element/radio/RadiowithButton"),
    InlineStackedRadio: () =>
      import("@/components/forms-element/radio/InlineStackedRadio"),
    ChangeOptionFieldNameRadio: () =>
      import("@/components/forms-element/radio/ChangeOptionFieldNameRadio"),
  },
};
</script>
