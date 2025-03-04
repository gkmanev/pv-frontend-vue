
<template>
  <div>
    <div class="card-body">
      <div class="d-flex flex-row">
        <div class="">
          <img
            src="@/assets/images/users/1.jpg"
            alt="user"
            class="rounded-circle"
            width="100"
          />
        </div>
        <div class="ml-3">
          <h3 class="font-weight-medium">Daniel Kristeen</h3>
          <h6>UIUX Designer</h6>
          <b-button variant="light-info" class="text-info">Follow</b-button>
        </div>
      </div>
      <b-row class="mt-4 pt-2">
        <b-col cols="4" class="text-center border-right">
          <h2 class="fw-light">14</h2>
          <h6 class="text-muted">Photos</h6>
        </b-col>
        <b-col cols="4" class="text-center border-right">
          <h2 class="fw-light">54</h2>
          <h6 class="text-muted">Videos</h6>
        </b-col>
        <b-col cols="4" class="text-center">
          <h2 class="fw-light">145</h2>
          <h6 class="text-muted">Tasks</h6>
        </b-col>
      </b-row>
    </div>
    <div class="card-body border-top">
      <p class="text-center text-muted mt-2 pt-1">
        Lorem ipsum dolor sit ametetur adipisicing elit, sed do eiusmod tempor
        incididunt adipisicing elit, sed do eiusmod tempor incididunLorem ipsum
      </p>
      <ul
        class="list-group list-group-horizontal d-flex justify-content-center mt-4 flex-item"
      >
        <li class="list-group-item my-1 border-0">
          <a href="javascript:void(0)" class="text-muted"
            ><feather type="globe" class="ps-2 feather-sm"></feather
          ></a>
        </li>
        <li class="list-group-item my-1 border-0">
          <a href="javascript:void(0)" class="text-muted"
            ><feather type="twitter" class="ps-2 feather-sm"></feather
          ></a>
        </li>
        <li class="list-group-item my-1 border-0">
          <a href="javascript:void(0)" class="text-muted"
            ><feather type="facebook" class="ps-2 feather-sm"></feather
          ></a>
        </li>
        <li class="list-group-item my-1 border-0">
          <a href="javascript:void(0)" class="text-muted"
            ><feather type="youtube" class="ps-2 feather-sm"></feather
          ></a>
        </li>
        <li class="list-group-item my-1 border-0">
          <a href="javascript:void(0)" class="text-muted"
            ><feather type="linkedin" class="ps-2 feather-sm"></feather
          ></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
  data: () => ({
    title: "ProfileCard",
  }),
  components: {},
};
</script>