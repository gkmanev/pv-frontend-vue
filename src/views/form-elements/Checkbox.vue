<template>
  <b-row>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <SingleCheckbox />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <MultipleChoiceCheckbox />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <ChangeOptionFieldNameCheckbox />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <InlineCheckbox />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <StackedCheckbox />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <CheckboxSize />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <CheckboxwithButton />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <ValidationCheckbox />
    </b-col>

    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <CheckboxGroupButton />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <MultipleInterminateCheckbox />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <IndeterminateCheckbox />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Embed",

  data: () => ({
    page: {
      title: "Embed",
    },
  }),
  components: {
    SingleCheckbox: () =>
      import("@/components/forms-element/checkbox/SingleCheckbox"),
    MultipleChoiceCheckbox: () =>
      import("@/components/forms-element/checkbox/MultipleChoiceCheckbox"),
    ChangeOptionFieldNameCheckbox: () =>
      import(
        "@/components/forms-element/checkbox/ChangeOptionFieldNameCheckbox"
      ),
    InlineCheckbox: () =>
      import("@/components/forms-element/checkbox/InlineCheckbox"),
    StackedCheckbox: () =>
      import("@/components/forms-element/checkbox/StackedCheckbox"),
    CheckboxSize: () =>
      import("@/components/forms-element/checkbox/CheckboxSize"),
    CheckboxwithButton: () =>
      import("@/components/forms-element/checkbox/CheckboxwithButton"),
    CheckboxGroupButton: () =>
      import("@/components/forms-element/checkbox/CheckboxGroupButton"),
    ValidationCheckbox: () =>
      import("@/components/forms-element/checkbox/ValidationCheckbox"),
    IndeterminateCheckbox: () =>
      import("@/components/forms-element/checkbox/IndeterminateCheckbox"),
    MultipleInterminateCheckbox: () =>
      import("@/components/forms-element/checkbox/MultipleInterminateCheckbox"),
  },
};
</script>
