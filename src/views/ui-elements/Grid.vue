<template>
  <b-row>
    <b-col cols="12" class="d-flex align-items-stretch">
      <BasicGrid />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Grid",

  data: () => ({
    page: {
      title: "Grid",
    },
  }),
  components: {
    BasicGrid: () => import("@/components/ui/grid/BasicGrid"),
  },
};
</script>
