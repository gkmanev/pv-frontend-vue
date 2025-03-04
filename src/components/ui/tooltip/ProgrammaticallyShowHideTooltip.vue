<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Programmatically show and hide tooltip -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Programmatically show and hide tooltip"
    subtitle="You can manually control the visibility of a tooltip via the syncable Boolean show prop."
    modalid="modal-3"
    modaltitle="Programmatically show and hide tooltip"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div class=&quot;text-center&quot;&gt;
    &lt;div&gt;
      &lt;b-button id=&quot;tooltip-button-1&quot; variant=&quot;primary&quot;&gt;I have a tooltip&lt;/b-button&gt;
    &lt;/div&gt;

    &lt;div class=&quot;mt-3&quot;&gt;
      &lt;b-button @click=&quot;show = !show&quot;&gt;Toggle Tooltip&lt;/b-button&gt;
    &lt;/div&gt;

    &lt;b-tooltip :show.sync=&quot;show&quot; target=&quot;tooltip-button-1&quot; placement=&quot;top&quot;&gt;
      Hello &lt;strong&gt;World!&lt;/strong&gt;
    &lt;/b-tooltip&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data: {
      show: true
    }
  }
&lt;/script&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="text-center btn-grp">
        <div>
          <b-button id="tooltip-button-1" variant="primary">I have a tooltip</b-button>
        </div>

        <div class="mt-3">
          <b-button variant="info" @click="show = !show">Toggle Tooltip</b-button>
        </div>

        <b-tooltip :show.sync="show" target="tooltip-button-1" placement="top">
          Hello <strong>World!</strong>
        </b-tooltip>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ProgrammaticallyShowHideTooltip",

  data: () => ({
    show: true,
  }),
  components: { BaseCard },
};
</script>