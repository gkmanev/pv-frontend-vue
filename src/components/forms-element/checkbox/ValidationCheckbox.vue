<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Contextual state and validation -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Contextual state and validation"
    modalid="modal-9"
    modaltitle="Contextual state and validation"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-checkbox-group
      v-model=&quot;value&quot;
      :options=&quot;options&quot;
      :state=&quot;state&quot;
      name=&quot;checkbox-validation&quot;
    &gt;
      &lt;b-form-invalid-feedback :state=&quot;state&quot;&gt;Please select two&lt;/b-form-invalid-feedback&gt;
      &lt;b-form-valid-feedback :state=&quot;state&quot;&gt;Thank you&lt;/b-form-valid-feedback&gt;
    &lt;/b-form-checkbox-group&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: [],
        options: [
          { text: 'First Check', value: 'first' },
          { text: 'Second Check', value: 'second' },
          { text: 'Third Check', value: 'third' }
        ]
      }
    },
    computed: {
      state() {
        return this.value.length === 2
      }
    }
  }
&lt;/script&gt;

        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-checkbox-group
        v-model="value"
        :options="options"
        :state="state"
        name="checkbox-validation"
      >
        <b-form-invalid-feedback :state="state"
          >Please select two</b-form-invalid-feedback
        >
        <b-form-valid-feedback :state="state">Thank you</b-form-valid-feedback>
      </b-form-checkbox-group>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ValidationCheckbox",

  data: () => ({
    value: [],
    options: [
      { text: "First Check", value: "first" },
      { text: "Second Check", value: "second" },
      { text: "Third Check", value: "third" },
    ],
  }),
  components: { BaseCard },
  computed: {
    state() {
      return this.value.length === 2;
    },
  },
};
</script>