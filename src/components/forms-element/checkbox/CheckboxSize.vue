<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Checkbox Size -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Checkbox Size"
    subtitle="Use the size prop to control the size of the checkbox. The default size is medium. Supported size values are sm (small) and lg (large)."
    modalid="modal-6"
    modaltitle="Checkbox Size"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-checkbox size=&quot;sm&quot;&gt;Small&lt;/b-form-checkbox&gt;
&lt;b-form-checkbox&gt;Default&lt;/b-form-checkbox&gt;
&lt;b-form-checkbox size=&quot;lg&quot;&gt;Large&lt;/b-form-checkbox&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-checkbox size="sm">Small</b-form-checkbox>
      <b-form-checkbox>Default</b-form-checkbox>
      <b-form-checkbox size="lg">Large</b-form-checkbox>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "CheckboxSize",

  data: () => ({
    status: "not_accepted",
  }),
  components: { BaseCard },
};
</script>