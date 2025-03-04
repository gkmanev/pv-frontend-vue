<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Pill style -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Pill style"
    subtitle="Use the pill style by setting the pills prop."
    modalid="modal-10"
    modaltitle="Pill style"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-nav pills&gt;
  &lt;b-nav-item active&gt;Active&lt;/b-nav-item&gt;
  &lt;b-nav-item&gt;Link&lt;/b-nav-item&gt;
  &lt;b-nav-item&gt;Another Link&lt;/b-nav-item&gt;
  &lt;b-nav-item disabled&gt;Disabled&lt;/b-nav-item&gt;
&lt;/b-nav&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-nav pills>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "PillstyleNav",

  data: () => ({}),
  components: { BaseCard },
};
</script>