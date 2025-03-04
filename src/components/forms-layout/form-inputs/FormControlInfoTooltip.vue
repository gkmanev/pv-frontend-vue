<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Input with Info Tooltip -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Info Tooltip" modalid="modal-26" modaltitle="Info Tooltip">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-input
  v-b-tooltip.hover.v-info
  title=&quot;Info Tooltip&quot;
  id=&quot;input-textinfotooltip&quot;
  placeholder=&quot;Info Tooltip&quot;
&gt;&lt;/b-form-input&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-input
        v-b-tooltip.hover.v-info
        title="Info Tooltip"
        id="input-textinfotooltip"
        placeholder="Info Tooltip"
      ></b-form-input>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FormControlInfoTooltip",

  data: () => ({}),
  components: { BaseCard },
};
</script>