<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Square Buttons -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard
    title="Square Buttons"
    subtitle="Use a prop squared to quickly create a square button."
    modalid="modal-11"
    modaltitle="Square Buttons"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-button squared variant=&quot;primary&quot;&gt;Primary&lt;/b-button&gt;
&lt;b-button squared variant=&quot;secondary&quot;&gt;Secondary&lt;/b-button&gt;
&lt;b-button squared variant=&quot;success&quot;&gt;Success&lt;/b-button&gt;
&lt;b-button squared variant=&quot;danger&quot;&gt;Danger&lt;/b-button&gt;
&lt;b-button squared variant=&quot;warning&quot;&gt;Warning&lt;/b-button&gt;
&lt;b-button squared variant=&quot;info&quot;&gt;Info&lt;/b-button&gt;
&lt;b-button squared variant=&quot;light&quot;&gt;Light&lt;/b-button&gt;
&lt;b-button squared variant=&quot;dark&quot;&gt;Dark&lt;/b-button&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="btn-grp">
        <b-button squared variant="primary">Primary</b-button>
        <b-button squared variant="secondary">Secondary</b-button>
        <b-button squared variant="success">Success</b-button>
        <b-button squared variant="danger">Danger</b-button>
        <b-button squared variant="warning">Warning</b-button>
        <b-button squared variant="info">Info</b-button>
        <b-button squared variant="light">Light</b-button>
        <b-button squared variant="dark">Dark</b-button>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "SquareButtons",

  data: () => ({}),
  components: { BaseCard },
};
</script>