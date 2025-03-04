<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Solid Buttons -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard
    title="Solid Buttons"
    subtitle="Bootstrap includes six predefined button styles, each serving its own semantic purpose."
    modalid="modal-10"
    modaltitle="Solid Buttons"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-button variant=&quot;primary&quot;&gt;Primary&lt;/b-button&gt;
&lt;b-button variant=&quot;secondary&quot;&gt;Secondary&lt;/b-button&gt;
&lt;b-button variant=&quot;success&quot;&gt;Success&lt;/b-button&gt;
&lt;b-button variant=&quot;danger&quot;&gt;Danger&lt;/b-button&gt;
&lt;b-button variant=&quot;warning&quot;&gt;Warning&lt;/b-button&gt;
&lt;b-button variant=&quot;info&quot;&gt;Info&lt;/b-button&gt;
&lt;b-button variant=&quot;light&quot;&gt;Light&lt;/b-button&gt;
&lt;b-button variant=&quot;dark&quot;&gt;Dark&lt;/b-button&gt;
      </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="btn-grp">
        <b-button variant="primary">Primary</b-button>
        <b-button variant="secondary">Secondary</b-button>
        <b-button variant="success">Success</b-button>
        <b-button variant="danger">Danger</b-button>
        <b-button variant="warning">Warning</b-button>
        <b-button variant="info">Info</b-button>
        <b-button variant="light">Light</b-button>
        <b-button variant="dark">Dark</b-button>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "SolidButtons",

  data: () => ({}),
  components: { BaseCard },
};
</script>