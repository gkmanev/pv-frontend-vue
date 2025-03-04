<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Single Switch -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Single Switch"
    subtitle="Switch styling is supported on <b-form-checkbox> and <b-form-checkbox-group> components."
    modalid="modal-1"
    modaltitle="Single Switch"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-checkbox v-model=&quot;checked&quot; name=&quot;check-button&quot; switch&gt;
      Switch Checkbox &lt;b&gt;(Checked: {{ checked }})&lt;/b&gt;
    &lt;/b-form-checkbox&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        checked: false
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
      <b-form-checkbox v-model="checked" name="check-button" switch>
        Switch Checkbox <b>(Checked: {{ checked }})</b>
      </b-form-checkbox>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "SingleSwitch",

  data: () => ({
    checked: false,
  }),
  components: { BaseCard },
};
</script>