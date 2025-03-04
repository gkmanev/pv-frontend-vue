<template>
  <b-row>
    <b-col cols="12" md="6" lg="4" class="d-flex align-items-stretch">
      <ResponsiveImage />
    </b-col>
    <b-col cols="12" md="6" lg="4" class="d-flex align-items-stretch">
      <SmallFluid />
    </b-col>
    <b-col cols="12" md="6" lg="4" class="d-flex align-items-stretch">
      <SmallFluidGrow />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <ImageThumbnails />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <RoundedCorners />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <AlignImage />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <SolidImages />
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
    ResponsiveImage: () => import("@/components/ui/image/ResponsiveImage"),
    SmallFluid: () => import("@/components/ui/image/SmallFluid"),
    SmallFluidGrow: () => import("@/components/ui/image/SmallFluidGrow"),
    ImageThumbnails: () => import("@/components/ui/image/ImageThumbnails"),
    RoundedCorners: () => import("@/components/ui/image/RoundedCorners"),
    AlignImage: () => import("@/components/ui/image/AlignImage"),
    SolidImages: () => import("@/components/ui/image/SolidImages"),
  },
};
</script>
