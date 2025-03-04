<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Contextual variations -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Contextual variations" 
    subtitle="Add any of the following variants via the variant prop to change the
          appearance of a b-badge: default, primary, success, warning, info, and
          danger. If no variant is specified default will be used." 
    modalid="modal-3"
    modaltitle="Contextual variations"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-badge class=&quot;mr-1&quot; variant=&quot;primary&quot;&gt;Primary&lt;/b-badge&gt;
&lt;b-badge class=&quot;mr-1&quot; variant=&quot;secondary&quot;&gt;Secondary&lt;/b-badge&gt;
&lt;b-badge class=&quot;mr-1&quot; variant=&quot;success&quot;&gt;Success&lt;/b-badge&gt;
&lt;b-badge class=&quot;mr-1&quot; variant=&quot;danger&quot;&gt;Danger&lt;/b-badge&gt;
&lt;b-badge class=&quot;mr-1&quot; variant=&quot;warning&quot;&gt;Warning&lt;/b-badge&gt;
&lt;b-badge class=&quot;mr-1&quot; variant=&quot;info&quot;&gt;Info&lt;/b-badge&gt;
&lt;b-badge class=&quot;mr-1&quot; variant=&quot;light&quot;&gt;Light&lt;/b-badge&gt;
&lt;b-badge class=&quot;mr-1&quot; variant=&quot;dark&quot;&gt;Dark&lt;/b-badge&gt;
        </code>
        </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-badge class="mr-1" variant="primary">Primary</b-badge>
      <b-badge class="mr-1" variant="secondary">Secondary</b-badge>
      <b-badge class="mr-1" variant="success">Success</b-badge>
      <b-badge class="mr-1" variant="danger">Danger</b-badge>
      <b-badge class="mr-1" variant="warning">Warning</b-badge>
      <b-badge class="mr-1" variant="info">Info</b-badge>
      <b-badge class="mr-1" variant="light">Light</b-badge>
      <b-badge class="mr-1" variant="dark">Dark</b-badge>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "BadgeContextual",

  data: () => ({}),
  components: { BaseCard },
};
</script>