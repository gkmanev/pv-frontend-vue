<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Input with Warning Tooltip -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Warning Tooltip"
    modalid="modal-28"
    modaltitle="Warning Tooltip"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-input
  v-b-tooltip.hover.v-warning
  title=&quot;Warning Tooltip&quot;
  id=&quot;input-textwarningtooltip&quot;
  placeholder=&quot;Warning Tooltip&quot;
&gt;&lt;/b-form-input&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-input
        v-b-tooltip.hover.v-warning
        title="Warning Tooltip"
        id="input-textwarningtooltip"
        placeholder="Warning Tooltip"
      ></b-form-input>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FormControlWarningTooltip",

  data: () => ({}),
  components: { BaseCard },
};
</script>