<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Disabled Rating -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Disabled Rating"
    subtitle="If you require additional information before a user can chose a ratings value, simply set the disabled prop to true"
    modalid="modal-11"
    modaltitle="Disabled Rating"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;label for=&quot;rating-disabled&quot;&gt;Disabled rating&lt;/label&gt;
    &lt;b-form-rating id=&quot;rating-disabled&quot; value=&quot;2.75&quot; disabled&gt;&lt;/b-form-rating&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <label for="rating-disabled">Disabled rating</label>
      <b-form-rating id="rating-disabled" value="2.75" disabled></b-form-rating>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "DisabledRating",

  data: () => ({}),
  components: { BaseCard },
};
</script>