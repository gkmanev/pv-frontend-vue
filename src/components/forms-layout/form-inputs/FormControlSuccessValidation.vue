<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Input With Success -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Input With Success"
    modalid="modal-32"
    modaltitle="Input With Success"
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
      id=&quot;input-valid&quot;
      :state=&quot;true&quot;
      placeholder=&quot;Valid input&quot;
    &gt;&lt;/b-form-input&gt;
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
            id="input-valid"
            :state="true"
            placeholder="Valid input"
          ></b-form-input>
        </b-col>
      </b-row>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FormControlSuccessValidation",

  data: () => ({}),
  components: { BaseCard },
};
</script>