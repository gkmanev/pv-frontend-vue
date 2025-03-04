<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Animated backgrounds -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Animated backgrounds"
    subtitle="The striped gradient can also be animated by setting the animatedprop."
    modalid="modal-3"
    modaltitle="Animated backgrounds"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-progress :value=&quot;25&quot; variant=&quot;success&quot; striped :animated=&quot;animate&quot;&gt;&lt;/b-progress&gt;
    &lt;b-progress :value=&quot;50&quot; variant=&quot;info&quot; striped :animated=&quot;animate&quot; class=&quot;mt-2&quot;&gt;&lt;/b-progress&gt;
    &lt;b-progress :value=&quot;75&quot; variant=&quot;warning&quot; striped :animated=&quot;animate&quot; class=&quot;mt-2&quot;&gt;&lt;/b-progress&gt;
    &lt;b-progress :value=&quot;100&quot; variant=&quot;danger&quot; :animated=&quot;animate&quot; class=&quot;mt-3&quot;&gt;&lt;/b-progress&gt;

    &lt;b-button variant=&quot;secondary&quot; @click=&quot;animate = !animate&quot; class=&quot;mt-3&quot;&gt;
      {{ animate ? 'Stop' : 'Start' }} Animation
    &lt;/b-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        animate: true
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
      <b-progress
        :value="25"
        variant="success"
        striped
        :animated="animate"
      ></b-progress>
      <b-progress
        :value="50"
        variant="info"
        striped
        :animated="animate"
        class="mt-2"
      ></b-progress>
      <b-progress
        :value="75"
        variant="warning"
        striped
        :animated="animate"
        class="mt-2"
      ></b-progress>
      <b-progress
        :value="100"
        variant="danger"
        :animated="animate"
        class="mt-3"
      ></b-progress>

      <b-button variant="primary" @click="animate = !animate" class="mt-3">
        {{ animate ? "Stop" : "Start" }} Animation
      </b-button>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ProgressAnimation",

  data: () => ({
    animate: true,
  }),
  components: { BaseCard },
};
</script>