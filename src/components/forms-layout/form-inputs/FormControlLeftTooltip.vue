<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Input with Left Tooltip -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Left Tooltip" modalid="modal-37" modaltitle="Left Tooltip">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-input
  v-b-tooltip.hover.left
  title=&quot;Left Tooltip&quot;
  id=&quot;input-textlefttooltip&quot;
  placeholder=&quot;Left Tooltip&quot;
&gt;&lt;/b-form-input&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-input
        v-b-tooltip.hover.left
        title="Left Tooltip"
        id="input-textlefttooltip"
        placeholder="Left Tooltip"
      ></b-form-input>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FormControlLeftTooltip",

  data: () => ({}),
  components: { BaseCard },
};
</script>