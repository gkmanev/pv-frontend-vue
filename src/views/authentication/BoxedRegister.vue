<template>
  <div
    id="login"
    style="min-height: calc(100vh - 20px)"
    class="fill-height d-flex align-items-center justify-content-center"
    tag="section"
  >
    <b-row class="justify-content-center no-gutters">
      <b-col lg="9" md="9" class="d-flex align-items-center">
        <b-card no-body>
          <b-row class="no-gutters">
            <b-col lg="5">
              <div class="p-4">
                <img src="@/assets/images/logo-icon.png" />
                <h2 class="font-weight-bold mt-4">Sign Up</h2>
                <h6 class="mb-4">
                  Already have an account ?
                  <b-link to="/authentication/boxedlogin" class>Sign In</b-link>
                </h6>

                <b-form action="/dashboard/classic-dashboard">
                  <b-form-group>
                    <b-form-input
                      id="txt-username"
                      type="text"
                      placeholder="Enter Username"
                      class="mb-3"
                      v-model="$v.form.username.$model"
                      :state="validateState('username')"
                    ></b-form-input>
                    <b-form-invalid-feedback id="txt-username"
                      >This is a required field</b-form-invalid-feedback
                    >
                  </b-form-group>
                  <b-form-group>
                    <b-form-input
                      id="txt-email"
                      type="email"
                      placeholder="Enter Email"
                      class="mb-3"
                      v-model="$v.form.email.$model"
                      :state="validateState('email')"
                    ></b-form-input>
                    <b-form-invalid-feedback id="txt-email"
                      >This is a required field</b-form-invalid-feedback
                    >
                  </b-form-group>
                  <b-form-group>
                    <b-form-input
                      id="txt-pwd"
                      type="password"
                      placeholder="Enter Password"
                      class="mb-3"
                      v-model="$v.form.pwd.$model"
                      :state="validateState('pwd')"
                    ></b-form-input>
                    <b-form-invalid-feedback id="txt-pwd"
                      >This is a required field</b-form-invalid-feedback
                    >
                  </b-form-group>

                  <div class="d-flex align-items-center">
                    <b-form-checkbox
                      id="checkbox-1"
                      v-model="checkbox"
                      name="checkbox-1"
                      value="accepted"
                      unchecked-value="not_accepted"
                    >
                      I accept the terms and use
                    </b-form-checkbox>

                    <div class="ml-auto">
                      <a href="javascript:void(0)" class="link">Forgot pwd?</a>
                    </div>
                  </div>
                  <b-button
                    type="submit"
                    variant="primary"
                    :disabled="$v.form.$invalid"
                    size="lg"
                    block
                    class="mt-4"
                    >Register</b-button
                  >
                </b-form>
                <div
                  class="d-flex align-items-center justify-content-center mt-4"
                >
                  <b-badge
                    href="#"
                    pill
                    variant="info"
                    class="mr-2 px-3 py-2 d-flex align-items-center"
                  >
                    <feather type="twitter" class="feather-sm mr-2"></feather>
                    Twitter
                  </b-badge>
                  <b-badge
                    href="#"
                    pill
                    variant="dark"
                    class="px-3 py-2 d-flex align-items-center"
                  >
                    <feather type="github" class="feather-sm mr-2"></feather
                    >Github
                  </b-badge>
                </div>
              </div>
            </b-col>
            <b-col
              lg="7"
              class="bg-primary d-md-flex align-items-center justify-content-center"
            >
              <div class="d-flex align-items-center">
                <div class="p-5">
                  <div>
                    <h2 class="display-5 text-white fw-medium">
                      Elegant Design with unlimited features, built with love
                    </h2>
                    <p class="mt-4 text-white op-5 font-weight-normal">
                      Wrappixel helps developers to build organized and
                      well-coded admin dashboards full of beautiful and feature
                      rich modules.
                    </p>
                    <b-button
                      size="lg"
                      variant="info"
                      class="mt-4 text-capitalize"
                      >Learn More</b-button
                    >
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  email,
  maxLength,
} from "vuelidate/lib/validators";
export default {
  name: "BoxedRegister",
  mixins: [validationMixin],
  data: () => ({
    form: {
      username: "",
      pwd: "",
      email: "",
    },
    checkbox: false,
  }),
  computed: {},
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(4),
      },
      email: {
        required,
        email,
        maxLength: maxLength(10),
      },
      pwd: {
        required,
        minLength: minLength(8),
      },
    },
  },
  methods: {
    validateState(username) {
      const { $dirty, $error } = this.$v.form[username];
      return $dirty ? !$error : null;
    },
  },
};
</script>
