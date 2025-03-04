<template>
  <b-row>
    <b-col cols="12" md="6" lg="4" class="d-flex align-items-stretch">
      <BasicListGroup />
    </b-col>
    <b-col cols="12" md="6" lg="4" class="d-flex align-items-stretch">
      <ActiveItemListGroup />
    </b-col>
    <b-col cols="12" md="6" lg="4" class="d-flex align-items-stretch">
      <DisabledItemListGroup />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <ActionableListGroup />
    </b-col>

    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <BadgeListGroup />
    </b-col>
    <b-col cols="12" md="6" lg="4" class="d-flex align-items-stretch">
      <ContextualListGroup />
    </b-col>
    <b-col cols="12" md="6" lg="8" class="d-flex align-items-stretch">
      <InsideCardListGroup />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <HorizontalListGroup />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <HorizontalMdupListGroup />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "ListGroup",

  data: () => ({
    page: {
      title: "ListGroup",
    },
  }),
  components: {
    BasicListGroup: () => import("@/components/ui/list-group/BasicListGroup"),
    BadgeListGroup: () => import("@/components/ui/list-group/BadgeListGroup"),
    HorizontalMdupListGroup: () =>
      import("@/components/ui/list-group/HorizontalMdupListGroup"),
    HorizontalListGroup: () =>
      import("@/components/ui/list-group/HorizontalListGroup"),
    InsideCardListGroup: () =>
      import("@/components/ui/list-group/InsideCardListGroup"),
    ContextualListGroup: () =>
      import("@/components/ui/list-group/ContextualListGroup"),
    ActionableListGroup: () =>
      import("@/components/ui/list-group/ActionableListGroup"),
    DisabledItemListGroup: () =>
      import("@/components/ui/list-group/DisabledItemListGroup"),
    ActiveItemListGroup: () =>
      import("@/components/ui/list-group/ActiveItemListGroup"),
  },
};
</script>
