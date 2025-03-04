<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Horizontal at breakpoint md and above -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Horizontal at breakpoint md and above" modalid="modal-8" modaltitle="Horizontal at breakpoint md and above">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-list-group horizontal=&quot;md&quot;&gt;
&lt;b-list-group-item&gt;Cras justo odio&lt;/b-list-group-item&gt;
&lt;b-list-group-item&gt;Dapibus ac facilisis in&lt;/b-list-group-item&gt;
&lt;b-list-group-item&gt;Morbi leo risus&lt;/b-list-group-item&gt;
&lt;/b-list-group&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-list-group horizontal="md">
        <b-list-group-item>Cras justo odio</b-list-group-item>
        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
        <b-list-group-item>Morbi leo risus</b-list-group-item>
      </b-list-group>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "HorizontalMdupListGroup",

  data: () => ({}),
  components: { BaseCard },
};
</script>