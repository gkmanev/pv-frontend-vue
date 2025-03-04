<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Type Number -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Type Number" modalid="modal-2" modaltitle="Type Number">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-input type=&quot;number&quot; placeholder=&quot;Select Number&quot;&gt;&lt;/b-form-input&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-input type="number" placeholder="Select Number"></b-form-input>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "TypeNumber",

  data: () => ({}),
  components: { BaseCard },
};
</script>