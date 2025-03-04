<template>
  <div class="text-center">
    <b-badge variant="primary" class="m-2">Size with xs</b-badge>
    <form-wizard
      @on-complete="onComplete"
      color="#1e88e5"
      :title="null"
      :subtitle="null"
      step-size="sm"
    >
      <tab-content title="Personal details" icon="mdi mdi-account">
        <span class="font-weight-bold">My first tab content</span>
      </tab-content>
      <tab-content title="Reuirements" icon="mdi mdi-account-settings-variant">
        <span class="font-weight-bold">My second tab content</span>
      </tab-content>
      <tab-content title="Last step" icon="mdi mdi-account-star">
        <span class="font-weight-bold"
          >Yuhuuu! This seems pretty damn simple</span
        >
      </tab-content>
    </form-wizard>
    <hr />
    <b-badge variant="primary" class="m-2">Size with sm</b-badge>
    <form-wizard
      @on-complete="onComplete"
      color="#1e88e5"
      :title="null"
      :subtitle="null"
      step-size="sm"
    >
      <tab-content title="Personal details" icon="mdi mdi-account">
        <span class="font-weight-bold">My first tab content</span>
      </tab-content>
      <tab-content title="Reuirements" icon="mdi mdi-account-settings-variant">
        <span class="font-weight-bold">My second tab content</span>
      </tab-content>
      <tab-content title="Last step" icon="mdi mdi-account-star">
        <span class="font-weight-bold"
          >Yuhuuu! This seems pretty damn simple</span
        >
      </tab-content>
    </form-wizard>
    <hr />
    <b-badge variant="primary" class="m-2">Size with md</b-badge>
    <form-wizard
      @on-complete="onComplete"
      color="#1e88e5"
      :title="null"
      :subtitle="null"
      step-size="md"
    >
      <tab-content title="Personal details" icon="mdi mdi-account">
        <span class="font-weight-bold">My first tab content</span>
      </tab-content>
      <tab-content title="Reuirements" icon="mdi mdi-account-settings-variant">
        <span class="font-weight-bold">My second tab content</span>
      </tab-content>
      <tab-content title="Last step" icon="mdi mdi-account-star">
        <span class="font-weight-bold"
          >Yuhuuu! This seems pretty damn simple</span
        >
      </tab-content>
    </form-wizard>
    <hr />
    <b-badge variant="primary" class="m-2">Size with lg</b-badge>
    <form-wizard
      @on-complete="onComplete"
      color="#1e88e5"
      :title="null"
      :subtitle="null"
      step-size="lg"
    >
      <tab-content title="Personal details" icon="mdi mdi-account">
        <span class="font-weight-bold">My first tab content</span>
      </tab-content>
      <tab-content title="Reuirements" icon="mdi mdi-account-settings-variant">
        <span class="font-weight-bold">My second tab content</span>
      </tab-content>
      <tab-content title="Last step" icon="mdi mdi-account-star">
        <span class="font-weight-bold"
          >Yuhuuu! This seems pretty damn simple</span
        >
      </tab-content>
    </form-wizard>
  </div>
</template>

<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";

export default {
  name: "FormWizardSize",
  data: () => ({
    title: "FormWizardSize",
  }),
  components: {
    FormWizard,
    TabContent,
  },
  methods: {
    onComplete: function () {
      alert("Yay. Done!");
    },
  },
};
</script>