<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Invalid Input with Helper Text -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Invalid Input with Helper Text"
    modalid="modal-33"
    modaltitle="Invalid Input with Helper Text"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-row&gt;
  &lt;b-col sm=&quot;3&quot;&gt;
    &lt;label for=&quot;input-valid&quot;&gt;Invalid State:&lt;/label&gt;
  &lt;/b-col&gt;
  &lt;b-col sm=&quot;9&quot;&gt;
    &lt;b-form-input
      id=&quot;input-invalid2&quot;
      :state=&quot;false&quot;
      placeholder=&quot;Invalid input&quot;
    &gt;&lt;/b-form-input&gt;
    &lt;b-form-invalid-feedback id=&quot;input-live-feedback&quot;&gt;
      Danger State
    &lt;/b-form-invalid-feedback&gt;
  &lt;/b-col&gt;
&lt;/b-row&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-row>
        <b-col sm="3">
          <label for="input-valid">Invalid State:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="input-invalid2"
            :state="false"
            placeholder="Invalid input"
          ></b-form-input>
          <b-form-invalid-feedback id="input-live-feedback">
            Danger State
          </b-form-invalid-feedback>
        </b-col>
      </b-row>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FormControlDangerValidationHelperText",

  data: () => ({}),
  components: { BaseCard },
};
</script>