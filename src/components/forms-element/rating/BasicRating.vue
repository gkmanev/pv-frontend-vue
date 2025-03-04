<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Basic Rating -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Basic Rating"
    subtitle="BootstrapVue's custom star rating component, <b-form-rating>, is for entering or displaying a rating value."
    modalid="modal-1"
    modaltitle="Basic Rating"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-rating v-model=&quot;value&quot;&gt;&lt;/b-form-rating&gt;
    &lt;p class=&quot;mt-2&quot;&gt;Value: {{ value }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: null
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
      <b-form-rating v-model="value"></b-form-rating>
      <p class="mt-2">Value: {{ value }}</p>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "BasicRating",

  data: () => ({
    value: null,
  }),
  components: { BaseCard },
};
</script>