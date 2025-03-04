<template>
  <b-row>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <BasicTags />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <SeperatorTags />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <BackspacePressTags />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <VarientTags />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <ValidationTags />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <DetectNewInvalidDuplicateTags />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <LimitTags />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <NativeTags />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <CustomFormComponentsTags />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <SelectTags />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <AdvanceRenderTags />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <DropdownTags />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Tags",

  data: () => ({
    page: {
      title: "Tags",
    },
  }),
  components: {
    BasicTags: () => import("@/components/forms-element/tags/BasicTags"),
    VarientTags: () => import("@/components/forms-element/tags/VarientTags"),
    LimitTags: () => import("@/components/forms-element/tags/LimitTags"),
    NativeTags: () => import("@/components/forms-element/tags/NativeTags"),
    SelectTags: () => import("@/components/forms-element/tags/SelectTags"),
    DropdownTags: () => import("@/components/forms-element/tags/DropdownTags"),
    AdvanceRenderTags: () =>
      import("@/components/forms-element/tags/AdvanceRenderTags"),
    CustomFormComponentsTags: () =>
      import("@/components/forms-element/tags/CustomFormComponentsTags"),
    DetectNewInvalidDuplicateTags: () =>
      import("@/components/forms-element/tags/DetectNewInvalidDuplicateTags"),
    ValidationTags: () =>
      import("@/components/forms-element/tags/ValidationTags"),
    BackspacePressTags: () =>
      import("@/components/forms-element/tags/BackspacePressTags"),
    SeperatorTags: () =>
      import("@/components/forms-element/tags/SeperatorTags"),
  },
};
</script>
