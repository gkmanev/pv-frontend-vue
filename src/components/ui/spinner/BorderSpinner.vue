<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Border spinner -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Border spinner"
    subtitle="Use the default border type spinners for a lightweight loading indicator."
    modalid="modal-1"
    modaltitle="Border spinner"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-spinner label=&quot;Loading...&quot;&gt;&lt;/b-spinner&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-spinner label="Loading..."></b-spinner>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "BorderSpinner",

  data: () => ({}),
  components: { BaseCard },
};
</script>