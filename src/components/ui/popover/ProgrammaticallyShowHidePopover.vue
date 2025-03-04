<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Programmatically Show/Hide Popover -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Programmatically Show/Hide Popover"
    subtitle=""
    modalid="modal-3"
    modaltitle="Programmatically Show/Hide Popover"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div class=&quot;d-flex flex-column text-md-center&quot;&gt;
    &lt;div class=&quot;p-2&quot;&gt;
      &lt;b-button id=&quot;popover-button-sync&quot; variant=&quot;primary&quot;&gt;I have a popover&lt;/b-button&gt;
    &lt;/div&gt;

    &lt;div class=&quot;p-2&quot;&gt;
      &lt;b-button class=&quot;px-1&quot; @click=&quot;show = !show&quot;&gt;Toggle Popover&lt;/b-button&gt;

      &lt;b-popover :show.sync=&quot;show&quot; target=&quot;popover-button-sync&quot; title=&quot;Popover&quot;&gt;
        Hello &lt;strong&gt;World!&lt;/strong&gt;
      &lt;/b-popover&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        show: false
      }
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
      <div class="d-flex flex-column text-md-center">
        <div class="p-2">
          <b-button id="popover-button-sync" variant="primary"
            >I have a popover</b-button
          >
        </div>

        <div class="p-2">
          <b-button class="px-1" @click="show = !show">Toggle Popover</b-button>

          <b-popover
            :show.sync="show"
            target="popover-button-sync"
            title="Popover"
          >
            Hello <strong>World!</strong>
          </b-popover>
        </div>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ProgrammaticallyShowHidePopover",

  data: () => ({
    show: false,
  }),
  components: { BaseCard },
};
</script>