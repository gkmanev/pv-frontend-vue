<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Type Text -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Type Text" modalid="modal-1" modaltitle="Type Text">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-input placeholder=&quot;Enter your name&quot;&gt;&lt;/b-form-input&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-input placeholder="Enter your name"></b-form-input>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "TypeText",

  data: () => ({}),
  components: { BaseCard },
};
</script>