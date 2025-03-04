<template>
  <b-row>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <SingleSwitch />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <SizeSwitch />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <GroupSwitch />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Switch",

  data: () => ({
    page: {
      title: "Switch",
    },
  }),
  components: {
    SingleSwitch: () =>
      import("@/components/forms-element/switch/SingleSwitch"),
    GroupSwitch: () => import("@/components/forms-element/switch/GroupSwitch"),
    SizeSwitch: () => import("@/components/forms-element/switch/SizeSwitch"),
  },
};
</script>
