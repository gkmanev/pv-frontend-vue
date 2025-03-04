<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Noninteractive tooltips -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Noninteractive tooltips"
    subtitle="To restore Bootstraps default behavior apply the noninteractive prop"
    modalid="modal-2"
    modaltitle="Noninteractive tooltips"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div class=&quot;text-center btn-grp&quot;&gt;
  &lt;div&gt;
    &lt;b-button variant=&quot;primary&quot; id=&quot;tooltip-button-interactive&quot;&gt;My tooltip is interactive&lt;/b-button&gt;
    &lt;b-tooltip target=&quot;tooltip-button-interactive&quot;&gt;I will stay open when hovered&lt;/b-tooltip&gt;
    &lt;b-button variant=&quot;info&quot; id=&quot;tooltip-button-not-interactive&quot;&gt;Mine is not...&lt;/b-button&gt;
    &lt;b-tooltip target=&quot;tooltip-button-not-interactive&quot; noninteractive&gt;Catch me if you can!&lt;/b-tooltip&gt;
  &lt;/div&gt;
&lt;/div&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="text-center btn-grp">
        <div>
          <b-button variant="primary" id="tooltip-button-interactive">My tooltip is interactive</b-button>
          <b-tooltip target="tooltip-button-interactive">I will stay open when hovered</b-tooltip>
          <b-button variant="info" id="tooltip-button-not-interactive">Mine is not...</b-button>
          <b-tooltip target="tooltip-button-not-interactive" noninteractive>Catch me if you can!</b-tooltip>
        </div>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "NoninteractiveTooltips",

  data: () => ({}),
  components: { BaseCard },
};
</script>