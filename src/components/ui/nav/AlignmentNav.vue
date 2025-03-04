<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Alignment Nav -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Alignment Nav"
    subtitle="To align your <b-nav-item> components, use the align prop. Available values are left, center and right."
    modalid="modal-1"
    modaltitle="Alignment Nav"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-nav tabs align=&quot;center&quot;&gt;
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
      <b-nav tabs align="center">
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
  name: "AlignmentNav",

  data: () => ({}),
  components: { BaseCard },
};
</script>