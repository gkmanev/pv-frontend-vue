<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Input Large -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Input Large" modalid="modal-14" modaltitle="Input Large">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-input
  id=&quot;input-large&quot;
  size=&quot;lg&quot;
  placeholder=&quot;Enter your name&quot;
&gt;&lt;/b-form-input&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-input
        id="input-large"
        size="lg"
        placeholder="Enter your name"
      ></b-form-input>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FormControlLg",

  data: () => ({}),
  components: { BaseCard },
};
</script>