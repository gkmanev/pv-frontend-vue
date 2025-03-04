<template>
  <b-row>
    <b-col cols="12" class="d-flex align-items-stretch">
      <CardImg />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <BasicCard />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <CardImgPosition />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <CardOverlayImg />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <CardHeaderFooter />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <CardKichenSink />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <HorizontalCard />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <CardTextVarients />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <CardUserProfile />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <CardColoredBordered />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <CardHeaderFooterVarients />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <CardwithNav />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <CardGroup />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <CardDeckGroup />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <CardColumnGroups />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Cards",

  data: () => ({
    page: {
      title: "Cards",
    },
  }),
  components: {
    CardImg: () => import("@/components/ui/card/CardImg"),
    BasicCard: () => import("@/components/ui/card/BasicCard"),
    CardImgPosition: () => import("@/components/ui/card/CardImgPosition"),
    CardOverlayImg: () => import("@/components/ui/card/CardOverlayImg"),
    CardHeaderFooter: () => import("@/components/ui/card/CardHeaderFooter"),
    CardKichenSink: () => import("@/components/ui/card/CardKichenSink"),
    HorizontalCard: () => import("@/components/ui/card/HorizontalCard"),
    CardTextVarients: () => import("@/components/ui/card/CardTextVarients"),
    CardUserProfile: () => import("@/components/ui/card/CardUserProfile"),
    CardColoredBordered: () =>
      import("@/components/ui/card/CardColoredBordered"),
    CardHeaderFooterVarients: () =>
      import("@/components/ui/card/CardHeaderFooterVarients"),
    CardwithNav: () => import("@/components/ui/card/CardwithNav"),
    CardGroup: () => import("@/components/ui/card/CardGroup"),
    CardDeckGroup: () => import("@/components/ui/card/CardDeckGroup"),
    CardColumnGroups: () => import("@/components/ui/card/CardColumnGroups"),
  },
};
</script>
