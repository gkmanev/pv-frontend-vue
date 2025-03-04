<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Bottom placement of tab controls -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Bottom placement of tab controls"
    subtitle="Visually move the tab controls to the bottom by setting the prop end."
    modalid="modal-3"
    modaltitle="Bottom placement of tab controls"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-card no-body class=&quot;border&quot;&gt;
  &lt;b-tabs pills card end&gt;
    &lt;b-tab title=&quot;Tab 1&quot; active&gt;&lt;b-card-text&gt;Tab contents 1&lt;/b-card-text&gt;&lt;/b-tab&gt;
    &lt;b-tab title=&quot;Tab 2&quot;&gt;&lt;b-card-text&gt;Tab contents 2&lt;/b-card-text&gt;&lt;/b-tab&gt;
  &lt;/b-tabs&gt;
&lt;/b-card&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-card no-body class="border">
        <b-tabs pills card end>
          <b-tab title="Tab 1" active
            ><b-card-text>Tab contents 1</b-card-text></b-tab
          >
          <b-tab title="Tab 2"><b-card-text>Tab contents 2</b-card-text></b-tab>
        </b-tabs>
      </b-card>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "BottomPlacementTabs",

  data: () => ({}),
  components: { BaseCard },
};
</script>