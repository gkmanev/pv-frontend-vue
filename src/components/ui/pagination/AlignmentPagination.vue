<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Alignment Left -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard
    title="Alignment Left"
    subtitle="By default the pagination component is left aligned."
    modalid="modal-1"
    modaltitle="Alignment Left"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div class=&quot;overflow-auto&quot;&gt;
    &lt;div&gt;
      &lt;h6&gt;Left alignment (default)&lt;/h6&gt;
      &lt;b-pagination v-model=&quot;currentPage&quot; :total-rows=&quot;rows&quot;&gt;&lt;/b-pagination&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        rows: 100,
        currentPage: 3
      }
    }
  }
&lt;/script&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="overflow-auto">
        <h6>Left alignment (default)</h6>
        <b-pagination v-model="currentPage" :total-rows="rows"></b-pagination>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "AlignmentPagination",

  data: () => ({
    rows: 100,
    currentPage: 3,
  }),
  components: { BaseCard },
};
</script>