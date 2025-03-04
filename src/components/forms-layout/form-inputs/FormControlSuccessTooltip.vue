<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Input with Success Tooltip -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Success Tooltip"
    modalid="modal-30"
    modaltitle="Success Tooltip"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-input
  v-b-tooltip.hover.v-success
  title=&quot;Success Tooltip&quot;
  id=&quot;input-textsuccesstooltip&quot;
  placeholder=&quot;Success Tooltip&quot;
&gt;&lt;/b-form-input&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-input
        v-b-tooltip.hover.v-success
        title="Success Tooltip"
        id="input-textsuccesstooltip"
        placeholder="Success Tooltip"
      ></b-form-input>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FormControlSuccessTooltip",

  data: () => ({}),
  components: { BaseCard },
};
</script>