<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Borderless Rating -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Borderless Rating"
    subtitle="<b-form-rating> has standard Bootstrap form-control styling. To disable the default form-control border, simply set the no-border prop to true."
    modalid="modal-10"
    modaltitle="Borderless Rating"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;label for=&quot;rating-sm-no-border&quot;&gt;Small rating with no border&lt;/label&gt;
    &lt;b-form-rating id=&quot;rating-sm-no-border&quot; v-model=&quot;value&quot; no-border size=&quot;sm&quot;&gt;&lt;/b-form-rating&gt;

    &lt;label for=&quot;rating-md-no-border&quot; class=&quot;mt-3&quot;&gt;Default rating (medium) with no border&lt;/label&gt;
    &lt;b-form-rating id=&quot;rating-md-no-border&quot; v-model=&quot;value&quot; no-border&gt;&lt;/b-form-rating&gt;

    &lt;label for=&quot;rating-lg-no-border&quot; class=&quot;mt-3&quot;&gt;Large rating with no border&lt;/label&gt;
    &lt;b-form-rating id=&quot;rating-lg-no-border&quot; v-model=&quot;value&quot; no-border size=&quot;lg&quot;&gt;&lt;/b-form-rating&gt;

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
      <label for="rating-sm-no-border">Small rating with no border</label>
      <b-form-rating
        id="rating-sm-no-border"
        v-model="value"
        no-border
        size="sm"
      ></b-form-rating>

      <label for="rating-md-no-border" class="mt-3"
        >Default rating (medium) with no border</label
      >
      <b-form-rating
        id="rating-md-no-border"
        v-model="value"
        no-border
      ></b-form-rating>

      <label for="rating-lg-no-border" class="mt-3"
        >Large rating with no border</label
      >
      <b-form-rating
        id="rating-lg-no-border"
        v-model="value"
        no-border
        size="lg"
      ></b-form-rating>

      <p class="mt-2">Value: {{ value }}</p>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "BorderlessRating",

  data: () => ({
    value: null,
  }),
  components: { BaseCard },
};
</script>