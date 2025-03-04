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
  name: "FormRowSeparator",

  data: () => ({
    page: {
      title: "FormRowSeparator",
    },
  }),
  components: {
    ProjectAssign: () =>
      import("@/components/forms-layout/form-row-separator/ProjectAssign"),
    EmployeeProfile: () =>
      import("@/components/forms-layout/form-row-separator/EmployeeProfile"),
    EmployeeTiming: () =>
      import("@/components/forms-layout/form-row-separator/EmployeeTiming"),
    EventRegistration: () =>
      import("@/components/forms-layout/form-row-separator/EventRegistration"),
  },
};
</script>
