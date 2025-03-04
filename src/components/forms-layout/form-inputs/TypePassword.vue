<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Type Password -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Type Password" modalid="modal-4" modaltitle="Type Password">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-input
  type=&quot;password&quot;
  placeholder=&quot;Enter your Password&quot;
&gt;&lt;/b-form-input&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-input
        type="password"
        placeholder="Enter your Password"
      ></b-form-input>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "TypePassword",

  data: () => ({}),
  components: { BaseCard },
};
</script>