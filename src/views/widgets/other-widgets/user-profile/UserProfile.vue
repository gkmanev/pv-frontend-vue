<template>
  <div>
    <div class="d-flex flex-row">
      <div class>
        <img
          src="@/assets/images/users/1.jpg"
          alt="user"
          class="rounded-circle"
          width="100"
        />
      </div>
      <div class="pl-3">
        <h3 class="mb-2">Daniel Kristeen</h3>
        <h6 class="mb-3">UIUX Designer</h6>
        <b-button variant="success"> <i class="ti-plus"></i> Follow </b-button>
      </div>
    </div>
    <b-row class="my-4">
      <b-col cols="4" class="text-center">
        <h2 class="font-weight-light">14</h2>
        <h6>Photos</h6>
      </b-col>
      <b-col cols="4" class="text-center">
        <h2 class="font-weight-light">54</h2>
        <h6>Videos</h6>
      </b-col>
      <b-col cols="4" class="text-center">
        <h2 class="font-weight-light">145</h2>
        <h6>Tasks</h6>
      </b-col>
    </b-row>
    <hr class="custom-hr" />
    <p class="text-center mt-4">
      Lorem ipsum dolor sit ametetur adipisicing elit, sed do eiusmod tempor
      incididunt adipisicing elit, sed do eiusmod tempor incididunLorem ipsum
      dolor sit ametetur adipisicing elit, sed do eiusmod tempor incididuntt
    </p>
    <b-row>
      <b-col cols="4" class="text-center">
        <a
          href="javascript:void(0)"
          v-b-tooltip.hover
          title="Website"
          class="text-muted font-18"
        >
          <i class="ti-world"></i>
        </a>
      </b-col>
      <b-col cols="4" class="text-center">
        <a
          href="javascript:void(0)"
          class="text-muted font-18"
          v-b-tooltip.hover
          title="twitter"
        >
          <i class="ti-twitter"></i>
        </a>
      </b-col>
      <b-col cols="4" class="text-center">
        <a
          href="javascript:void(0)"
          class="text-muted font-18"
          v-b-tooltip.hover
          data-toggle="tooltip"
          title="Facebook"
        >
          <i class="ti-facebook"></i>
        </a>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "UserProfile",
  data: () => ({
    title: "UserProfile",
  }),
};
</script>