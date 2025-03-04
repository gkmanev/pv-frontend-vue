<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Valid Input with Helper Text -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Valid Input with Helper Text"
    modalid="modal-34"
    modaltitle="Valid Input with Helper Text"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-row&gt;
  &lt;b-col sm=&quot;3&quot;&gt;
    &lt;label for=&quot;input-valid&quot;&gt;Valid State:&lt;/label&gt;
  &lt;/b-col&gt;
  &lt;b-col sm=&quot;9&quot;&gt;
    &lt;b-form-input
      id=&quot;input-calid2&quot;
      :state=&quot;true&quot;
      placeholder=&quot;Valid input&quot;
    &gt;&lt;/b-form-input&gt;
    &lt;b-form-valid-feedback id=&quot;input-live-feedback2&quot;&gt;
      Suucess State
    &lt;/b-form-valid-feedback&gt;
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
          <label for="input-valid">Valid State:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="input-calid2"
            :state="true"
            placeholder="Valid input"
          ></b-form-input>
          <b-form-valid-feedback id="input-live-feedback2">
            Suucess State
          </b-form-valid-feedback>
        </b-col>
      </b-row>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FormControlSuccessValidationHelperText",

  data: () => ({}),
  components: { BaseCard },
};
</script>