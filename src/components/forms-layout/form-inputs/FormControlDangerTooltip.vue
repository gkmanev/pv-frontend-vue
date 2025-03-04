<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Input with Danger Tooltip -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Danger Tooltip"
    modalid="modal-27"
    modaltitle="Danger Tooltip"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-input
  v-b-tooltip.hover.v-danger
  title=&quot;Danger Tooltip&quot;
  id=&quot;input-textdangertooltip&quot;
  placeholder=&quot;Danger Tooltip&quot;
&gt;&lt;/b-form-input&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-input
        v-b-tooltip.hover.v-danger
        title="Danger Tooltip"
        id="input-textdangertooltip"
        placeholder="Danger Tooltip"
      ></b-form-input>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FormControlDangerTooltip",

  data: () => ({}),
  components: { BaseCard },
};
</script>