<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Input with Secondary Tooltip -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Secondary Tooltip"
    modalid="modal-29"
    modaltitle="Secondary Tooltip"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-input
  v-b-tooltip.hover.v-secondary
  title=&quot;Secondary Tooltip&quot;
  id=&quot;input-textsecondarytooltip&quot;
  placeholder=&quot;Secondary Tooltip&quot;
&gt;&lt;/b-form-input&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-input
        v-b-tooltip.hover.v-secondary
        title="Secondary Tooltip"
        id="input-textsecondarytooltip"
        placeholder="Secondary Tooltip"
      ></b-form-input>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FormControlSecondaryTooltip",

  data: () => ({}),
  components: { BaseCard },
};
</script>