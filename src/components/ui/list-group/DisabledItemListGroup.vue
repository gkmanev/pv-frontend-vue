<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Disabled items -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Disabled items"
    subtitle="Set the disabled prop on a <b-list-group-item> to make it appear disabled (also works with actionable items. see below)."
    modalid="modal-6"
    modaltitle="Disabled items"
    
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-list-group&gt;
&lt;b-list-group-item disabled&gt;Cras justo odio&lt;/b-list-group-item&gt;
&lt;b-list-group-item&gt;Dapibus ac facilisis in&lt;/b-list-group-item&gt;
&lt;b-list-group-item&gt;Morbi leo risus&lt;/b-list-group-item&gt;
&lt;b-list-group-item disabled&gt;Porta ac consectetur ac&lt;/b-list-group-item&gt;
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
        <b-list-group-item disabled>Cras justo odio</b-list-group-item>
        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
        <b-list-group-item>Morbi leo risus</b-list-group-item>
        <b-list-group-item disabled>Porta ac consectetur ac</b-list-group-item>
        <b-list-group-item>Vestibulum at eros</b-list-group-item>
      </b-list-group>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "DisabledItemListGroup",

  data: () => ({}),
  components: { BaseCard },
};
</script>