<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Actionable badges -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Actionable badges" 
    subtitle="Quickly provide actionable badges with hover and focus states by
          specifying either the href prop (links) or to prop (router-links):" 
    modalid="modal-1"
    modaltitle="Actionable badges"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
    <pre class="mb-0">
        <code class="javascript">
&lt;b-badge class=&quot;mr-1&quot; href=&quot;#&quot; variant=&quot;primary&quot;&gt;Primary&lt;/b-badge&gt;
&lt;b-badge class=&quot;mr-1&quot; href=&quot;#&quot; variant=&quot;secondary&quot;&gt;Secondary&lt;/b-badge&gt;
&lt;b-badge class=&quot;mr-1&quot; href=&quot;#&quot; variant=&quot;success&quot;&gt;Success&lt;/b-badge&gt;
&lt;b-badge class=&quot;mr-1&quot; href=&quot;#&quot; variant=&quot;danger&quot;&gt;Danger&lt;/b-badge&gt;
&lt;b-badge class=&quot;mr-1&quot; href=&quot;#&quot; variant=&quot;warning&quot;&gt;Warning&lt;/b-badge&gt;
&lt;b-badge class=&quot;mr-1&quot; href=&quot;#&quot; variant=&quot;info&quot;&gt;Info&lt;/b-badge&gt;
&lt;b-badge class=&quot;mr-1&quot; href=&quot;#&quot; variant=&quot;light&quot;&gt;Light&lt;/b-badge&gt;
&lt;b-badge class=&quot;mr-1&quot; href=&quot;#&quot; variant=&quot;dark&quot;&gt;Dark&lt;/b-badge&gt;
          </code>
        </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-badge class="mr-1" href="#" variant="primary">Primary</b-badge>
      <b-badge class="mr-1" href="#" variant="secondary">Secondary</b-badge>
      <b-badge class="mr-1" href="#" variant="success">Success</b-badge>
      <b-badge class="mr-1" href="#" variant="danger">Danger</b-badge>
      <b-badge class="mr-1" href="#" variant="warning">Warning</b-badge>
      <b-badge class="mr-1" href="#" variant="info">Info</b-badge>
      <b-badge class="mr-1" href="#" variant="light">Light</b-badge>
      <b-badge class="mr-1" href="#" variant="dark">Dark</b-badge>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "BadgeActionable",

  data: () => ({}),
  components: { BaseCard },
};
</script>