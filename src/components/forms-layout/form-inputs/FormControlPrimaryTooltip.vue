<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Input with Primary Tooltip -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Primary Tooltip"
    modalid="modal-25"
    modaltitle="Primary Tooltip"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-input
  v-b-tooltip.hover.v-primary
  title=&quot;Primary Tooltip&quot;
  id=&quot;input-textprimarytooltip&quot;
  placeholder=&quot;Primary Tooltip&quot;
&gt;&lt;/b-form-input&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-input
        v-b-tooltip.hover.v-primary
        title="Primary Tooltip"
        id="input-textprimarytooltip"
        placeholder="Primary Tooltip"
      ></b-form-input>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FormControlPrimaryTooltip",

  data: () => ({}),
  components: { BaseCard },
};
</script>