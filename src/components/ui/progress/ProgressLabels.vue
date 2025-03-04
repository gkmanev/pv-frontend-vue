<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Labels -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Labels"
    subtitle="Add labels to your progress bars by either enabling show-progress (percentage of max) or show-valuefor the current absolute value. "
    modalid="modal-5"
    modaltitle="Labels"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;h5&gt;No label&lt;/h5&gt;
    &lt;b-progress :value=&quot;value&quot; :max=&quot;max&quot; class=&quot;mb-3&quot;&gt;&lt;/b-progress&gt;

    &lt;h5&gt;Value label&lt;/h5&gt;
    &lt;b-progress :value=&quot;value&quot; :max=&quot;max&quot; show-value class=&quot;mb-3&quot;&gt;&lt;/b-progress&gt;

    &lt;h5&gt;Progress label&lt;/h5&gt;
    &lt;b-progress :value=&quot;value&quot; :max=&quot;max&quot; show-progress class=&quot;mb-3&quot;&gt;&lt;/b-progress&gt;

    &lt;h5&gt;Value label with precision&lt;/h5&gt;
    &lt;b-progress :value=&quot;value&quot; :max=&quot;max&quot; :precision=&quot;2&quot; show-value class=&quot;mb-3&quot;&gt;&lt;/b-progress&gt;

    &lt;h5&gt;Progress label with precision&lt;/h5&gt;
    &lt;b-progress :value=&quot;value&quot; :max=&quot;max&quot; :precision=&quot;2&quot; show-progress class=&quot;mb-3&quot;&gt;&lt;/b-progress&gt;
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
      <h5>No label</h5>
      <b-progress
        :value="value"
        height="15px"
        :max="max"
        class="mb-3"
      ></b-progress>

      <h5>Value label</h5>
      <b-progress
        :value="value"
        height="15px"
        :max="max"
        show-value
        class="mb-3"
      ></b-progress>

      <h5>Progress label</h5>
      <b-progress
        :value="value"
        height="15px"
        :max="max"
        show-progress
        class="mb-3"
      ></b-progress>

      <h5>Value label with precision</h5>
      <b-progress
        :value="value"
        height="15px"
        :max="max"
        :precision="2"
        show-value
        class="mb-3"
      ></b-progress>

      <h5>Progress label with precision</h5>
      <b-progress
        :value="value"
        height="15px"
        :max="max"
        :precision="2"
        show-progress
        class="mb-3"
      ></b-progress>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ProgressLabels",

  data: () => ({
    value: 33.333333333,
    max: 50,
  }),
  components: { BaseCard },
};
</script>