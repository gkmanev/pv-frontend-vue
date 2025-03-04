<template>
  <b-row>
    <b-col cols="12" lg="6" xl="4" class="d-flex align-items-stretch">
      <AlertContextual />
    </b-col>
    <b-col cols="12" lg="6" xl="4" class="d-flex align-items-stretch">
      <AlertLinks />
    </b-col>
    <b-col cols="12" lg="6" xl="4" class="d-flex align-items-stretch">
      <AlertDismissible />
    </b-col>
    <b-col cols="12" lg="6" xl="4" class="d-flex align-items-stretch">
      <AlertFade />
    </b-col>
    <b-col cols="12" lg="6" xl="4" class="d-flex align-items-stretch">
      <AlertAutoDismissible />
    </b-col>
    <b-col cols="12" lg="6" xl="4" class="d-flex align-items-stretch">
      <AlertAdditionalContent />
    </b-col>
    <b-col cols="12" lg="6" xl="4" class="d-flex align-items-stretch"></b-col>
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
    AlertContextual: () => import("@/components/ui/alert/AlertContextual"),
    AlertLinks: () => import("@/components/ui/alert/AlertLinks"),
    AlertDismissible: () => import("@/components/ui/alert/AlertDismissible"),
    AlertFade: () => import("@/components/ui/alert/AlertFade"),
    AlertAdditionalContent: () =>
      import("@/components/ui/alert/AlertAdditionalContent"),
    AlertAutoDismissible: () =>
      import("@/components/ui/alert/AlertAutoDismissible"),
  },
};
</script>
