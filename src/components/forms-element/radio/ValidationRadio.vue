<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Contextual state with feedback -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Contextual state with feedback"
    modalid="modal-7"
    modaltitle="Contextual state with feedback"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">

        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-radio-group
        v-model="value"
        :options="options"
        :state="state"
        name="radio-validation"
      >
        <b-form-invalid-feedback :state="state"
          >Please select one</b-form-invalid-feedback
        >
        <b-form-valid-feedback :state="state">Thank you</b-form-valid-feedback>
      </b-form-radio-group>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ValidationRadio",

  data: () => ({
    value: null,
    options: [
      { text: "First radio", value: "first" },
      { text: "Second radio", value: "second" },
      { text: "Third radio", value: "third" },
    ],
  }),
  components: { BaseCard },
  computed: {
    state() {
      return Boolean(this.value);
    },
  },
};
</script>