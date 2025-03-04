<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Tab style -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Tab style"
    subtitle="Make the nav look like tabs by setting the tabs prop."
    modalid="modal-12"
    modaltitle="Tab style"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-nav tabs&gt;
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
      <b-nav tabs>
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
  name: "TabstyleNav",

  data: () => ({}),
  components: { BaseCard },
};
</script>