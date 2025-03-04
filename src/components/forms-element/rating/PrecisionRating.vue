<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Precision Rating -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Precision Rating"
    modalid="modal-6"
    modaltitle="Precision Rating"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-rating v-model=&quot;value&quot; readonly show-value precision=&quot;2&quot;&gt;&lt;/b-form-rating&gt;
    &lt;p class=&quot;mt-2&quot;&gt;Value: {{ value }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: 3.555
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
      <b-form-rating
        v-model="value"
        readonly
        show-value
        precision="2"
      ></b-form-rating>
      <p class="mt-2">Value: {{ value }}</p>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "PrecisionRating",

  data: () => ({
    value: 3.555,
  }),
  components: { BaseCard },
};
</script>