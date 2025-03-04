<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Form Control Lowercase -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Form Control Lowercase"
    modalid="modal-16"
    modaltitle="Form Control Lowercase"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-input
  id=&quot;input-lowercase&quot;
  placeholder=&quot;lowercase&quot;
  class=&quot;text-lowercase&quot;
&gt;&lt;/b-form-input&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-input
        id="input-lowercase"
        placeholder="lowercase"
        class="text-lowercase"
      ></b-form-input>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FormControlLowercase",

  data: () => ({}),
  components: { BaseCard },
};
</script>