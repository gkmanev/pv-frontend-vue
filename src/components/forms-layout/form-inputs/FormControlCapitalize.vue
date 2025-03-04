<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Form Control Capitalize -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Form Control Capitalize"
    modalid="modal-17"
    modaltitle="Form Control Capitalize"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-input
  id=&quot;input-capitalize&quot;
  placeholder=&quot;capitalize&quot;
  class=&quot;text-capitalize&quot;
&gt;&lt;/b-form-input&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-input
        id="input-capitalize"
        placeholder="capitalize"
        class="text-capitalize"
      ></b-form-input>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FormControlCapitalize",

  data: () => ({}),
  components: { BaseCard },
};
</script>