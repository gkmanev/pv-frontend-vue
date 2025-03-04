<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Project Assigning -->
  <!-- ----------------------------------------------------------------------------- -->
  <b-card class="w-100 mb-4" no-body>
    <div class="p-35">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-1">Project Assigning</h4>
          <b-card-text class="text-muted">
            To use add border-bottom py-3 class in the every row styling.
          </b-card-text>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <b-card-body>
      <!-- part 1 start -->
      <h4 class="card-title">Personal Info</h4>
      <b-row class="py-3 align-items-center border-bottom">
        <b-col sm="3" class="text-left text-md-right">
          <label class="fw-medium mb-0" for="fname"> First Name </label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="fname"
            type="text"
            placeholder="First name here"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="py-3 align-items-center border-bottom bg-light">
        <b-col sm="3" class="text-left text-md-right">
          <label class="fw-medium mb-0" for="lname"> Last Name </label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="lname"
            type="text"
            placeholder="Last Name here"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="py-3 align-items-center border-bottom">
        <b-col sm="3" class="text-left text-md-right">
          <label class="fw-medium mb-0" for="lname"> Email </label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="email"
            type="email"
            placeholder="Email here"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="py-3 align-items-center border-bottom bg-light">
        <b-col sm="3" class="text-left text-md-right">
          <label class="fw-medium mb-0" for="contact"> Contact No </label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="contact"
            type="tel"
            placeholder="Contact No here"
          ></b-form-input>
        </b-col>
      </b-row>
      <!-- part 1 end -->
    </b-card-body>
    <b-card-body>
      <!-- part 2 start -->
      <h4 class="card-title">Requirements</h4>
      <b-row class="py-3 align-items-center border-bottom">
        <b-col sm="3" class="text-left text-md-right">
          <label class="fw-medium mb-0" for="company"> Company </label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="company"
            type="text"
            placeholder="Company name here"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="py-3 align-items-center border-bottom bg-light">
        <b-col sm="3" class="text-left text-md-right">
          <label class="fw-medium mb-0" for="interest"> Interested In </label>
        </b-col>
        <b-col sm="9">
          <b-form-select
            v-model="selectinterest"
            :options="interest"
          ></b-form-select>
        </b-col>
      </b-row>
      <b-row class="py-3 align-items-center border-bottom">
        <b-col sm="3" class="text-left text-md-right">
          <label class="fw-medium mb-0" for="budget"> Budget </label>
        </b-col>
        <b-col sm="9">
          <b-form-select
            v-model="selectbudget"
            :options="budget"
          ></b-form-select>
        </b-col>
      </b-row>
      <b-row class="py-3 align-items-center border-bottom bg-light">
        <b-col sm="3" class="text-left text-md-right">
          <label class="fw-medium mb-0" for="file"> Select File </label>
        </b-col>
        <b-col sm="9">
          <b-form-file id="file"></b-form-file>
        </b-col>
      </b-row>
      <b-row class="py-3 align-items-center">
        <b-col sm="3" class="text-left text-md-right">
          <label class="fw-medium mb-0" for="aboutcomp"> About Project </label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="aboutcomp"
            type="text"
            placeholder="About Project here"
          ></b-form-input>
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
  name: "ProjectAssign",

  data: () => ({
    selectinterest: null,
    interest: [
      { value: null, text: "Choose Your Option" },
      { value: "a", text: "Designing" },
      { value: "b", text: "Development" },
      { value: "c", text: "Hacking" },
    ],
    selectbudget: null,
    budget: [
      { value: null, text: "Choose Your Option" },
      { value: "a", text: "Less then $5000" },
      { value: "b", text: "$5000 - $10000" },
      { value: "c", text: "$10000 - $20000" },
    ],
  }),
};
</script>