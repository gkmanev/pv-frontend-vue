<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Show value -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Show value"
    subtitle="By default <b-form-rating> does not display the current numerical value. To show the current value simply set the show-value prop to true."
    modalid="modal-5"
    modaltitle="Show value"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-rating v-model=&quot;value&quot; show-value&gt;&lt;/b-form-rating&gt;
    &lt;p class=&quot;mt-2&quot;&gt;Value: {{ value }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: 4
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
      <b-form-rating v-model="value" show-value></b-form-rating>
      <p class="mt-2">Value: {{ value }}</p>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ShowValueRating",

  data: () => ({
    value: 4,
  }),
  components: { BaseCard },
};
</script>