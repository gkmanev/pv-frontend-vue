<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Form Checkbox Inputs -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Form Checkbox Inputs"
    subtitle="For cross browser consistency, <b-form-checkbox-group> and <b-form-checkbox> use Bootstrap's custom checkbox input to replace the browser default checkbox input."
    modalid="modal-1"
    modaltitle="Form Checkbox Inputs"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-checkbox
      id=&quot;checkbox-1&quot;
      v-model=&quot;status&quot;
      name=&quot;checkbox-1&quot;
      value=&quot;accepted&quot;
      unchecked-value=&quot;not_accepted&quot;
    &gt;
      I accept the terms and use
    &lt;/b-form-checkbox&gt;

    &lt;div&gt;State: &lt;strong&gt;{{ status }}&lt;/strong&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        status: 'not_accepted'
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
      <div>
        <b-form-checkbox
          id="checkbox-1"
          v-model="status"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          I accept the terms and use
        </b-form-checkbox>

        <div>
          State: <strong>{{ status }}</strong>
        </div>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "SingleCheckbox",

  data: () => ({
    status: "not_accepted",
  }),
  components: { BaseCard },
};
</script>