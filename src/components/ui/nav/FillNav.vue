<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Fill Nav -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Fill Nav"
    subtitle="To proportionately fill all available space with your <b-nav-item> components, set the fill prop."
    modalid="modal-6"
    modaltitle="Fill Nav"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-nav tabs fill&gt;
  &lt;b-nav-item active&gt;Active&lt;/b-nav-item&gt;
  &lt;b-nav-item&gt;Link&lt;/b-nav-item&gt;
  &lt;b-nav-item&gt;Link with a long name &lt;/b-nav-item&gt;
  &lt;b-nav-item disabled&gt;Disabled&lt;/b-nav-item&gt;
&lt;/b-nav&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-nav tabs fill>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Link with a long name </b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FillNav",

  data: () => ({}),
  components: { BaseCard },
};
</script>