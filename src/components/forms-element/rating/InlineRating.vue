<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Inline Rating -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Inline Rating"
    subtitle="<b-form-rating> occupies 100% width of the parent container. In some situations you may prefer the custom input to occupy on the space required for it's contents."
    modalid="modal-9"
    modaltitle="Inline Rating"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;label for=&quot;rating-inline&quot;&gt;Inline rating:&lt;/label&gt;
    &lt;b-form-rating id=&quot;rating-inline&quot; inline value=&quot;4&quot;&gt;&lt;/b-form-rating&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <label for="rating-inline">Inline rating:</label>
      <b-form-rating id="rating-inline" inline value="4"></b-form-rating>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "InlineRating",

  data: () => ({}),
  components: { BaseCard },
};
</script>