<template>
  <div class="text-center">
    <form-wizard
      @on-complete="onComplete"
      color="#1e88e5"
      :title="null"
      :subtitle="null"
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
      <b-button variant="danger" dark slot="prev">
        <i class="mdi mdi-chevron-left mr-1"></i>
        Back
      </b-button>
      <b-button variant="primary" slot="next">
        Next
        <i class="mdi mdi-chevron-right ml-1"></i>
      </b-button>
      <b-button variant="success" slot="finish">
        Finish
        <i class="mdi mdi-check ml-1"></i>
      </b-button>
    </form-wizard>
  </div>
</template>

<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";

export default {
  name: "FormWizardButtonSlot",
  data: () => ({
    title: "FormWizardButtonSlot",
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