<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Input with Top Tooltip -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Top Tooltip" modalid="modal-22" modaltitle="Top Tooltip">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-input
  v-b-tooltip.hover
  title=&quot;Top Tooltip&quot;
  id=&quot;input-texttoptooltip&quot;
  placeholder=&quot;Top Tooltip&quot;
&gt;&lt;/b-form-input&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-input
        v-b-tooltip.hover
        title="Top Tooltip"
        id="input-texttoptooltip"
        placeholder="Top Tooltip"
      ></b-form-input>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FormControlTopTooltip",

  data: () => ({}),
  components: { BaseCard },
};
</script>