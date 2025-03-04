<template>
  <b-row>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <TabstyleNav />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <PillstyleNav />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <SmallNav />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <FillNav />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <JustifyNav />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <AlignmentNav />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <VerticalNav />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <DropdownsupportNav />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <NavtextContent />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <NavInlineForm />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <CardIntegrationNav />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <CardPillNav />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <CardPlainNav />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Nav",

  data: () => ({
    page: {
      title: "Nav",
    },
  }),
  components: {
    TabstyleNav: () => import("@/components/ui/nav/TabstyleNav"),
    PillstyleNav: () => import("@/components/ui/nav/PillstyleNav"),
    SmallNav: () => import("@/components/ui/nav/SmallNav"),
    FillNav: () => import("@/components/ui/nav/FillNav"),
    JustifyNav: () => import("@/components/ui/nav/JustifyNav"),
    AlignmentNav: () => import("@/components/ui/nav/AlignmentNav"),
    VerticalNav: () => import("@/components/ui/nav/VerticalNav"),
    DropdownsupportNav: () => import("@/components/ui/nav/DropdownsupportNav"),
    NavtextContent: () => import("@/components/ui/nav/NavtextContent"),
    NavInlineForm: () => import("@/components/ui/nav/NavInlineForm"),
    CardIntegrationNav: () => import("@/components/ui/nav/CardIntegrationNav"),
    CardPillNav: () => import("@/components/ui/nav/CardPillNav"),
    CardPlainNav: () => import("@/components/ui/nav/CardPlainNav"),
  },
};
</script>
