<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Light Buttons -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard
    title="Light Buttons"
    subtitle="Use a prop variant='light-{color}' to quickly create a light button."
    modalid="modal-4"
    modaltitle="Light Buttons"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-button class=&quot;text-primary&quot; variant=&quot;light-primary&quot;&gt;Primary&lt;/b-button&gt;
&lt;b-button class=&quot;text-secondary&quot; variant=&quot;light-secondary&quot;&gt;Secondary&lt;/b-button&gt;
&lt;b-button class=&quot;text-success&quot; variant=&quot;light-success&quot;&gt;Success&lt;/b-button&gt;
&lt;b-button class=&quot;text-danger&quot; variant=&quot;light-danger&quot;&gt;Danger&lt;/b-button&gt;
&lt;b-button class=&quot;text-warning&quot; variant=&quot;light-warning&quot;&gt;Warning&lt;/b-button&gt;
&lt;b-button class=&quot;text-info&quot; variant=&quot;light-info&quot;&gt;Info&lt;/b-button&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="btn-grp">
        <b-button class="text-primary" variant="light-primary"
          >Primary</b-button
        >
        <b-button class="text-secondary" variant="light-secondary"
          >Secondary</b-button
        >
        <b-button class="text-success" variant="light-success"
          >Success</b-button
        >
        <b-button class="text-danger" variant="light-danger">Danger</b-button>
        <b-button class="text-warning" variant="light-warning"
          >Warning</b-button
        >
        <b-button class="text-info" variant="light-info">Info</b-button>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "LightButtons",

  data: () => ({}),
  components: { BaseCard },
};
</script>