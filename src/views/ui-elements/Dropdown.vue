<template>
  <b-row>
    <b-col cols="12" class="d-flex align-items-stretch">
      <BasicDropdown />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <SliptDropdown />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <SliptDropdownLink />
    </b-col>
    <b-col cols="12" lg="6" xl="4" class="d-flex align-items-stretch">
      <DropdownButtonContent />
    </b-col>
    <b-col cols="12" lg="6" xl="4" class="d-flex align-items-stretch">
      <DropdownMenuAlignment />
    </b-col>
    <b-col cols="12" lg="6" xl="4" class="d-flex align-items-stretch">
      <DropdownPosition />
    </b-col>
    <b-col cols="12" lg="6" xl="4" class="d-flex align-items-stretch">
      <DrodownMenuOffset />
    </b-col>
    <b-col cols="12" lg="6" xl="4" class="d-flex align-items-stretch">
      <DropdownSize />
    </b-col>
    <b-col cols="12" lg="6" xl="4" class="d-flex align-items-stretch">
      <DropdownBlock />
    </b-col>
    <b-col cols="12" lg="4" xl="3" class="d-flex align-items-stretch">
      <DropdownText />
    </b-col>
    <b-col cols="12" lg="4" xl="3" class="d-flex align-items-stretch">
      <DropdownForm />
    </b-col>
    <b-col cols="12" lg="4" xl="3" class="d-flex align-items-stretch">
      <DropdownGroup />
    </b-col>
    <b-col cols="12" lg="4" xl="3" class="d-flex align-items-stretch">
      <DropdownHeader />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Breadcrumb",

  data: () => ({
    page: {
      title: "Breadcrumb",
    },
  }),
  components: {
    BasicDropdown: () => import("@/components/ui/dropdown/BasicDropdown"),
    SliptDropdown: () => import("@/components/ui/dropdown/SliptDropdown"),
    DropdownSize: () => import("@/components/ui/dropdown/DropdownSize"),
    DropdownBlock: () => import("@/components/ui/dropdown/DropdownBlock"),
    DropdownText: () => import("@/components/ui/dropdown/DropdownText"),
    DropdownForm: () => import("@/components/ui/dropdown/DropdownForm"),
    DropdownGroup: () => import("@/components/ui/dropdown/DropdownGroup"),
    DropdownHeader: () => import("@/components/ui/dropdown/DropdownHeader"),
    SliptDropdownLink: () =>
      import("@/components/ui/dropdown/SliptDropdownLink"),
    DropdownPosition: () => import("@/components/ui/dropdown/DropdownPosition"),
    DrodownMenuOffset: () =>
      import("@/components/ui/dropdown/DrodownMenuOffset"),
    DropdownMenuAlignment: () =>
      import("@/components/ui/dropdown/DropdownMenuAlignment"),
    DropdownButtonContent: () =>
      import("@/components/ui/dropdown/DropdownButtonContent"),
  },
};
</script>
