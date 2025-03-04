<template>
  <b-row>
    <b-col cols="12" xl="6" class="d-flex align-items-stretch">
      <BasicMedia />
    </b-col>
    <b-col cols="12" xl="6" class="d-flex align-items-stretch">
      <NoBodyMedia />
    </b-col>
    <b-col cols="12" xl="6" class="d-flex align-items-stretch">
      <OrderMedia />
    </b-col>
    <b-col cols="12" xl="6" class="d-flex align-items-stretch">
      <MediaList />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Media",

  data: () => ({
    page: {
      title: "Media",
    },
  }),
  components: {
    BasicMedia: () => import("@/components/ui/media/BasicMedia"),
    NoBodyMedia: () => import("@/components/ui/media/NoBodyMedia"),
    OrderMedia: () => import("@/components/ui/media/OrderMedia"),
    MediaList: () => import("@/components/ui/media/MediaList"),
  },
};
</script>
