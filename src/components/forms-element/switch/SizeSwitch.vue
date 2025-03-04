<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Switch sizing -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Switch sizing"
    subtitle="Use the size prop to control the size of the switch. The default size is medium. Supported size values are sm (small) and lg (large)."
    modalid="modal-3"
    modaltitle="Switch sizing"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-checkbox switch size=&quot;sm&quot;&gt;Small&lt;/b-form-checkbox&gt;
&lt;b-form-checkbox switch&gt;Default&lt;/b-form-checkbox&gt;
&lt;b-form-checkbox switch size=&quot;lg&quot;&gt;Large&lt;/b-form-checkbox&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-checkbox switch size="sm">Small</b-form-checkbox>
      <b-form-checkbox switch>Default</b-form-checkbox>
      <b-form-checkbox switch size="lg">Large</b-form-checkbox>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "SizeSwitch",

  data: () => ({}),
  components: { BaseCard },
};
</script>