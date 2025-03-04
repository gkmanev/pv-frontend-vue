<template>
  <b-row>
    <b-col cols="12" lg="12">
      <ProjectAssign />
      <EmployeeProfile />
      <EmployeeTiming />
      <EventRegistration />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "FormStripedRow",

  data: () => ({
    page: {
      title: "FormStripedRow",
    },
  }),
  components: {
    ProjectAssign: () =>
      import("@/components/forms-layout/form-striped-row/ProjectAssign"),
    EmployeeProfile: () =>
      import("@/components/forms-layout/form-striped-row/EmployeeProfile"),
    EmployeeTiming: () =>
      import("@/components/forms-layout/form-striped-row/EmployeeTiming"),
    EventRegistration: () =>
      import("@/components/forms-layout/form-striped-row/EventRegistration"),
  },
};
</script>
