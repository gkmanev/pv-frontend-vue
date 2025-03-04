<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Type Search -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Type Search" modalid="modal-5" modaltitle="Type Search">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-input type=&quot;search&quot; placeholder=&quot;Search here&quot;&gt;&lt;/b-form-input&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-input type="search" placeholder="Search here"></b-form-input>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "TypeSearch",

  data: () => ({}),
  components: { BaseCard },
};
</script>