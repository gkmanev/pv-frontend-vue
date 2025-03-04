<template>
  <b-row>
    <b-col cols="12" xl="6" class="d-flex align-items-stretch">
      <BasicJumbotron />
    </b-col>
    <b-col cols="12" xl="6" class="d-flex align-items-stretch">
      <JumbotronSlots />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Jumbotron",

  data: () => ({
    page: {
      title: "Jumbotron",
    },
  }),
  components: {
    BasicJumbotron: () => import("@/components/ui/jumbotron/BasicJumbotron"),
    JumbotronSlots: () => import("@/components/ui/jumbotron/JumbotronSlots"),
  },
};
</script>
