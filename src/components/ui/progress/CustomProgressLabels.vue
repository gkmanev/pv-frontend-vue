<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Custom progress label -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Custom progress label"
    subtitle="Provide your own label by using the default slot within a <b-progress-bar> sub-component"
    modalid="modal-1"
    modaltitle="Custom progress label"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;h5&gt;Custom label via default slot&lt;/h5&gt;
    &lt;b-progress :max=&quot;max&quot; height=&quot;2rem&quot;&gt;
      &lt;b-progress-bar :value=&quot;value&quot;&gt;
        &lt;span&gt;Progress: &lt;strong&gt;{{ value.toFixed(2) }} / {{ max }}&lt;/strong&gt;&lt;/span&gt;
      &lt;/b-progress-bar&gt;
    &lt;/b-progress&gt;

    &lt;h5 class=&quot;mt-3&quot;&gt;Custom label via property&lt;/h5&gt;
    &lt;b-progress :max=&quot;max&quot;&gt;
      &lt;b-progress-bar :value=&quot;value&quot; :label=&quot;`${((value / max) * 100).toFixed(2)}%`&quot;&gt;&lt;/b-progress-bar&gt;
    &lt;/b-progress&gt;

    &lt;h5 class=&quot;mt-3&quot;&gt;Custom label via property (HTML support)&lt;/h5&gt;
    &lt;b-progress :max=&quot;max&quot;&gt;
      &lt;b-progress-bar :value=&quot;value&quot; :label-html=&quot;`&lt;del&gt;${value}&lt;/del&gt;`&quot;&gt;&lt;/b-progress-bar&gt;
    &lt;/b-progress&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: 33.333333333,
        max: 50
      }
    }
  }
&lt;/script&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <h5>Custom label via default slot</h5>
      <b-progress :max="max" height="2rem">
        <b-progress-bar :value="value">
          <span
            >Progress: <strong>{{ value.toFixed(2) }} / {{ max }}</strong></span
          >
        </b-progress-bar>
      </b-progress>

      <h5 class="mt-3">Custom label via property</h5>
      <b-progress :max="max" height="1rem">
        <b-progress-bar
          :value="value"
          :label="`${((value / max) * 100).toFixed(2)}%`"
        ></b-progress-bar>
      </b-progress>

      <h5 class="mt-3">Custom label via property (HTML support)</h5>
      <b-progress :max="max" height="10px">
        <b-progress-bar
          :value="value"
          :label-html="`<del>${value}</del>`"
        ></b-progress-bar>
      </b-progress>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "CustomProgressLabels",

  data: () => ({
    value: 33.333333333,
    max: 50,
  }),
  components: { BaseCard },
};
</script>