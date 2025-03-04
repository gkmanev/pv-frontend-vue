<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Pill badges -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Pill badges" 
    subtitle="Use the pill prop to make badges more rounded (with a larger
          border-radius and additional horizontal padding)." 
    modalid="modal-5"
    modaltitle="Pill badges"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-badge class=&quot;mr-1 px-2&quot; pill variant=&quot;primary&quot;&gt;Primary&lt;/b-badge&gt;
&lt;b-badge class=&quot;mr-1 px-2&quot; pill variant=&quot;secondary&quot;&gt;Secondary&lt;/b-badge&gt;
&lt;b-badge class=&quot;mr-1 px-2&quot; pill variant=&quot;success&quot;&gt;Success&lt;/b-badge&gt;
&lt;b-badge class=&quot;mr-1 px-2&quot; pill variant=&quot;danger&quot;&gt;Danger&lt;/b-badge&gt;
&lt;b-badge class=&quot;mr-1 px-2&quot; pill variant=&quot;warning&quot;&gt;Warning&lt;/b-badge&gt;
&lt;b-badge class=&quot;mr-1 px-2&quot; pill variant=&quot;info&quot;&gt;Info&lt;/b-badge&gt;
&lt;b-badge class=&quot;mr-1 px-2&quot; pill variant=&quot;light&quot;&gt;Light&lt;/b-badge&gt;
&lt;b-badge class=&quot;mr-1 px-2&quot; pill variant=&quot;dark&quot;&gt;Dark&lt;/b-badge&gt;
          </code>
        </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-badge class="mr-1 px-2" pill variant="primary">Primary</b-badge>
      <b-badge class="mr-1 px-2" pill variant="secondary">Secondary</b-badge>
      <b-badge class="mr-1 px-2" pill variant="success">Success</b-badge>
      <b-badge class="mr-1 px-2" pill variant="danger">Danger</b-badge>
      <b-badge class="mr-1 px-2" pill variant="warning">Warning</b-badge>
      <b-badge class="mr-1 px-2" pill variant="info">Info</b-badge>
      <b-badge class="mr-1 px-2" pill variant="light">Light</b-badge>
      <b-badge class="mr-1 px-2" pill variant="dark">Dark</b-badge>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "BadgePill",

  data: () => ({}),
  components: { BaseCard },
};
</script>