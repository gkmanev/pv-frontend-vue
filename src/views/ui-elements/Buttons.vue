<template>
  <b-row>
    <b-col cols="12" class="d-flex align-items-stretch">
      <SolidButtons />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <OutlineButtons />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <LightButtons />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <PillButtons />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <PillOutlineButtons />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <PillLightButtons />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <DisabledButtons />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <SquareButtons />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <SquareOutlineButtons />
    </b-col>
    <b-col cols="12" md="4" xl="4" class="d-flex align-items-stretch">
      <BlockButtons />
    </b-col>
    <b-col cols="12" md="4" xl="4" class="d-flex align-items-stretch">
      <SizeButtons />
    </b-col>
    <b-col cols="12" md="4" xl="4" class="d-flex align-items-stretch">
      <ButtonGroup />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Buttons",

  data: () => ({
    page: {
      title: "Buttons",
    },
  }),
  components: {
    SolidButtons: () => import("@/components/ui/buttons/SolidButtons"),
    OutlineButtons: () => import("@/components/ui/buttons/OutlineButtons"),
    LightButtons: () => import("@/components/ui/buttons/LightButtons"),
    PillButtons: () => import("@/components/ui/buttons/PillButtons"),
    PillLightButtons: () => import("@/components/ui/buttons/PillLightButtons"),
    DisabledButtons: () => import("@/components/ui/buttons/DisabledButtons"),
    SquareButtons: () => import("@/components/ui/buttons/SquareButtons"),
    BlockButtons: () => import("@/components/ui/buttons/BlockButtons"),
    SizeButtons: () => import("@/components/ui/buttons/SizeButtons"),
    ButtonGroup: () => import("@/components/ui/buttons/ButtonGroup"),
    SquareOutlineButtons: () =>
      import("@/components/ui/buttons/SquareOutlineButtons"),
    PillOutlineButtons: () =>
      import("@/components/ui/buttons/PillOutlineButtons"),
  },
};
</script>
