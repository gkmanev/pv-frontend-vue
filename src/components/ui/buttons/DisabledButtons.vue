<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Disabled Buttons -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard
    title="Disabled Buttons"
    subtitle="Use a prop disabled to quickly create a disabled button."
    modalid="modal-3"
    modaltitle="Disabled Buttons"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-button disabled variant=&quot;primary&quot;&gt;Primary&lt;/b-button&gt;
&lt;b-button disabled variant=&quot;secondary&quot;&gt;Secondary&lt;/b-button&gt;
&lt;b-button disabled variant=&quot;success&quot;&gt;Success&lt;/b-button&gt;
&lt;b-button disabled variant=&quot;danger&quot;&gt;Danger&lt;/b-button&gt;
&lt;b-button disabled variant=&quot;warning&quot;&gt;Warning&lt;/b-button&gt;
&lt;b-button disabled variant=&quot;info&quot;&gt;Info&lt;/b-button&gt;
&lt;b-button disabled variant=&quot;light&quot;&gt;Light&lt;/b-button&gt;
&lt;b-button disabled variant=&quot;dark&quot;&gt;Dark&lt;/b-button&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="btn-grp">
        <b-button disabled variant="primary">Primary</b-button>
        <b-button disabled variant="secondary">Secondary</b-button>
        <b-button disabled variant="success">Success</b-button>
        <b-button disabled variant="danger">Danger</b-button>
        <b-button disabled variant="warning">Warning</b-button>
        <b-button disabled variant="info">Info</b-button>
        <b-button disabled variant="light">Light</b-button>
        <b-button disabled variant="dark">Dark</b-button>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "DisabledButtons",

  data: () => ({}),
  components: { BaseCard },
};
</script>