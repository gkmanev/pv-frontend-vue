<template>
  <b-row>
    <b-col cols="12" class="d-flex align-items-stretch">
      <BasicButtonGroup />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <SizeButtonGroup />
    </b-col>
    <b-col cols="12" lg="6" class="d-flex align-items-stretch">
      <VerticalVariationButtonGroup />
    </b-col>
    <b-col cols="12" lg="6" class="d-flex align-items-stretch">
      <DropdownButtonGroup />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "ButtonGroup",

  data: () => ({
    page: {
      title: "ButtonGroup",
    },
  }),
  components: {
    BasicButtonGroup: () =>
      import("@/components/ui/button-group/BasicButtonGroup"),
    SizeButtonGroup: () =>
      import("@/components/ui/button-group/SizeButtonGroup"),
    VerticalVariationButtonGroup: () =>
      import("@/components/ui/button-group/VerticalVariationButtonGroup"),
    DropdownButtonGroup: () =>
      import("@/components/ui/button-group/DropdownButtonGroup"),
  },
};
</script>
