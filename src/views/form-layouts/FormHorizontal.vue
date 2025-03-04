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
  name: "FormHorizontal",

  data: () => ({
    page: {
      title: "FormHorizontal",
    },
  }),
  components: {
    ProjectAssign: () =>
      import("@/components/forms-layout/form-horizontal/ProjectAssign"),
    EmployeeProfile: () =>
      import("@/components/forms-layout/form-horizontal/EmployeeProfile"),
    EmployeeTiming: () =>
      import("@/components/forms-layout/form-horizontal/EmployeeTiming"),
    EventRegistration: () =>
      import("@/components/forms-layout/form-horizontal/EventRegistration"),
  },
};
</script>
