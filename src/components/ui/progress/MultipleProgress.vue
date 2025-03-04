<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Multiple bars -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Multiple bars"
    subtitle="Include multiple <b-progress-bar> sub-components in a <b-progress> component to build a horizontally stacked set of progress bars."
    modalid="modal-2"
    modaltitle="Multiple bars"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-progress :max=&quot;max&quot; class=&quot;mb-3&quot;&gt;
      &lt;b-progress-bar variant=&quot;primary&quot; :value=&quot;values[0]&quot;&gt;&lt;/b-progress-bar&gt;
      &lt;b-progress-bar variant=&quot;success&quot; :value=&quot;values[1]&quot;&gt;&lt;/b-progress-bar&gt;
      &lt;b-progress-bar variant=&quot;info&quot; :value=&quot;values[2]&quot;&gt;&lt;/b-progress-bar&gt;
    &lt;/b-progress&gt;

    &lt;b-progress show-progress :max=&quot;max&quot; class=&quot;mb-3&quot;&gt;
      &lt;b-progress-bar variant=&quot;primary&quot; :value=&quot;values[0]&quot;&gt;&lt;/b-progress-bar&gt;
      &lt;b-progress-bar variant=&quot;success&quot; :value=&quot;values[1]&quot;&gt;&lt;/b-progress-bar&gt;
      &lt;b-progress-bar variant=&quot;info&quot; :value=&quot;values[2]&quot;&gt;&lt;/b-progress-bar&gt;
    &lt;/b-progress&gt;

    &lt;b-progress show-value striped :max=&quot;max&quot; class=&quot;mb-3&quot;&gt;
      &lt;b-progress-bar variant=&quot;primary&quot; :value=&quot;values[0]&quot;&gt;&lt;/b-progress-bar&gt;
      &lt;b-progress-bar variant=&quot;success&quot; :value=&quot;values[1]&quot;&gt;&lt;/b-progress-bar&gt;
      &lt;b-progress-bar variant=&quot;info&quot; :value=&quot;values[2]&quot;&gt;&lt;/b-progress-bar&gt;
    &lt;/b-progress&gt;

    &lt;b-progress :max=&quot;max&quot;&gt;
      &lt;b-progress-bar variant=&quot;primary&quot; :value=&quot;values[0]&quot; show-progress&gt;&lt;/b-progress-bar&gt;
      &lt;b-progress-bar variant=&quot;success&quot; :value=&quot;values[1]&quot; animated show-progress&gt;&lt;/b-progress-bar&gt;
      &lt;b-progress-bar variant=&quot;info&quot; :value=&quot;values[2]&quot; striped show-progress&gt;&lt;/b-progress-bar&gt;
    &lt;/b-progress&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        values: [15, 30, 20],
        max: 100
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
      <b-progress :max="max" class="mb-3" height="10px">
        <b-progress-bar variant="primary" :value="values[0]"></b-progress-bar>
        <b-progress-bar variant="success" :value="values[1]"></b-progress-bar>
        <b-progress-bar variant="info" :value="values[2]"></b-progress-bar>
      </b-progress>

      <b-progress show-progress :max="max" class="mb-3" height="10px">
        <b-progress-bar variant="primary" :value="values[0]"></b-progress-bar>
        <b-progress-bar variant="success" :value="values[1]"></b-progress-bar>
        <b-progress-bar variant="info" :value="values[2]"></b-progress-bar>
      </b-progress>

      <b-progress show-value striped :max="max" class="mb-3" height="10px">
        <b-progress-bar variant="primary" :value="values[0]"></b-progress-bar>
        <b-progress-bar variant="success" :value="values[1]"></b-progress-bar>
        <b-progress-bar variant="info" :value="values[2]"></b-progress-bar>
      </b-progress>

      <b-progress :max="max" height="10px">
        <b-progress-bar
          variant="primary"
          :value="values[0]"
          show-progress
        ></b-progress-bar>
        <b-progress-bar
          variant="success"
          :value="values[1]"
          animated
          show-progress
        ></b-progress-bar>
        <b-progress-bar
          variant="info"
          :value="values[2]"
          striped
          show-progress
        ></b-progress-bar>
      </b-progress>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "MultipleProgress",

  data: () => ({
    values: [15, 30, 20],
    max: 100,
  }),
  components: { BaseCard },
};
</script>