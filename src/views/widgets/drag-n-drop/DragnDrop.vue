<template>
  <b-row>
    <b-col cols="12">
      <b-card class="mb-4">
        <h5 class="card-title">Basic Drag & Drop</h5>
        <DragnDropBasic></DragnDropBasic>
      </b-card>

      <b-card class="mb-4">
        <h5 class="card-title">Custom Drag n Drop</h5>
        <DragnDropCustom></DragnDropCustom>
      </b-card>

      <b-card class="mb-4">
        <h5 class="card-title">Multiple Drag & Drop</h5>
        <DragnDropMultiple></DragnDropMultiple>
      </b-card>

      <b-card class="mb-4">
        <h5 class="card-title">Animation Drag & Drop</h5>
        <DragnDropAnimation></DragnDropAnimation>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import DragnDropAnimation from "./DragnDropAnimation";
import DragnDropBasic from "./DragnDropBasic";
import DragnDropMultiple from "./DragnDropMultiple";
import DragnDropCustom from "./DragnDropCustom";

export default {
  name: "DragnDrop",

  data: () => ({
    page: {
      title: "DragnDrop",
    },
  }),
  components: {
    DragnDropAnimation,
    DragnDropBasic,
    DragnDropMultiple,
    DragnDropCustom,
  },
};
</script>
