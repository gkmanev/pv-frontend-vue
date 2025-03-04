<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Readonly Rating -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Readonly Rating"
    subtitle="Readonly mode is used for displaying an aggregated rating, and supports half stars."
    modalid="modal-2"
    modaltitle="Readonly Rating"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-rating v-model=&quot;value&quot; readonly&gt;&lt;/b-form-rating&gt;
    &lt;p class=&quot;mt-2&quot;&gt;Value: {{ value }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: 2.567
      }
    }
  }
&lt;/script&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-rating v-model="value" readonly></b-form-rating>
      <p class="mt-2">Value: {{ value }}</p>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ReadonlyRating",

  data: () => ({
    value: 2.567,
  }),
  components: { BaseCard },
};
</script>