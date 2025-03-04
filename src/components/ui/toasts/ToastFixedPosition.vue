<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Alerts versus toasts -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Alerts versus toasts "
    subtitle="In some cases you may need just a simple alert style message"
    modalid="modal-3"
    modaltitle="Alerts versus toasts"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-button size=&quot;sm&quot; @click=&quot;showBottom = !showBottom&quot;&gt;
      {{ showBottom ? 'Hide' : 'Show' }} Fixed bottom Alert
    &lt;/b-button&gt;
    &lt;b-alert
      v-model=&quot;showBottom&quot;
      class=&quot;position-fixed fixed-bottom m-0 rounded-0&quot;
      style=&quot;z-index: 2000;&quot;
      variant=&quot;warning&quot;
      dismissible
    &gt;
      Fixed position (bottom) alert!
    &lt;/b-alert&gt;

    &lt;b-button size=&quot;sm&quot; @click=&quot;showTop = !showTop&quot;&gt;
      {{ showTop ? 'Hide' : 'Show' }} Fixed top Alert
    &lt;/b-button&gt;
    &lt;b-alert
      v-model=&quot;showTop&quot;
      class=&quot;position-fixed fixed-top m-0 rounded-0&quot;
      style=&quot;z-index: 2000;&quot;
      variant=&quot;success&quot;
      dismissible
    &gt;
      Fixed position (top) alert!
    &lt;/b-alert&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      showBottom: false,
      showTop: false
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
      <div class="btn-grp">
        <b-button variant="primary" size="sm" @click="showBottom = !showBottom">
          {{ showBottom ? "Hide" : "Show" }} Fixed bottom Alert
        </b-button>
        <b-alert
          v-model="showBottom"
          class="position-fixed fixed-bottom m-0 rounded-0"
          style="z-index: 2000"
          variant="warning"
          dismissible
        >
          Fixed position (bottom) alert!
        </b-alert>

        <b-button variant="info" size="sm" @click="showTop = !showTop">
          {{ showTop ? "Hide" : "Show" }} Fixed top Alert
        </b-button>
        <b-alert
          v-model="showTop"
          class="position-fixed fixed-top m-0 rounded-0"
          style="z-index: 2000"
          variant="success"
          dismissible
        >
          Fixed position (top) alert!
        </b-alert>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ToastFixedPosition",

  data: () => ({
    showBottom: false,
    showTop: false,
  }),
  components: { BaseCard },
};
</script>