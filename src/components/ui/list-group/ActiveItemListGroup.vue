<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- List Group -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="List Group"
    subtitle="Set the active prop on a <b-list-group-item> to indicate the current active selection."
    modalid="modal-2"
    modaltitle="List Group"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-list-group&gt;
&lt;b-list-group-item&gt;Cras justo odio&lt;/b-list-group-item&gt;
&lt;b-list-group-item active&gt;Dapibus ac facilisis in&lt;/b-list-group-item&gt;
&lt;b-list-group-item&gt;Morbi leo risus&lt;/b-list-group-item&gt;
&lt;b-list-group-item&gt;Porta ac consectetur ac&lt;/b-list-group-item&gt;
&lt;b-list-group-item&gt;Vestibulum at eros&lt;/b-list-group-item&gt;
&lt;/b-list-group&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-list-group>
        <b-list-group-item>Cras justo odio</b-list-group-item>
        <b-list-group-item active>Dapibus ac facilisis in</b-list-group-item>
        <b-list-group-item>Morbi leo risus</b-list-group-item>
        <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
        <b-list-group-item>Vestibulum at eros</b-list-group-item>
      </b-list-group>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ActiveItemListGroup",

  data: () => ({}),
  components: { BaseCard },
};
</script>