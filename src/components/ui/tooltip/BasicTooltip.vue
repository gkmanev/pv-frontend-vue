<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Tooltips -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Tooltips"
    subtitle="Easily add tooltips to elements or components via the <b-tooltip> component or v-b-tooltip directive"
    modalid="modal-1"
    modaltitle="Tooltips"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div class=&quot;text-center btn-grp&quot;&gt;
  &lt;b-button
    variant=&quot;primary&quot;
    v-b-tooltip.hover
    title=&quot;Tooltip directive content&quot;&gt;
    Hover Me
  &lt;/b-button&gt;

  &lt;b-button variant=&quot;info&quot; id=&quot;tooltip-target-1&quot;&gt; Hover Me &lt;/b-button&gt;
  &lt;b-tooltip target=&quot;tooltip-target-1&quot; triggers=&quot;hover&quot;&gt;
    I am tooltip &lt;b&gt;component&lt;/b&gt; content!
  &lt;/b-tooltip&gt;
&lt;/div&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="text-center btn-grp">
        <b-button
          variant="primary"
          v-b-tooltip.hover
          title="Tooltip directive content">
          Hover Me
        </b-button>

        <b-button variant="info" id="tooltip-target-1"> Hover Me </b-button>
        <b-tooltip target="tooltip-target-1" triggers="hover">
          I am tooltip <b>component</b> content!
        </b-tooltip>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "BasicTooltip",

  data: () => ({}),
  components: { BaseCard },
};
</script>