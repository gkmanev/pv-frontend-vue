<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Input Small -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Input Small" modalid="modal-12" modaltitle="Input Small">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-input
  id=&quot;input-small&quot;
  size=&quot;sm&quot;
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
        id="input-small"
        size="sm"
        placeholder="Enter your name"
      ></b-form-input>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FormControlSm",

  data: () => ({}),
  components: { BaseCard },
};
</script>