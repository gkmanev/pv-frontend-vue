<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Number of stars -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Number of stars"
    subtitle="By default, <b-form-rating> defaults to 5 stars. You can change the number of stars via the stars prop."
    modalid="modal-4"
    modaltitle="Number of stars"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;label for=&quot;rating-10&quot;&gt;Rating with 10 stars:&lt;/label&gt;
    &lt;b-form-rating id=&quot;rating-10&quot; v-model=&quot;value10&quot; stars=&quot;10&quot;&gt;&lt;/b-form-rating&gt;
    &lt;p class=&quot;mt-2&quot;&gt;Value: {{ value10 }}&lt;/p&gt;

    &lt;label for=&quot;rating-7&quot;&gt;Rating with 7 stars:&lt;/label&gt;
    &lt;b-form-rating id=&quot;rating-7&quot; v-model=&quot;value7&quot; stars=&quot;7&quot;&gt;&lt;/b-form-rating&gt;
    &lt;p class=&quot;mt-2&quot;&gt;Value: {{ value7 }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value10: null,
        value7: null,
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
      <label for="rating-10">Rating with 10 stars:</label>
      <b-form-rating
        id="rating-10"
        v-model="value10"
        stars="10"
      ></b-form-rating>
      <p class="mt-2">Value: {{ value10 }}</p>

      <label for="rating-7">Rating with 7 stars:</label>
      <b-form-rating id="rating-7" v-model="value7" stars="7"></b-form-rating>
      <p class="mt-2">Value: {{ value7 }}</p>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "NumberofStarsRating",

  data: () => ({
    value10: null,
    value7: null,
  }),
  components: { BaseCard },
};
</script>