<template>
  <b-row>
    <b-col cols="12" class="d-flex align-items-stretch">
      <BasicModal />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <VarientModal />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <ModalSize />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <FormModal />
    </b-col>
    <b-col cols="12" md="4" class="d-flex align-items-stretch">
      <ScrollLongContentModal />
    </b-col>
    <b-col cols="12" md="4" class="d-flex align-items-stretch">
      <InnerScrollLongContentModal />
    </b-col>
    <b-col cols="12" md="4" class="d-flex align-items-stretch">
      <FooterButtonSizing />
    </b-col>
    <b-col cols="12" md="4" class="d-flex align-items-stretch">
      <CustomSlotsModal />
    </b-col>
    <b-col cols="12" md="4" class="d-flex align-items-stretch">
      <MultipleModal />
    </b-col>
    <b-col cols="12" md="4" class="d-flex align-items-stretch">
      <OkayMsgModal />
    </b-col>
    <b-col cols="12" md="4" class="d-flex align-items-stretch">
      <ConfirmMsgboxModal />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Modal",

  data: () => ({
    page: {
      title: "Modal",
    },
  }),
  components: {
    BasicModal: () => import("@/components/ui/modal/BasicModal"),
    FormModal: () => import("@/components/ui/modal/FormModal"),
    ModalSize: () => import("@/components/ui/modal/ModalSize"),
    VarientModal: () => import("@/components/ui/modal/VarientModal"),
    CustomSlotsModal: () => import("@/components/ui/modal/CustomSlotsModal"),
    MultipleModal: () => import("@/components/ui/modal/MultipleModal"),
    OkayMsgModal: () => import("@/components/ui/modal/OkayMsgModal"),
    ConfirmMsgboxModal: () =>
      import("@/components/ui/modal/ConfirmMsgboxModal"),
    FooterButtonSizing: () =>
      import("@/components/ui/modal/FooterButtonSizing"),
    InnerScrollLongContentModal: () =>
      import("@/components/ui/modal/InnerScrollLongContentModal"),
    ScrollLongContentModal: () =>
      import("@/components/ui/modal/ScrollLongContentModal"),
  },
};
</script>
