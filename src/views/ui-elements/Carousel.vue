<template>
  <b-row>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <BasicCarousel />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <CarouselAnimation />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <DisabledCarousel />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Carousel",

  data: () => ({
    page: {
      title: "Carousel",
    },
  }),
  components: {
    BasicCarousel: () => import("@/components/ui/carousel/BasicCarousel"),
    CarouselAnimation: () =>
      import("@/components/ui/carousel/CarouselAnimation"),
    DisabledCarousel: () => import("@/components/ui/carousel/DisabledCarousel"),
  },
};
</script>
