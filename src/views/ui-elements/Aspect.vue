<template>
  <b-row>
    <b-col cols="12" class="d-flex align-items-stretch">
      <AspectBasic />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Alerts",

  data: () => ({
    page: {
      title: "Alerts",
    },
  }),
  components: {
    AspectBasic: () => import("@/components/ui/aspect/AspectBasic"),
  },
};
</script>
