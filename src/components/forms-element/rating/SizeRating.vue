<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Control sizing -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Control sizing"
    subtitle="Fancy a small or large rating control? Simply set the prop size to either 'sm' or 'lg' respectively."
    modalid="modal-8"
    modaltitle="Control sizing"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;label for=&quot;rating-sm&quot;&gt;Small rating&lt;/label&gt;
    &lt;b-form-rating id=&quot;rating-sm&quot; v-model=&quot;value&quot; size=&quot;sm&quot;&gt;&lt;/b-form-rating&gt;

    &lt;label for=&quot;rating-md&quot; class=&quot;mt-3&quot;&gt;Default rating (medium)&lt;/label&gt;
    &lt;b-form-rating id=&quot;rating-md&quot; v-model=&quot;value&quot;&gt;&lt;/b-form-rating&gt;

    &lt;label for=&quot;rating-lg&quot; class=&quot;mt-3&quot;&gt;Large rating&lt;/label&gt;
    &lt;b-form-rating id=&quot;rating-lg&quot; v-model=&quot;value&quot; size=&quot;lg&quot;&gt;&lt;/b-form-rating&gt;

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
      <label for="rating-sm">Small rating</label>
      <b-form-rating id="rating-sm" v-model="value" size="sm"></b-form-rating>

      <label for="rating-md" class="mt-3">Default rating (medium)</label>
      <b-form-rating id="rating-md" v-model="value"></b-form-rating>

      <label for="rating-lg" class="mt-3">Large rating</label>
      <b-form-rating id="rating-lg" v-model="value" size="lg"></b-form-rating>

      <p class="mt-2">Value: {{ value }}</p>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "SizeRating",

  data: () => ({
    value: null,
  }),
  components: { BaseCard },
};
</script>