<template>
  <div>
    <div class="profile-pic mb-3 mt-3">
      <img
        src="@/assets/images/users/5.jpg"
        width="150"
        class="rounded-circle"
        alt="user"
      />
      <h4 class="mt-3 mb-0">Daniel Kristeen</h4>
      <a href="mailto:danielkristeen@gmail.com">danielkristeen@gmail.com</a>
    </div>
    <div class="d-flex justify-content-center">
      <div class="badge badge-pill badge-light px-3 py-2">Dashboard</div>
      <div class="badge badge-pill badge-light px-3 py-2">UI</div>
      <div class="badge badge-pill badge-light px-3 py-2">UX</div>

      <div
        class="badge badge-pill badge-primary px-3 py-2"
        v-b-tooltip.hover
        title="3 more"
      >
        +3
      </div>
    </div>
    <hr class="custom-hr" />
    <div class="px-3 py-2">
      <b-row>
        <b-col cols="6" class="text-center border-right">
          <a
            href="#"
            class="text-dark fw-medium d-flex align-items-center justify-content-center"
          >
            <i class="mdi mdi-message mr-1"></i>Message
          </a>
        </b-col>
        <b-col cols="6" class="text-center">
          <a
            href="#"
            class="text-dark fw-medium d-flex align-items-center justify-content-center"
          >
            <i class="mdi mdi-developer-board mr-1"></i>Portfolio
          </a>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "FollowProfile",
  data: () => ({
    title: "FollowProfile",
  }),
};
</script>