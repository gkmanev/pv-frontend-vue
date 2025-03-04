<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- List Group -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="List Group"
    subtitle="List groups are a flexible and powerful component for displaying a series of content. List group items can be modified to support just about any content within."
    modalid="modal-4"
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
&lt;b-list-group-item&gt;Dapibus ac facilisis in&lt;/b-list-group-item&gt;
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
        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
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
  name: "BasicListGroup",

  data: () => ({}),
  components: { BaseCard },
};
</script>