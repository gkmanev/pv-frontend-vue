<template>
  <b-row>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <BasicSelect />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <OptionspropSelect />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <ChangeOptionFieldNamesSelect />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <StandardSelect />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <SelectSizing />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <MultipleSelect />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Select",

  data: () => ({
    page: {
      title: "Select",
    },
  }),
  components: {
    BasicSelect: () => import("@/components/forms-element/select/BasicSelect"),
    MultipleSelect: () =>
      import("@/components/forms-element/select/MultipleSelect"),
    SelectSizing: () =>
      import("@/components/forms-element/select/SelectSizing"),
    StandardSelect: () =>
      import("@/components/forms-element/select/StandardSelect"),
    ChangeOptionFieldNamesSelect: () =>
      import("@/components/forms-element/select/ChangeOptionFieldNamesSelect"),
    OptionspropSelect: () =>
      import("@/components/forms-element/select/OptionspropSelect"),
  },
};
</script>
