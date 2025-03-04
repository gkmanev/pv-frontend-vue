<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Outline Buttons -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard
    title="Outline Buttons"
    subtitle="Use a prop variant='outline-{color}' to quickly create a outline button."
    modalid="modal-5"
    modaltitle="Outline Buttons"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-button variant=&quot;outline-primary&quot;&gt;Primary&lt;/b-button&gt;
&lt;b-button variant=&quot;outline-secondary&quot;&gt;Secondary&lt;/b-button&gt;
&lt;b-button variant=&quot;outline-success&quot;&gt;Success&lt;/b-button&gt;
&lt;b-button variant=&quot;outline-danger&quot;&gt;Danger&lt;/b-button&gt;
&lt;b-button variant=&quot;outline-warning&quot;&gt;Warning&lt;/b-button&gt;
&lt;b-button variant=&quot;outline-info&quot;&gt;Info&lt;/b-button&gt;
&lt;b-button variant=&quot;outline-light&quot;&gt;Light&lt;/b-button&gt;
&lt;b-button variant=&quot;outline-dark&quot;&gt;Dark&lt;/b-button&gt;
          </code>
        </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="btn-grp">
        <b-button variant="outline-primary">Primary</b-button>
        <b-button variant="outline-secondary">Secondary</b-button>
        <b-button variant="outline-success">Success</b-button>
        <b-button variant="outline-danger">Danger</b-button>
        <b-button variant="outline-warning">Warning</b-button>
        <b-button variant="outline-info">Info</b-button>
        <b-button variant="outline-light">Light</b-button>
        <b-button variant="outline-dark">Dark</b-button>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "OutlineButtons",

  data: () => ({}),
  components: { BaseCard },
};
</script>