<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Size Buttons -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Add custom content to tab title"
    subtitle="If you want to add custom content to tab title, like HTML code, icons, or another non-interactive Vue component, this possible by using title slot of <b-tab>."
    modalid="modal-5"
    modaltitle="Add custom content to tab title"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-tabs&gt;
  &lt;b-tab active&gt;
    &lt;template #title&gt;
      &lt;b-spinner type=&quot;grow&quot; small&gt;&lt;/b-spinner&gt; I'm custom
      &lt;strong&gt;title&lt;/strong&gt;
    &lt;/template&gt;
    &lt;p class=&quot;p-3&quot;&gt;Tab contents 1&lt;/p&gt;
  &lt;/b-tab&gt;

  &lt;b-tab&gt;
    &lt;template #title&gt;
      &lt;b-spinner type=&quot;border&quot; small&gt;&lt;/b-spinner&gt; Tab 2
    &lt;/template&gt;
    &lt;p class=&quot;p-3&quot;&gt;Tab contents 2&lt;/p&gt;
  &lt;/b-tab&gt;
&lt;/b-tabs&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-tabs>
        <b-tab active>
          <template #title>
            <b-spinner type="grow" small></b-spinner> I'm custom
            <strong>title</strong>
          </template>
          <p class="p-3">Tab contents 1</p>
        </b-tab>

        <b-tab>
          <template #title>
            <b-spinner type="border" small></b-spinner> Tab 2
          </template>
          <p class="p-3">Tab contents 2</p>
        </b-tab>
      </b-tabs>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "CustomContentTabs",

  data: () => ({}),
  components: { BaseCard },
};
</script>