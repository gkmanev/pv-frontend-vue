<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Pill Buttons -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard
    title="Pill Buttons"
    subtitle="Use a prop pill to quickly create a pill button."
    modalid="modal-6"
    modaltitle="Pill Buttons"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-button pill variant=&quot;primary&quot;&gt;Primary&lt;/b-button&gt;
&lt;b-button pill variant=&quot;secondary&quot;&gt;Secondary&lt;/b-button&gt;
&lt;b-button pill variant=&quot;success&quot;&gt;Success&lt;/b-button&gt;
&lt;b-button pill variant=&quot;danger&quot;&gt;Danger&lt;/b-button&gt;
&lt;b-button pill variant=&quot;warning&quot;&gt;Warning&lt;/b-button&gt;
&lt;b-button pill variant=&quot;info&quot;&gt;Info&lt;/b-button&gt;
&lt;b-button pill variant=&quot;light&quot;&gt;Light&lt;/b-button&gt;
&lt;b-button pill variant=&quot;dark&quot;&gt;Dark&lt;/b-button&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="btn-grp">
        <b-button pill variant="primary">Primary</b-button>
        <b-button pill variant="secondary">Secondary</b-button>
        <b-button pill variant="success">Success</b-button>
        <b-button pill variant="danger">Danger</b-button>
        <b-button pill variant="warning">Warning</b-button>
        <b-button pill variant="info">Info</b-button>
        <b-button pill variant="light">Light</b-button>
        <b-button pill variant="dark">Dark</b-button>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "PillButtons",

  data: () => ({}),
  components: { BaseCard },
};
</script>