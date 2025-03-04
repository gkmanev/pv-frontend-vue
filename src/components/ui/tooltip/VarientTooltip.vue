<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Variants -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Variants "
    subtitle="BootstrapVue's tooltips support contextual color variants via our custom CSS, via the variant prop"
    modalid="modal-4"
    modaltitle="Variants"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div class=&quot;text-center btn-grp&quot;&gt;
  &lt;b-button variant=&quot;primary&quot; id=&quot;tooltip-button-variant&quot;&gt;Primary&lt;/b-button&gt;
  &lt;b-tooltip target=&quot;tooltip-button-variant&quot; variant=&quot;primary&quot;&gt;Primary variant tooltip&lt;/b-tooltip&gt;
  &lt;b-button variant=&quot;info&quot; id=&quot;tooltip-button-variant2&quot;&gt;Info&lt;/b-button&gt;
  &lt;b-tooltip target=&quot;tooltip-button-variant2&quot; variant=&quot;info&quot;&gt;Info variant tooltip&lt;/b-tooltip&gt;
  &lt;b-button variant=&quot;danger&quot; id=&quot;tooltip-button-variant3&quot;&gt;Danger&lt;/b-button&gt;
  &lt;b-tooltip target=&quot;tooltip-button-variant3&quot; variant=&quot;danger&quot;&gt;Danger variant tooltip&lt;/b-tooltip&gt;
  &lt;b-button variant=&quot;warning&quot; id=&quot;tooltip-button-variant4&quot;&gt;Warning&lt;/b-button&gt;
  &lt;b-tooltip target=&quot;tooltip-button-variant4&quot; variant=&quot;warning&quot;&gt;Warning variant tooltip&lt;/b-tooltip&gt;
  &lt;b-button variant=&quot;success&quot; id=&quot;tooltip-button-variant5&quot;&gt;Success&lt;/b-button&gt;
  &lt;b-tooltip target=&quot;tooltip-button-variant5&quot; variant=&quot;success&quot;&gt;Success variant tooltip&lt;/b-tooltip&gt;
  &lt;b-button variant=&quot;dark&quot; id=&quot;tooltip-button-variant6&quot;&gt;Dark&lt;/b-button&gt;
  &lt;b-tooltip target=&quot;tooltip-button-variant6&quot; variant=&quot;dark&quot;&gt;Dark variant tooltip&lt;/b-tooltip&gt;
  &lt;b-button variant=&quot;secondary&quot; id=&quot;tooltip-button-variant7&quot;&gt;Secondary&lt;/b-button&gt;
  &lt;b-tooltip target=&quot;tooltip-button-variant7&quot; variant=&quot;secondary&quot;&gt;Secondary variant tooltip&lt;/b-tooltip&gt;
&lt;/div&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="text-center btn-grp">
        <b-button variant="primary" id="tooltip-button-variant">Primary</b-button>
        <b-tooltip target="tooltip-button-variant" variant="primary">Primary variant tooltip</b-tooltip>
        <b-button variant="info" id="tooltip-button-variant2">Info</b-button>
        <b-tooltip target="tooltip-button-variant2" variant="info">Info variant tooltip</b-tooltip>
        <b-button variant="danger" id="tooltip-button-variant3">Danger</b-button>
        <b-tooltip target="tooltip-button-variant3" variant="danger">Danger variant tooltip</b-tooltip>
        <b-button variant="warning" id="tooltip-button-variant4">Warning</b-button>
        <b-tooltip target="tooltip-button-variant4" variant="warning">Warning variant tooltip</b-tooltip>
        <b-button variant="success" id="tooltip-button-variant5">Success</b-button>
        <b-tooltip target="tooltip-button-variant5" variant="success">Success variant tooltip</b-tooltip>
        <b-button variant="dark" id="tooltip-button-variant6">Dark</b-button>
        <b-tooltip target="tooltip-button-variant6" variant="dark">Dark variant tooltip</b-tooltip>
        <b-button variant="secondary" id="tooltip-button-variant7">Secondary</b-button>
        <b-tooltip target="tooltip-button-variant7" variant="secondary">Secondary variant tooltip</b-tooltip>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "VarientTooltip",

  data: () => ({}),
  components: { BaseCard },
};
</script>