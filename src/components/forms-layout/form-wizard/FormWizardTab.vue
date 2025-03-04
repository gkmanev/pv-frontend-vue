<template>
  <div>
    <form-wizard
      @on-complete="onComplete"
      color="#1e88e5"
      :title="null"
      :subtitle="null"
      shape="tab"
    >
      <tab-content title="Personal details" icon="mdi mdi-account">
        <b-row>
          <b-col lg="6" cols="12" sm="6">
            <b-row class="mt-4">
              <b-col
                lg="3"
                cols="12"
                sm="4"
                class="d-flex align-center justify-start justify-md-end py-0"
              >
                <label class="text-truncate mb-0">First Name :</label>
              </b-col>
              <b-col lg="9" cols="12" sm="8" class="py-0">
                <b-form-input
                  placeholder="First Name Here"
                  v-model="project1"
                  class="mt-0"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row class="mt-4">
              <b-col
                lg="3"
                cols="12"
                sm="4"
                class="d-flex align-center justify-start justify-md-end py-0"
              >
                <label class="text-truncate mb-0">Last Name :</label>
              </b-col>
              <b-col lg="9" cols="12" sm="8" class="py-0">
                <b-form-input
                  placeholder="Last Name Here"
                  v-model="project2"
                  class="mt-0"
                ></b-form-input>
              </b-col>
            </b-row>
          </b-col>
          <b-col lg="6" cols="12" sm="6">
            <b-row class="mt-4">
              <b-col
                lg="3"
                cols="12"
                sm="4"
                class="d-flex align-center justify-start justify-md-end py-0"
              >
                <label class="text-truncate mb-0">Email :</label>
              </b-col>
              <b-col lg="9" cols="12" sm="8" class="py-0">
                <b-form-input
                  type="email"
                  placeholder="Email Here"
                  v-model="project3"
                  class="mt-0"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row class="mt-4">
              <b-col
                lg="3"
                cols="12"
                sm="4"
                class="d-flex align--center justify-start justify-md-end py-0"
              >
                <label class="text-truncate mb-0">Contact No :</label>
              </b-col>
              <b-col lg="9" cols="12" sm="8" class="py-0">
                <b-form-input
                  type="tel"
                  placeholder="Contact No Here"
                  v-model="project4"
                  class="mt-0"
                ></b-form-input>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </tab-content>
      <tab-content title="Reuirements" icon="mdi mdi-account-settings-variant">
        <b-row>
          <b-col lg="6" cols="12" sm="6">
            <b-row class="mt-4">
              <b-col
                lg="3"
                cols="12"
                sm="4"
                class="d-flex align-center justify-start justify-md-end py-0"
              >
                <label class="text-truncate mb-0">Company :</label>
              </b-col>
              <b-col lg="9" cols="12" sm="8" class="py-0">
                <b-form-input
                  placeholder="Company Name Here"
                  v-model="project5"
                  class="mt-0"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row class="mt-4">
              <b-col
                lg="3"
                cols="12"
                sm="4"
                class="d-flex align-center justify-start justify-md-end py-0"
              >
                <label class="text-truncate mb-0">Interested In :</label>
              </b-col>
              <b-col lg="9" cols="12" sm="8" class="py-0">
                <b-form-select
                  :options="items3"
                  filled
                  v-model="projectselect6"
                  class="mt-0"
                ></b-form-select>
              </b-col>
            </b-row>
          </b-col>
          <b-col vs-lg="6" vs-xs="12" vs-sm="6">
            <b-row class="mt-4">
              <b-col
                lg="3"
                cols="12"
                sm="4"
                class="d-flex align-center justify-start justify-md-end py-0"
              >
                <label class="text-truncate mb-0">Budget :</label>
              </b-col>
              <b-col lg="9" cols="12" sm="8" class="py-0">
                <b-form-select
                  :options="items4"
                  filled
                  v-model="projectselect7"
                  class="mt-0"
                ></b-form-select>
              </b-col>
            </b-row>
            <b-row class="mt-4">
              <b-col
                lg="3"
                cols="12"
                sm="4"
                class="d-flex align-center justify-start justify-md-end py-0"
              >
                <label class="text-truncate mb-0">About Project :</label>
              </b-col>
              <b-col lg="9" cols="12" sm="8" class="py-0">
                <b-form-input
                  placeholder="About Project Here"
                  v-model="project8"
                  class="mt-0"
                ></b-form-input>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </tab-content>
      <tab-content title="Last step" icon="mdi mdi-account-star">
        <b-row class="mt-4">
          <b-col lg="2" cols="12" sm="4">
            <label class="text-truncate mb-0">Total Experience :</label>
          </b-col>
          <b-col lg="9" cols="12" sm="8">
            <div class="d-block float-left">
              <b-form-group>
                <b-form-radio
                  v-model="selected3"
                  name="some-radios"
                  value="radio-1"
                  >1 Year</b-form-radio
                >
                <b-form-radio
                  v-model="selected3"
                  name="some-radios"
                  value="radio-2"
                  >2 Years</b-form-radio
                >
                <b-form-radio
                  v-model="selected3"
                  name="some-radios"
                  value="radio-3"
                  >3 Years</b-form-radio
                >
                <b-form-radio
                  v-model="selected3"
                  name="some-radios"
                  value="radio-4"
                  >4 Years</b-form-radio
                >
                <b-form-radio
                  v-model="selected3"
                  name="some-radios"
                  value="radio-5"
                  >5 Years</b-form-radio
                >
              </b-form-group>
            </div>
          </b-col>
        </b-row>
      </tab-content>
    </form-wizard>
  </div>
</template>

<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";

export default {
  name: "FormWizardTab",
  data: () => ({
    title: "FormWizardTab",
    project1: "",
    project2: "",
    project3: "",
    project4: "",
    project5: "",
    projectselect6: 0,
    projectselect7: 0,
    project8: "",
    event6: "",
    items3: ["Choose Your option", "Designing", "Development"],
    items4: ["Choose Your option", "Less than $5000", "$5000 to $10000"],
    selected3: "",
  }),
  methods: {
    onComplete: function () {
      alert("Yay. Done!");
    },
  },
  components: {
    FormWizard,
    TabContent,
  },
};
</script>