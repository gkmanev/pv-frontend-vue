<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Input Default -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Input Default" modalid="modal-13" modaltitle="Input Default">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-input
  id=&quot;input-default&quot;
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
        id="input-default"
        placeholder="Enter your name"
      ></b-form-input>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FormControlDefault",

  data: () => ({}),
  components: { BaseCard },
};
</script>