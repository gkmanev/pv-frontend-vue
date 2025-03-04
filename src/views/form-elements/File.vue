<template>
  <b-row>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <FileSize />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <ClearFileSelection />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <FormatScopedSlotFile />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "File",

  data: () => ({
    page: {
      title: "File",
    },
  }),
  components: {
    FileSize: () => import("@/components/forms-element/file/FileSize"),
    ClearFileSelection: () =>
      import("@/components/forms-element/file/ClearFileSelection"),
    FormatScopedSlotFile: () =>
      import("@/components/forms-element/file/FormatScopedSlotFile"),
  },
};
</script>
