<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Employee Profile -->
  <!-- ----------------------------------------------------------------------------- -->
  <b-card class="w-100 mb-4" no-body>
    <div class="p-35">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-1">Employee Profile</h4>
          <b-card-text class="text-muted">
            To use add bg-light py-3 class in the every row styling.
          </b-card-text>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <b-card-body>
      <!-- part 1 start -->
      <b-row>
        <!-- part 1(1) -->
        <b-col md="6">
          <b-row class="align-items-stretch">
            <b-col
              sm="3"
              class="text-left text-md-right py-3 border-right border-bottom"
            >
              <label class="fw-medium mb-0" for="fname2"> First Name </label>
            </b-col>
            <b-col sm="9" class="border-bottom py-2">
              <b-form-input
                id="fname2"
                type="text"
                placeholder="First name here"
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="align-items-stretch">
            <b-col sm="3" class="text-left text-md-right py-3 border-right">
              <label class="fw-medium mb-0" for="uname2"> Username </label>
            </b-col>
            <b-col sm="9" class="py-2">
              <b-form-input
                id="uname2"
                type="text"
                placeholder="Username here"
              ></b-form-input>
            </b-col>
          </b-row>
        </b-col>
        <!-- part 1(2) -->
        <b-col md="6">
          <b-row class="align-items-stretch">
            <b-col
              sm="3"
              class="text-left text-md-right py-3 border-right border-bottom"
            >
              <label class="fw-medium mb-0" for="lname2"> Last Name </label>
            </b-col>
            <b-col sm="9" class="border-bottom py-2">
              <b-form-input
                id="lname2"
                type="text"
                placeholder="Last name here"
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="align-items-stretch">
            <b-col sm="3" class="text-left text-md-right py-3 border-right">
              <label class="fw-medium mb-0" for="nname2"> Nick Name </label>
            </b-col>
            <b-col sm="9" class="py-2">
              <b-form-input
                name="nname2"
                type="text"
                placeholder="Nick Name here"
              ></b-form-input>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <!-- part 1 end -->
    </b-card-body>
    <b-card-body class="bg-light">
      <!-- part 2 start -->
      <h4 class="card-title">Contact Info & Bio</h4>
      <b-row>
        <!-- part 2(1) -->
        <b-col md="6">
          <b-row class="align-items-stretch">
            <b-col
              sm="3"
              class="text-left text-md-right py-3 border-right border-bottom"
            >
              <label class="fw-medium mb-0" for="email2"> Email </label>
            </b-col>
            <b-col sm="9" class="border-bottom py-2">
              <b-form-input
                id="email2"
                type="email"
                placeholder="Email here"
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="align-items-stretch">
            <b-col sm="3" class="text-left text-md-right py-3 border-right">
              <label class="fw-medium mb-0" for="contact2"> Contact No </label>
            </b-col>
            <b-col sm="9" class="py-2">
              <b-form-input
                id="contact2"
                type="tel"
                placeholder="Contact No here"
              ></b-form-input>
            </b-col>
          </b-row>
        </b-col>
        <!-- part 2(2) -->
        <b-col md="6">
          <b-row class="align-items-stretch">
            <b-col
              sm="3"
              class="text-left text-md-right py-3 border-right border-bottom"
            >
              <label class="fw-medium mb-0" for="web2"> Website </label>
            </b-col>
            <b-col sm="9" class="border-bottom py-2">
              <b-form-input
                id="web2"
                type="url"
                placeholder="https://"
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="align-items-stretch">
            <b-col sm="3" class="text-left text-md-right py-3 border-right">
              <label class="fw-medium mb-0" for="bio2"> Bio </label>
            </b-col>
            <b-col sm="9" class="py-2">
              <b-form-input
                id="bio2"
                type="text"
                placeholder="Bio here"
              ></b-form-input>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
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
  name: "EmployeeProfile",

  data: () => ({}),
};
</script>