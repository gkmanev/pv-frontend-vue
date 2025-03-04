<template>
  <b-row>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <BasicToasts />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <ToastsDemand />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <ToastsVarient />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <ToastsPosition />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <ToastsCloseButton />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <ToastswithLink />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <ToastComponent />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <ToastsCustomContent />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <ToastFixedPosition />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Toasts",

  data: () => ({
    page: {
      title: "Toasts",
    },
  }),
  components: {
    BasicToasts: () => import("@/components/ui/toasts/BasicToasts"),
    ToastsDemand: () => import("@/components/ui/toasts/ToastsDemand"),
    ToastsVarient: () => import("@/components/ui/toasts/ToastsVarient"),
    ToastsPosition: () => import("@/components/ui/toasts/ToastsPosition"),
    ToastsCloseButton: () => import("@/components/ui/toasts/ToastsCloseButton"),
    ToastswithLink: () => import("@/components/ui/toasts/ToastswithLink"),
    ToastComponent: () => import("@/components/ui/toasts/ToastComponent"),
    ToastFixedPosition: () =>
      import("@/components/ui/toasts/ToastFixedPosition"),
    ToastsCustomContent: () =>
      import("@/components/ui/toasts/ToastsCustomContent"),
  },
};
</script>
