<template>
  <b-row>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <BasicOverlay />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <OverlayBackdrop />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <FadeOverlay />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <OverlayCornerRound />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <CustomOverlay />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <NowrapOverlay />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <LoadingButtonOverlay />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <BusyStateInputGroupOverlay />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <FormConfirmationOverlay />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Overlay",

  data: () => ({
    page: {
      title: "Overlay",
    },
  }),
  components: {
    BasicOverlay: () => import("@/components/ui/overlay/BasicOverlay"),
    OverlayBackdrop: () => import("@/components/ui/overlay/OverlayBackdrop"),
    FadeOverlay: () => import("@/components/ui/overlay/FadeOverlay"),
    CustomOverlay: () => import("@/components/ui/overlay/CustomOverlay"),
    NowrapOverlay: () => import("@/components/ui/overlay/NowrapOverlay"),
    FormConfirmationOverlay: () =>
      import("@/components/ui/overlay/FormConfirmationOverlay"),
    BusyStateInputGroupOverlay: () =>
      import("@/components/ui/overlay/BusyStateInputGroupOverlay"),
    LoadingButtonOverlay: () =>
      import("@/components/ui/overlay/LoadingButtonOverlay"),
    OverlayCornerRound: () =>
      import("@/components/ui/overlay/OverlayCornerRound"),
  },
};
</script>
