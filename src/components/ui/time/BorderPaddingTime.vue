<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Border and padding -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Border and padding"
    subtitle="Fancy a time control with a border with padding? Use Bootstrap's border and padding utility classes to add borders and padding"
    modalid="modal-2"
    modaltitle="Border and padding"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-time class=&quot;border rounded p-2&quot; locale=&quot;en&quot;&gt;&lt;/b-time&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-time class="border rounded p-2" locale="en"></b-time>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "BorderPaddingTime",

  data: () => ({}),
  components: { BaseCard },
};
</script>