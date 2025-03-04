<template>
  <b-row>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <BasicButtonToolbar />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <InputGroupButtonToolbar />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <DropdownButtonToolbar />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "ButtonToolbar",

  data: () => ({
    page: {
      title: "ButtonToolbar",
    },
  }),
  components: {
    BasicButtonToolbar: () =>
      import("@/components/ui/button-toolbar/BasicButtonToolbar"),
    InputGroupButtonToolbar: () =>
      import("@/components/ui/button-toolbar/InputGroupButtonToolbar"),
    DropdownButtonToolbar: () =>
      import("@/components/ui/button-toolbar/DropdownButtonToolbar"),
  },
};
</script>
