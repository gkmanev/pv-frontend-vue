<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Clear button -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Clear button"
    subtitle="Optionally show a clear icon via the show-clear prop. The value will be set to null when the clear icon is clicked."
    modalid="modal-12"
    modaltitle="Clear button"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-rating v-model=&quot;value&quot; show-clear show-value&gt;&lt;/b-form-rating&gt;
    &lt;p class=&quot;mt-2&quot;&gt;Value: {{ value }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: 2.5
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
      <b-form-rating v-model="value" show-clear show-value></b-form-rating>
      <p class="mt-2">Value: {{ value }}</p>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ClearButtonRating",

  data: () => ({
    value: 2.5,
  }),
  components: { BaseCard },
};
</script>