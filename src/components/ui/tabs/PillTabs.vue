<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Pills variant -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Pills variant"
    subtitle="Tabs use the tabs styling by default. Just add pills property to <b-tabs> for the pill style variant."
    modalid="modal-9"
    modaltitle="Pills variant"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-card no-body class=&quot;border&quot;&gt;
  &lt;b-tabs pills card&gt;
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
        <b-tabs pills card>
          <b-tab title="Tab 1" active><b-card-text>Tab contents 1</b-card-text></b-tab>
          <b-tab title="Tab 2"><b-card-text>Tab contents 2</b-card-text></b-tab>
        </b-tabs>
      </b-card>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "PillTabs",

  data: () => ({}),
  components: { BaseCard },
};
</script>