<template>
  <div>
    <ul class="list-inline mt-3 mb-2">
      <li>
        <div class="d-flex align-items-center">
          <div>
            <h6 class="mb-0 font-weight-bold">
              A
              <span class="font-weight-light">30 Minutes</span>
            </h6>
          </div>
          <div class="ml-auto">
            <h6 class="mb-0 font-weight-bold">55%</h6>
          </div>
        </div>
        <b-progress
          variant="primary"
          value="55"
          max="100"
          class="mt-2"
        ></b-progress>
      </li>
      <li class="mt-4">
        <div class="d-flex align-items-center">
          <div>
            <h6 class="mb-0 font-weight-bold">
              B
              <span class="font-weight-light">More than 30 minutes</span>
            </h6>
          </div>
          <div class="ml-auto">
            <h6 class="mb-0 font-weight-bold">20%</h6>
          </div>
        </div>
        <b-progress
          variant="success"
          value="20"
          max="100"
          class="mt-2"
        ></b-progress>
      </li>
      <li class="mt-4">
        <div class="d-flex align-items-center">
          <div>
            <h6 class="mb-0 font-weight-bold">
              C
              <span class="font-weight-light">1 Hour</span>
            </h6>
          </div>
          <div class="ml-auto">
            <h6 class="mb-0 font-weight-bold">15%</h6>
          </div>
        </div>
        <b-progress
          variant="danger"
          value="15"
          max="100"
          class="mt-2"
        ></b-progress>
      </li>
      <li class="mt-4">
        <div class="d-flex align-items-center">
          <div>
            <h6 class="mb-0 font-weight-bold">
              D
              <span class="font-weight-light">More than 1 hour</span>
            </h6>
          </div>
          <div class="ml-auto">
            <h6 class="mb-0 font-weight-bold">10%</h6>
          </div>
        </div>
        <b-progress
          variant="warning"
          value="10"
          max="100"
          class="mt-2"
        ></b-progress>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "ResultPoll",
  data: () => ({
    title: "ResultPoll",
  }),
};
</script>