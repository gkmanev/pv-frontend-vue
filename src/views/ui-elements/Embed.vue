<template>
  <b-row>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <BasicEmbed />
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
    BasicEmbed: () => import("@/components/ui/embed/BasicEmbed"),
  },
};
</script>
