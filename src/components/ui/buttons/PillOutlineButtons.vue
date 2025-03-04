<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Pill Outline Buttons -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard
    title="Pill Outline Buttons"
    subtitle="Use a prop pill and varient='outline-*' to quickly create a pill button."
    modalid="modal-8"
    modaltitle="Pill Outline Buttons"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-button pill variant=&quot;outline-primary&quot;&gt;Primary&lt;/b-button&gt;
&lt;b-button pill variant=&quot;outline-secondary&quot;&gt;Secondary&lt;/b-button&gt;
&lt;b-button pill variant=&quot;outline-success&quot;&gt;Success&lt;/b-button&gt;
&lt;b-button pill variant=&quot;outline-danger&quot;&gt;Danger&lt;/b-button&gt;
&lt;b-button pill variant=&quot;outline-warning&quot;&gt;Warning&lt;/b-button&gt;
&lt;b-button pill variant=&quot;outline-info&quot;&gt;Info&lt;/b-button&gt;
&lt;b-button pill variant=&quot;outline-light&quot;&gt;Light&lt;/b-button&gt;
&lt;b-button pill variant=&quot;outline-dark&quot;&gt;Dark&lt;/b-button&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="btn-grp">
        <b-button pill variant="outline-primary">Primary</b-button>
        <b-button pill variant="outline-secondary">Secondary</b-button>
        <b-button pill variant="outline-success">Success</b-button>
        <b-button pill variant="outline-danger">Danger</b-button>
        <b-button pill variant="outline-warning">Warning</b-button>
        <b-button pill variant="outline-info">Info</b-button>
        <b-button pill variant="outline-light">Light</b-button>
        <b-button pill variant="outline-dark">Dark</b-button>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "PillOutlineButtons",

  data: () => ({}),
  components: { BaseCard },
};
</script>