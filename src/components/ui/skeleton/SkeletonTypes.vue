<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Types -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Types"
    subtitle="<b-skeleton> supports various basic types, to represent various components in your project."
    modalid="modal-6"
    modaltitle="Types"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;h5&gt;Text (default)&lt;/h5&gt;
&lt;b-skeleton&gt;&lt;/b-skeleton&gt;

&lt;h5 class=&quot;mt-3&quot;&gt;Avatar&lt;/h5&gt;
&lt;b-skeleton type=&quot;avatar&quot;&gt;&lt;/b-skeleton&gt;

&lt;h5 class=&quot;mt-3&quot;&gt;Input&lt;/h5&gt;
&lt;b-skeleton type=&quot;input&quot;&gt;&lt;/b-skeleton&gt;

&lt;h5 class=&quot;mt-3&quot;&gt;Button&lt;/h5&gt;
&lt;b-skeleton type=&quot;button&quot;&gt;&lt;/b-skeleton&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <h5>Text (default)</h5>
      <b-skeleton></b-skeleton>

      <h5 class="mt-3">Avatar</h5>
      <b-skeleton type="avatar"></b-skeleton>

      <h5 class="mt-3">Input</h5>
      <b-skeleton type="input"></b-skeleton>

      <h5 class="mt-3">Button</h5>
      <b-skeleton type="button"></b-skeleton>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "SkeletonTypes",

  data: () => ({}),
  components: { BaseCard },
};
</script>