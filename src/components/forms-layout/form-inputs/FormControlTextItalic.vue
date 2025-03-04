<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Input Text Italic -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Input Text Italic"
    modalid="modal-21"
    modaltitle="Input Text Italic"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-input
  id=&quot;input-textitalic&quot;
  placeholder=&quot;Italic Text&quot;
  class=&quot;font-italic&quot;
&gt;&lt;/b-form-input&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-input
        id="input-textitalic"
        placeholder="Italic Text"
        class="font-italic"
      ></b-form-input>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FormControlTextItalic",

  data: () => ({}),
  components: { BaseCard },
};
</script>