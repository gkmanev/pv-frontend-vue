<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Input with Bottom Tooltip -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Bottom Tooltip"
    modalid="modal-23"
    modaltitle="Bottom Tooltip"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-input
  v-b-tooltip.hover.bottom
  title=&quot;Bottom Tooltip&quot;
  id=&quot;input-textbottomtooltip&quot;
  placeholder=&quot;Bottom Tooltip&quot;
&gt;&lt;/b-form-input&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-input
        v-b-tooltip.hover.bottom
        title="Bottom Tooltip"
        id="input-textbottomtooltip"
        placeholder="Bottom Tooltip"
      ></b-form-input>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FormControlBottomTooltip",

  data: () => ({}),
  components: { BaseCard },
};
</script>