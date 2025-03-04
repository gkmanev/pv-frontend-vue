<template>
  <div>
    <ul class="list-inline mt-3 mb-2">
      <li class="mb-4">
        <h2 class="mb-0">6350</h2>
        <small class="fw-medium">From India</small>
        <div class="float-right">
          48%
          <i class="mdi mdi-arrow-up text-success"></i>
        </div>
        <b-progress
          variant="primary"
          value="48"
          max="100"
          class="mt-1"
        ></b-progress>
      </li>
      <li class="mb-4">
        <h2 class="mb-0">3250</h2>
        <small class="fw-medium">From UAE</small>
        <div class="float-right">
          98%
          <i class="mdi mdi-arrow-up text-success"></i>
        </div>
        <b-progress
          variant="success"
          value="98"
          max="100"
          class="mt-1"
        ></b-progress>
      </li>
      <li class="mb-4">
        <h2 class="mb-0">1250</h2>
        <small class="fw-medium">From Australia</small>
        <div class="float-right">
          75%
          <i class="mdi mdi-arrow-down text-danger"></i>
        </div>
        <b-progress
          variant="danger"
          value="75"
          max="100"
          class="mt-1"
        ></b-progress>
      </li>
      <li class="mb-4">
        <h2 class="mb-0">1350</h2>
        <small class="fw-medium">From USA</small>
        <div class="float-right">
          48%
          <i class="mdi mdi-arrow-up text-success"></i>
        </div>
        <b-progress
          variant="warning"
          value="48"
          max="100"
          class="mt-1"
        ></b-progress>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "VisitCountry",
  data: () => ({
    title: "VisitCountry",
  }),
};
</script>