<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Input With Danger -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Input With Danger"
    modalid="modal-31"
    modaltitle="Input With Danger"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-row&gt;
  &lt;b-col sm=&quot;3&quot;&gt;
    &lt;label for=&quot;input-invalid&quot;&gt;Invalid State:&lt;/label&gt;
  &lt;/b-col&gt;
  &lt;b-col sm=&quot;9&quot;&gt;
    &lt;b-form-input
      id=&quot;input-invalid&quot;
      :state=&quot;false&quot;
      placeholder=&quot;Invalid input&quot;
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
          <label for="input-invalid">Invalid State:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="input-invalid"
            :state="false"
            placeholder="Invalid input"
          ></b-form-input>
        </b-col>
      </b-row>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FormControlDangerValidation",

  data: () => ({}),
  components: { BaseCard },
};
</script>