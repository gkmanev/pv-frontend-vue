<template>
  <b-row>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <BasicTextarea />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <DisableResizeTextarea />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <SizeTextarea />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <AutoheightTextarea />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <ContextualStatesTextarea />
    </b-col>

    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <DebounceTextarea />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <FormatterTextarea />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Textarea",

  data: () => ({
    page: {
      title: "Textarea",
    },
  }),
  components: {
    BasicTextarea: () =>
      import("@/components/forms-element/textarea/BasicTextarea"),
    DisableResizeTextarea: () =>
      import("@/components/forms-element/textarea/DisableResizeTextarea"),
    SizeTextarea: () =>
      import("@/components/forms-element/textarea/SizeTextarea"),
    AutoheightTextarea: () =>
      import("@/components/forms-element/textarea/AutoheightTextarea"),
    ContextualStatesTextarea: () =>
      import("@/components/forms-element/textarea/ContextualStatesTextarea"),
    FormatterTextarea: () =>
      import("@/components/forms-element/textarea/FormatterTextarea"),
    DebounceTextarea: () =>
      import("@/components/forms-element/textarea/DebounceTextarea"),
  },
};
</script>
