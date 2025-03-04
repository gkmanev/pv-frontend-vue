<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Input Text Bold -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Input Text Bold"
    modalid="modal-18"
    modaltitle="Input Text Bold"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-input
  id=&quot;input-textbold&quot;
  placeholder=&quot;Bold Text&quot;
  class=&quot;font-weight-bold&quot;
&gt;&lt;/b-form-input&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-input
        id="input-textbold"
        placeholder="Bold Text"
        class="font-weight-bold"
      ></b-form-input>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FormControlTextBold",

  data: () => ({}),
  components: { BaseCard },
};
</script>