<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Input Text Normal -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Input Text Normal"
    modalid="modal-19"
    modaltitle="Input Text Normal"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-input
  id=&quot;input-textnormal&quot;
  placeholder=&quot;Normal Text&quot;
  class=&quot;font-weight-normal&quot;
&gt;&lt;/b-form-input&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-input
        id="input-textnormal"
        placeholder="Normal Text"
        class="font-weight-normal"
      ></b-form-input>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FormControlTextNormal",

  data: () => ({}),
  components: { BaseCard },
};
</script>