<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Square Outline Buttons -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard
    title="Square Outline Buttons"
    subtitle="Use a prop square and varient='outline-*' to quickly create a outline square button."
    modalid="modal-12"
    modaltitle="Square Outline Buttons"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-button squared variant=&quot;outline-primary&quot;&gt;Primary&lt;/b-button&gt;
&lt;b-button squared variant=&quot;outline-secondary&quot;&gt;Secondary&lt;/b-button&gt;
&lt;b-button squared variant=&quot;outline-success&quot;&gt;Success&lt;/b-button&gt;
&lt;b-button squared variant=&quot;outline-danger&quot;&gt;Danger&lt;/b-button&gt;
&lt;b-button squared variant=&quot;outline-warning&quot;&gt;Warning&lt;/b-button&gt;
&lt;b-button squared variant=&quot;outline-info&quot;&gt;Info&lt;/b-button&gt;
&lt;b-button squared variant=&quot;outline-light&quot;&gt;Light&lt;/b-button&gt;
&lt;b-button squared variant=&quot;outline-dark&quot;&gt;Dark&lt;/b-button&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="btn-grp">
        <b-button squared variant="outline-primary">Primary</b-button>
        <b-button squared variant="outline-secondary">Secondary</b-button>
        <b-button squared variant="outline-success">Success</b-button>
        <b-button squared variant="outline-danger">Danger</b-button>
        <b-button squared variant="outline-warning">Warning</b-button>
        <b-button squared variant="outline-info">Info</b-button>
        <b-button squared variant="outline-light">Light</b-button>
        <b-button squared variant="outline-dark">Dark</b-button>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "SquareOutlineButtons",

  data: () => ({}),
  components: { BaseCard },
};
</script>