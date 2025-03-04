<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Form Control Uppercase -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Form Control Uppercase"
    modalid="modal-15"
    modaltitle="Form Control Uppercase"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-input
  id=&quot;input-uppercase&quot;
  placeholder=&quot;UPPERCASE&quot;
  class=&quot;text-uppercase&quot;
&gt;&lt;/b-form-input&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-input
        id="input-uppercase"
        placeholder="UPPERCASE"
        class="text-uppercase"
      ></b-form-input>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FormControlUppercase",

  data: () => ({}),
  components: { BaseCard },
};
</script>