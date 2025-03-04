<template>
  <b-row>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <BasicFormGroup />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <HorizontalFormGroup />
    </b-col>
    <b-col cols="12" md="5" class="d-flex align-items-stretch">
      <LabelSizeFormGroup />
    </b-col>
    <b-col cols="12" md="7" class="d-flex align-items-stretch">
      <NestedFormGroup />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "FormGroup",

  data: () => ({
    page: {
      title: "FormGroup",
    },
  }),
  components: {
    BasicFormGroup: () =>
      import("@/components/forms-layout/form-group/BasicFormGroup"),
    HorizontalFormGroup: () =>
      import("@/components/forms-layout/form-group/HorizontalFormGroup"),
    LabelSizeFormGroup: () =>
      import("@/components/forms-layout/form-group/LabelSizeFormGroup"),
    NestedFormGroup: () =>
      import("@/components/forms-layout/form-group/NestedFormGroup"),
  },
};
</script>
