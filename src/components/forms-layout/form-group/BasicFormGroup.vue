<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Basic Form group -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Basic Form group"
    subtitle="The <b-form-group> component is the easiest way to add some structure to forms."
    modalid="modal-1"
    modaltitle="Basic Form group"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-group
      id=&quot;fieldset-1&quot;
      description=&quot;Let us know your name.&quot;
      label=&quot;Enter your name&quot;
      label-for=&quot;input-1&quot;
      valid-feedback=&quot;Thank you!&quot;
      :invalid-feedback=&quot;invalidFeedback&quot;
      :state=&quot;state&quot;
    &gt;
      &lt;b-form-input id=&quot;input-1&quot; v-model=&quot;name&quot; :state=&quot;state&quot; trim&gt;&lt;/b-form-input&gt;
    &lt;/b-form-group&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    computed: {
      state() {
        return this.name.length &gt;= 4
      },
      invalidFeedback() {
        if (this.name.length &gt; 0) {
          return 'Enter at least 4 characters.'
        }
        return 'Please enter something.'
      }
    },
    data() {
      return {
        name: ''
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
      <b-form-group
        id="fieldset-1"
        description="Let us know your name."
        label="Enter your name"
        label-for="input-1"
        valid-feedback="Thank you!"
        :invalid-feedback="invalidFeedback"
        :state="state"
      >
        <b-form-input
          id="input-1"
          v-model="name"
          :state="state"
          trim
        ></b-form-input>
      </b-form-group>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "BasicFormGroup",

  data: () => ({
    name: "",
  }),
  components: { BaseCard },
  computed: {
    state() {
      return this.name.length >= 4;
    },
    invalidFeedback() {
      if (this.name.length > 0) {
        return "Enter at least 4 characters.";
      }
      return "Please enter something.";
    },
  },
};
</script>