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
  name: "FormBordered",

  data: () => ({
    page: {
      title: "FormBordered",
    },
  }),
  components: {
    ProjectAssign: () =>
      import("@/components/forms-layout/form-bordered/ProjectAssign"),
    EmployeeProfile: () =>
      import("@/components/forms-layout/form-bordered/EmployeeProfile"),
    EmployeeTiming: () =>
      import("@/components/forms-layout/form-bordered/EmployeeTiming"),
    EventRegistration: () =>
      import("@/components/forms-layout/form-bordered/EventRegistration"),
  },
};
</script>
