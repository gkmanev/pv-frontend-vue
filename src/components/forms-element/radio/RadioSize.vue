<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Radio Size -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Radio Size"
    subtitle="Use the size prop to control the size of the radio. The default size is medium. Supported size values are sm (small) and lg (large)."
    modalid="modal-5"
    modaltitle="Radio Size"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-radio name=&quot;radio-size&quot; size=&quot;sm&quot;&gt;Small&lt;/b-form-radio&gt;
&lt;b-form-radio name=&quot;radio-size&quot;&gt;Default&lt;/b-form-radio&gt;
&lt;b-form-radio name=&quot;radio-size&quot; size=&quot;lg&quot;&gt;Large&lt;/b-form-radio&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-radio name="radio-size" size="sm">Small</b-form-radio>
      <b-form-radio name="radio-size">Default</b-form-radio>
      <b-form-radio name="radio-size" size="lg">Large</b-form-radio>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "RadioSize",

  data: () => ({
    status: "not_accepted",
  }),
  components: { BaseCard },
};
</script>