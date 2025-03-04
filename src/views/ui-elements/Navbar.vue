<template>
  <b-row>
    <b-col cols="12" class="d-flex align-items-stretch">
      <BasicNavbar />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <CustomNavbarToggle />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Navbar",

  data: () => ({
    page: {
      title: "Navbar",
    },
  }),
  components: {
    BasicNavbar: () => import("@/components/ui/navbar/BasicNavbar"),
    CustomNavbarToggle: () =>
      import("@/components/ui/navbar/CustomNavbarToggle"),
  },
};
</script>
