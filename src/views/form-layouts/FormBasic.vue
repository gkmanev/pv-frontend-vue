<template>
  <b-row>
    <b-col cols="12">
      <BasicForm />
      <SampleForm />
      <DisabledForm />
      <DefaultBasicForm />
    </b-col>
    <b-col cols="12" lg="6">
      <LoginForm />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "FormBasic",

  data: () => ({
    page: {
      title: "FormBasic",
    },
  }),
  components: {
    BasicForm: () => import("@/components/forms-layout/form-basic/BasicForm"),
    SampleForm: () => import("@/components/forms-layout/form-basic/SampleForm"),
    DisabledForm: () =>
      import("@/components/forms-layout/form-basic/DisabledForm"),
    LoginForm: () => import("@/components/forms-layout/form-basic/LoginForm"),
    DefaultBasicForm: () =>
      import("@/components/forms-layout/form-basic/DefaultBasicForm"),
  },
};
</script>
