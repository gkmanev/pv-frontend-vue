<template>
  <b-row>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <BasicSkeleton />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <SkeletonTypes />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <SkeletonAnimations />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <SkeletonTables />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <SkeletonImage />
    </b-col>
    <b-col cols="12" xl="6" class="d-flex align-items-stretch">
      <SkeletonCardImage />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Skeleton",

  data: () => ({
    page: {
      title: "Skeleton",
    },
  }),
  components: {
    BasicSkeleton: () => import("@/components/ui/skeleton/BasicSkeleton"),
    SkeletonTypes: () => import("@/components/ui/skeleton/SkeletonTypes"),
    SkeletonTables: () => import("@/components/ui/skeleton/SkeletonTables"),
    SkeletonImage: () => import("@/components/ui/skeleton/SkeletonImage"),
    SkeletonCardImage: () =>
      import("@/components/ui/skeleton/SkeletonCardImage"),
    SkeletonAnimations: () =>
      import("@/components/ui/skeleton/SkeletonAnimations"),
  },
};
</script>
