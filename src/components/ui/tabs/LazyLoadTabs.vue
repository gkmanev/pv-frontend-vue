<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Lazy loading tab content -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Lazy loading tab content"
    subtitle="Sometimes it's preferred to load components & data only when activating a tab, instead of loading all tabs (and associated data) when rendering the <b-tabs> set."
    modalid="modal-8"
    modaltitle="Lazy loading tab content"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-tabs content-class=&quot;mt-3&quot;&gt;
  &lt;!-- This tabs content will always be mounted --&gt;
  &lt;b-tab title=&quot;Regular tab&quot;&gt;&lt;b-alert show&gt;I'm always mounted&lt;/b-alert&gt;&lt;/b-tab&gt;

  &lt;!-- This tabs content will not be mounted until the tab is shown --&gt;
  &lt;!-- and will be un-mounted when hidden --&gt;
  &lt;b-tab title=&quot;Lazy tab&quot; lazy&gt;&lt;b-alert show&gt;I'm lazy mounted!&lt;/b-alert&gt;&lt;/b-tab&gt;
&lt;/b-tabs&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-tabs content-class="mt-3">
        <!-- This tabs content will always be mounted -->
        <b-tab title="Regular tab"><b-alert show>I'm always mounted</b-alert></b-tab>

        <!-- This tabs content will not be mounted until the tab is shown -->
        <!-- and will be un-mounted when hidden -->
        <b-tab title="Lazy tab" lazy><b-alert show>I'm lazy mounted!</b-alert></b-tab>
      </b-tabs>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "LazyLoadTabs",

  data: () => ({}),
  components: { BaseCard },
};
</script>