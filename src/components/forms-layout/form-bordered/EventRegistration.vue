<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Event Registration -->
  <!-- ----------------------------------------------------------------------------- -->
  <b-card class="w-100 mb-4" no-body>
    <div class="p-35">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-1">Event Registration</h4>
          <b-card-text class="text-muted">
            To use add border-bottom py-3 class in the every row styling.
          </b-card-text>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <b-card-body>
      <!-- part 1 start -->
      <b-row class="align-items-stretch">
        <b-col
          sm="3"
          class="text-left text-md-right border-bottom border-right py-3"
        >
          <label class="fw-medium mb-0" for="fname4"> Full Name </label>
        </b-col>
        <b-col sm="9" class="border-bottom py-2">
          <b-form-input
            id="fname4"
            type="text"
            placeholder="Full name here"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="align-items-stretch">
        <b-col
          sm="3"
          class="text-left text-md-right border-bottom border-right py-3"
        >
          <label class="fw-medium mb-0" for="title4"> Title </label>
        </b-col>
        <b-col sm="9" class="border-bottom py-2">
          <b-form-input
            id="title4"
            type="text"
            placeholder="Title here"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="align-items-stretch">
        <b-col
          sm="3"
          class="text-left text-md-right border-bottom border-right py-3"
        >
          <label class="fw-medium mb-0" for="comp4"> Company </label>
        </b-col>
        <b-col sm="9" class="border-bottom py-2">
          <b-form-input
            id="comp4"
            type="text"
            placeholder="Componay Name here"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="align-items-stretch">
        <b-col
          sm="3"
          class="text-left text-md-right border-bottom border-right py-3"
        >
          <label class="fw-medium mb-0" for="email4"> Email </label>
        </b-col>
        <b-col sm="9" class="border-bottom py-2">
          <b-form-input
            id="email4"
            type="email"
            placeholder="Email here"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="align-items-stretch">
        <b-col
          sm="3"
          class="text-left text-md-right border-bottom border-right py-3"
        >
          <label class="fw-medium mb-0" for="con4"> Contact No </label>
        </b-col>
        <b-col sm="9" class="border-bottom py-2">
          <b-form-input
            id="con4"
            type="tel"
            placeholder="Contact No here"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="align-items-stretch">
        <b-col sm="3" class="text-left text-md-right border-right py-3">
          <label class="fw-medium mb-0" for="cus4"> Existing Customer </label>
        </b-col>
        <b-col sm="9" class="py-2">
          <b-form-radio v-model="selected" name="some-radios" value="yes"
            >Yes</b-form-radio
          >
          <b-form-radio v-model="selected" name="some-radios" value="no"
            >No</b-form-radio
          >
        </b-col>
      </b-row>
      <!-- part 1 end -->
    </b-card-body>
    <div class="p-35 border-top">
      <div class="btn-grp text-right">
        <b-button pill variant="primary" class="px-4">Save</b-button>
        <b-button pill variant="danger" class="px-4">Cancel</b-button>
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
  name: "EventRegistration",

  data: () => ({
    selected: "",
  }),
};
</script>