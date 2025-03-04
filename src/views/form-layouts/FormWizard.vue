<template>
  <b-row>
    <b-col cols="12">
      <b-card class="mb-4">
        <h4 class="card-title mb-1">Default Form Wizard</h4>
        <p class="text-muted">
          vue-form-wizard is a vue based component with no external depenendcies
          which simplifies tab wizard management and for more details click
          <a
            href="https://www.npmjs.com/package/vue-form-wizard"
            target="_blank"
            >here.</a
          >
        </p>
        <FormWizardIcon></FormWizardIcon>
      </b-card>
    </b-col>

    <b-col cols="12">
      <b-card class="mb-4">
        <h4 class="card-title mb-1">Form Wizard with Square</h4>

        <FormWizardSquare></FormWizardSquare>
      </b-card>
    </b-col>

    <b-col cols="12">
      <b-card class="mb-4">
        <h4 class="card-title mb-1">Form Wizard with Tab</h4>

        <FormWizardTab></FormWizardTab>
      </b-card>
    </b-col>

    <b-col cols="12">
      <b-card class="mb-4">
        <h4 class="card-title mb-1">Form Wizard with Size</h4>

        <FormWizardSize></FormWizardSize>
      </b-card>
    </b-col>

    <b-col cols="12">
      <b-card class="mb-4">
        <h4 class="card-title mb-1">Form Wizard with Step Index</h4>

        <FormWizardIndex></FormWizardIndex>
      </b-card>
    </b-col>

    <b-col cols="12">
      <b-card class="mb-4">
        <h4 class="card-title mb-1">Form Wizard with Custom Text</h4>

        <FormWizardCustomText></FormWizardCustomText>
      </b-card>
    </b-col>

    <b-col cols="12">
      <b-card class="mb-4">
        <h4 class="card-title mb-1">Form Wizard with Title slot</h4>

        <FormWizardTitleSlot></FormWizardTitleSlot>
      </b-card>
    </b-col>

    <b-col cols="12">
      <b-card class="mb-4">
        <h4 class="card-title mb-1">Form Wizard with Title slot</h4>

        <FormWizardTitleSlot></FormWizardTitleSlot>
      </b-card>
    </b-col>

    <b-col cols="12">
      <b-card class="mb-4">
        <h4 class="card-title mb-1">Form Wizard with Button slot</h4>

        <FormWizardButtonSlot></FormWizardButtonSlot>
      </b-card>
    </b-col>

    <b-col cols="12">
      <b-card class="mb-4">
        <h4 class="card-title mb-1">
          Form Wizard with Call funtion before switch
        </h4>

        <FormWizardCallFun></FormWizardCallFun>
      </b-card>
    </b-col>

    <b-col cols="12">
      <b-card class="mb-4">
        <h4 class="card-title mb-1">Form Wizard with Validation</h4>

        <FormWizardValidation></FormWizardValidation>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "FormWizard",

  data: () => ({
    page: {
      title: "FormWizard",
    },
  }),
  components: {
    FormWizardIcon: () =>
      import("@/components/forms-layout/form-wizard/FormWizardIcon"),
    FormWizardSquare: () =>
      import("@/components/forms-layout/form-wizard/FormWizardSquare"),
    FormWizardTab: () =>
      import("@/components/forms-layout/form-wizard/FormWizardTab"),
    FormWizardSize: () =>
      import("@/components/forms-layout/form-wizard/FormWizardSize"),
    FormWizardIndex: () =>
      import("@/components/forms-layout/form-wizard/FormWizardIndex"),
    FormWizardCustomText: () =>
      import("@/components/forms-layout/form-wizard/FormWizardCustomText"),
    FormWizardTitleSlot: () =>
      import("@/components/forms-layout/form-wizard/FormWizardTitleSlot"),
    FormWizardButtonSlot: () =>
      import("@/components/forms-layout/form-wizard/FormWizardButtonSlot"),
    FormWizardCallFun: () =>
      import("@/components/forms-layout/form-wizard/FormWizardCallFun"),
    FormWizardValidation: () =>
      import(
        "@/components/forms-layout/form-wizard/form-wizard-validation/FormWizardValidation"
      ),
  },
};
</script>
