<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Justified Nav -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Justified Nav"
    subtitle="Unlike fill above, every <b-nav-item> will be the same width."
    modalid="modal-7"
    modaltitle="Justified Nav"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-nav tabs justified&gt;
  &lt;b-nav-item active&gt;Active&lt;/b-nav-item&gt;
  &lt;b-nav-item&gt;Link&lt;/b-nav-item&gt;
  &lt;b-nav-item&gt;Link 2 &lt;/b-nav-item&gt;
  &lt;b-nav-item disabled&gt;Disabled&lt;/b-nav-item&gt;
&lt;/b-nav&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-nav tabs justified>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Link 2 </b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "JustifyNav",

  data: () => ({}),
  components: { BaseCard },
};
</script>