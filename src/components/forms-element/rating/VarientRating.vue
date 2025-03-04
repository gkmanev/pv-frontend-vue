<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Variant Rating -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Variant Rating"
    subtitle="Easily apply one of the Bootstrap theme color variants to the rating icon via the variant prop."
    modalid="modal-3"
    modaltitle="Variant Rating"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-rating v-model=&quot;value&quot; variant=&quot;warning&quot; class=&quot;mb-2&quot;&gt;&lt;/b-form-rating&gt;
    &lt;b-form-rating v-model=&quot;value&quot; variant=&quot;success&quot; class=&quot;mb-2&quot;&gt;&lt;/b-form-rating&gt;
    &lt;b-form-rating v-model=&quot;value&quot; variant=&quot;danger&quot; class=&quot;mb-2&quot;&gt;&lt;/b-form-rating&gt;
    &lt;b-form-rating v-model=&quot;value&quot; variant=&quot;primary&quot; class=&quot;mb-2&quot;&gt;&lt;/b-form-rating&gt;
    &lt;b-form-rating v-model=&quot;value&quot; variant=&quot;info&quot; class=&quot;mb-2&quot;&gt;&lt;/b-form-rating&gt;
    &lt;p class=&quot;mt-2&quot;&gt;Value: {{ value }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: 3
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
        variant="warning"
        class="mb-2"
      ></b-form-rating>
      <b-form-rating
        v-model="value"
        variant="success"
        class="mb-2"
      ></b-form-rating>
      <b-form-rating
        v-model="value"
        variant="danger"
        class="mb-2"
      ></b-form-rating>
      <b-form-rating
        v-model="value"
        variant="primary"
        class="mb-2"
      ></b-form-rating>
      <b-form-rating
        v-model="value"
        variant="info"
        class="mb-2"
      ></b-form-rating>
      <p class="mt-2">Value: {{ value }}</p>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "VarientRating",

  data: () => ({
    value: 3,
  }),
  components: { BaseCard },
};
</script>