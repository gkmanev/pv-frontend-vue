<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Striped backgrounds -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Striped backgrounds"
    subtitle="Set striped to apply a stripe via CSS gradient over the progress bar's background variant."
    modalid="modal-6"
    modaltitle="Striped backgrounds"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-progress :value=&quot;25&quot; variant=&quot;success&quot; :striped=&quot;striped&quot;&gt;&lt;/b-progress&gt;
    &lt;b-progress :value=&quot;50&quot; variant=&quot;info&quot; :striped=&quot;striped&quot; class=&quot;mt-2&quot;&gt;&lt;/b-progress&gt;
    &lt;b-progress :value=&quot;75&quot; variant=&quot;warning&quot; :striped=&quot;striped&quot; class=&quot;mt-2&quot;&gt;&lt;/b-progress&gt;
    &lt;b-progress :value=&quot;100&quot; variant=&quot;danger&quot; :striped=&quot;striped&quot; class=&quot;mt-2&quot;&gt;&lt;/b-progress&gt;

    &lt;b-button variant=&quot;secondary&quot; @click=&quot;striped = !striped&quot; class=&quot;mt-3&quot;&gt;
      {{ striped ? 'Remove' : 'Add' }} Striped
    &lt;/b-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        striped: true
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
      <b-progress :value="25" variant="success" :striped="striped"></b-progress>
      <b-progress
        :value="50"
        variant="info"
        :striped="striped"
        class="mt-2"
      ></b-progress>
      <b-progress
        :value="75"
        variant="warning"
        :striped="striped"
        class="mt-2"
      ></b-progress>
      <b-progress
        :value="100"
        variant="danger"
        :striped="striped"
        class="mt-2"
      ></b-progress>

      <b-button variant="primary" @click="striped = !striped" class="mt-3">
        {{ striped ? "Remove" : "Add" }} Striped
      </b-button>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ProgressStripedBackground",

  data: () => ({
    striped: true,
  }),
  components: { BaseCard },
};
</script>