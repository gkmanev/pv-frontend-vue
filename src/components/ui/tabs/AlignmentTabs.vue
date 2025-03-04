<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Alignment Tabs -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Alignment Tabs"
    subtitle="To align your tab controls, use the align prop. Available values are left, center and right."
    modalid="modal-1"
    modaltitle="Alignment Tabs"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-tabs content-class=&quot;mt-3&quot; align=&quot;center&quot;&gt;
  &lt;b-tab title=&quot;First&quot; active&gt;&lt;p&gt;I'm the first tab&lt;/p&gt;&lt;/b-tab&gt;
  &lt;b-tab title=&quot;Second&quot;&gt;&lt;p&gt;I'm the second tab&lt;/p&gt;&lt;/b-tab&gt;
  &lt;b-tab title=&quot;Disabled&quot; disabled&gt;&lt;p&gt;I'm a disabled tab!&lt;/p&gt;&lt;/b-tab&gt;
&lt;/b-tabs&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-tabs content-class="mt-3" align="center">
        <b-tab title="First" active><p>I'm the first tab</p></b-tab>
        <b-tab title="Second"><p>I'm the second tab</p></b-tab>
        <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
      </b-tabs>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "AlignmentTabs",

  data: () => ({}),
  components: { BaseCard },
};
</script>