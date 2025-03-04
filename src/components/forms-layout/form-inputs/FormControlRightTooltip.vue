<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Input with Right Tooltip -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Right Tooltip" modalid="modal-24" modaltitle="Right Tooltip">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-input
  v-b-tooltip.hover.right
  title=&quot;Right Tooltip&quot;
  id=&quot;input-textrighttooltip&quot;
  placeholder=&quot;Right Tooltip&quot;
&gt;&lt;/b-form-input&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-input
        v-b-tooltip.hover.right
        title="Right Tooltip"
        id="input-textrighttooltip"
        placeholder="Right Tooltip"
      ></b-form-input>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FormControlRightTooltip",

  data: () => ({}),
  components: { BaseCard },
};
</script>