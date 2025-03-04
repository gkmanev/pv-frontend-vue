<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Input Text Light -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Input Text Light"
    modalid="modal-20"
    modaltitle="Input Text Light"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-input
  id=&quot;input-textlight&quot;
  placeholder=&quot;Light Text&quot;
  class=&quot;font-weight-light&quot;
&gt;&lt;/b-form-input&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-input
        id="input-textlight"
        placeholder="Light Text"
        class="font-weight-light"
      ></b-form-input>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FormControlTextLight",

  data: () => ({}),
  components: { BaseCard },
};
</script>