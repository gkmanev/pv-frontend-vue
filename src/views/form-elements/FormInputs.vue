<template>
  <div>
    <h4 class="card-title">Input Type</h4>
    <b-row>
      <b-col cols="12" md="6" lg="4" class="d-flex align-items-stretch">
        <TypeText />
      </b-col>
      <b-col cols="12" md="6" lg="4" class="d-flex align-items-stretch">
        <TypeNumber />
      </b-col>
      <b-col cols="12" md="6" lg="4" class="d-flex align-items-stretch">
        <TypeEmail />
      </b-col>
      <b-col cols="12" md="6" lg="4" class="d-flex align-items-stretch">
        <TypePassword />
      </b-col>
      <b-col cols="12" md="6" lg="4" class="d-flex align-items-stretch">
        <TypeSearch />
      </b-col>
      <b-col cols="12" md="6" lg="4" class="d-flex align-items-stretch">
        <TypeUrl />
      </b-col>
      <b-col cols="12" md="6" lg="4" class="d-flex align-items-stretch">
        <TypeTel />
      </b-col>
      <b-col cols="12" md="6" lg="4" class="d-flex align-items-stretch">
        <TypeDate />
      </b-col>
      <b-col cols="12" md="6" lg="4" class="d-flex align-items-stretch">
        <TypeTime />
      </b-col>
      <b-col cols="12" md="6" lg="4" class="d-flex align-items-stretch">
        <TypeRange />
      </b-col>
      <b-col cols="12" md="6" lg="4" class="d-flex align-items-stretch">
        <TypeColor />
      </b-col>
    </b-row>
    <h4 class="card-title mt-4">Input Sizing</h4>
    <b-row>
      <b-col cols="12" md="6" lg="4" class="d-flex align-items-stretch">
        <FormControlSm />
      </b-col>
      <b-col cols="12" md="6" lg="4" class="d-flex align-items-stretch">
        <FormControlDefault />
      </b-col>
      <b-col cols="12" md="6" lg="4" class="d-flex align-items-stretch">
        <FormControlLg />
      </b-col>
    </b-row>
    <h4 class="card-title mt-4">Input Text Styles</h4>
    <b-row>
      <b-col cols="12" md="6" lg="4" class="d-flex align-items-stretch">
        <FormControlUppercase />
      </b-col>
      <b-col cols="12" md="6" lg="4" class="d-flex align-items-stretch">
        <FormControlLowercase />
      </b-col>
      <b-col cols="12" md="6" lg="4" class="d-flex align-items-stretch">
        <FormControlCapitalize />
      </b-col>
      <b-col cols="12" md="6" lg="3" class="d-flex align-items-stretch">
        <FormControlTextBold />
      </b-col>
      <b-col cols="12" md="6" lg="3" class="d-flex align-items-stretch">
        <FormControlTextNormal />
      </b-col>
      <b-col cols="12" md="6" lg="3" class="d-flex align-items-stretch">
        <FormControlTextLight />
      </b-col>
      <b-col cols="12" md="6" lg="3" class="d-flex align-items-stretch">
        <FormControlTextItalic />
      </b-col>
    </b-row>
    <h4 class="card-title mt-4">Input with Tooltip</h4>
    <b-row>
      <b-col cols="12" md="6" lg="3" class="d-flex align-items-stretch">
        <FormControlTopTooltip />
      </b-col>
      <b-col cols="12" md="6" lg="3" class="d-flex align-items-stretch">
        <FormControlBottomTooltip />
      </b-col>
      <b-col cols="12" md="6" lg="3" class="d-flex align-items-stretch">
        <FormControlRightTooltip />
      </b-col>
      <b-col cols="12" md="6" lg="3" class="d-flex align-items-stretch">
        <FormControlLeftTooltip />
      </b-col>
      <b-col cols="12" md="6" lg="3" class="d-flex align-items-stretch">
        <FormControlPrimaryTooltip />
      </b-col>
      <b-col cols="12" md="6" lg="3" class="d-flex align-items-stretch">
        <FormControlInfoTooltip />
      </b-col>
      <b-col cols="12" md="6" lg="3" class="d-flex align-items-stretch">
        <FormControlDangerTooltip />
      </b-col>
      <b-col cols="12" md="6" lg="3" class="d-flex align-items-stretch">
        <FormControlWarningTooltip />
      </b-col>
      <b-col cols="12" md="6" lg="3" class="d-flex align-items-stretch">
        <FormControlSecondaryTooltip />
      </b-col>
      <b-col cols="12" md="6" lg="3" class="d-flex align-items-stretch">
        <FormControlSuccessTooltip />
      </b-col>
    </b-row>
    <h4 class="card-title mt-4">Input with Validation</h4>
    <b-row>
      <b-col cols="12" md="6" class="d-flex align-items-stretch">
        <FormControlDangerValidation />
      </b-col>
      <b-col cols="12" md="6" class="d-flex align-items-stretch">
        <FormControlSuccessValidation />
      </b-col>
      <b-col cols="12" md="6" class="d-flex align-items-stretch">
        <FormControlDangerValidationHelperText />
      </b-col>
      <b-col cols="12" md="6" class="d-flex align-items-stretch">
        <FormControlSuccessValidationHelperText />
      </b-col>
    </b-row>
    <h4 class="card-title mt-4">Input with Vue Features</h4>
    <b-row>
      <b-col cols="12" md="6" class="d-flex align-items-stretch">
        <FormControlDatalist />
      </b-col>
      <b-col cols="12" md="6" class="d-flex align-items-stretch">
        <FormControlDebounce />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "FormInputs",

  data: () => ({
    page: {
      title: "FormInputs",
    },
  }),
  components: {
    TypeText: () => import("@/components/forms-layout/form-inputs/TypeText"),
    TypeEmail: () => import("@/components/forms-layout/form-inputs/TypeEmail"),
    TypeUrl: () => import("@/components/forms-layout/form-inputs/TypeUrl"),
    TypeTel: () => import("@/components/forms-layout/form-inputs/TypeTel"),
    TypeDate: () => import("@/components/forms-layout/form-inputs/TypeDate"),
    TypeTime: () => import("@/components/forms-layout/form-inputs/TypeTime"),
    TypeRange: () => import("@/components/forms-layout/form-inputs/TypeRange"),
    TypeColor: () => import("@/components/forms-layout/form-inputs/TypeColor"),
    FormControlDebounce: () =>
      import("@/components/forms-layout/form-inputs/FormControlDebounce"),
    FormControlDatalist: () =>
      import("@/components/forms-layout/form-inputs/FormControlDatalist"),
    FormControlSuccessValidationHelperText: () =>
      import(
        "@/components/forms-layout/form-inputs/FormControlSuccessValidationHelperText"
      ),
    FormControlDangerValidationHelperText: () =>
      import(
        "@/components/forms-layout/form-inputs/FormControlDangerValidationHelperText"
      ),
    FormControlSuccessValidation: () =>
      import(
        "@/components/forms-layout/form-inputs/FormControlSuccessValidation"
      ),
    FormControlDangerValidation: () =>
      import(
        "@/components/forms-layout/form-inputs/FormControlDangerValidation"
      ),
    FormControlSuccessTooltip: () =>
      import("@/components/forms-layout/form-inputs/FormControlSuccessTooltip"),
    FormControlSecondaryTooltip: () =>
      import(
        "@/components/forms-layout/form-inputs/FormControlSecondaryTooltip"
      ),
    FormControlWarningTooltip: () =>
      import("@/components/forms-layout/form-inputs/FormControlWarningTooltip"),
    FormControlDangerTooltip: () =>
      import("@/components/forms-layout/form-inputs/FormControlDangerTooltip"),
    FormControlInfoTooltip: () =>
      import("@/components/forms-layout/form-inputs/FormControlInfoTooltip"),
    FormControlPrimaryTooltip: () =>
      import("@/components/forms-layout/form-inputs/FormControlPrimaryTooltip"),
    FormControlRightTooltip: () =>
      import("@/components/forms-layout/form-inputs/FormControlRightTooltip"),
    FormControlLeftTooltip: () =>
      import("@/components/forms-layout/form-inputs/FormControlLeftTooltip"),
    FormControlBottomTooltip: () =>
      import("@/components/forms-layout/form-inputs/FormControlBottomTooltip"),
    FormControlTopTooltip: () =>
      import("@/components/forms-layout/form-inputs/FormControlTopTooltip"),
    FormControlTextItalic: () =>
      import("@/components/forms-layout/form-inputs/FormControlTextItalic"),
    FormControlTextLight: () =>
      import("@/components/forms-layout/form-inputs/FormControlTextLight"),
    FormControlTextNormal: () =>
      import("@/components/forms-layout/form-inputs/FormControlTextNormal"),
    FormControlTextBold: () =>
      import("@/components/forms-layout/form-inputs/FormControlTextBold"),
    FormControlCapitalize: () =>
      import("@/components/forms-layout/form-inputs/FormControlCapitalize"),
    FormControlLowercase: () =>
      import("@/components/forms-layout/form-inputs/FormControlLowercase"),
    FormControlUppercase: () =>
      import("@/components/forms-layout/form-inputs/FormControlUppercase"),
    FormControlLg: () =>
      import("@/components/forms-layout/form-inputs/FormControlLg"),
    FormControlDefault: () =>
      import("@/components/forms-layout/form-inputs/FormControlDefault"),
    FormControlSm: () =>
      import("@/components/forms-layout/form-inputs/FormControlSm"),
    TypeSearch: () =>
      import("@/components/forms-layout/form-inputs/TypeSearch"),
    TypePassword: () =>
      import("@/components/forms-layout/form-inputs/TypePassword"),
    TypeNumber: () =>
      import("@/components/forms-layout/form-inputs/TypeNumber"),
  },
};
</script>
