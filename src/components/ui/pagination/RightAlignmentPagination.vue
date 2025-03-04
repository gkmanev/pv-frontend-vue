<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Alignment Right -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard
    title="Alignment Right"
    subtitle="Change the alignment to center, right (right is an alias for end), or fill by setting the prop align to the appropriate value."
    modalid="modal-9"
    modaltitle="Alignment Right"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div class=&quot;overflow-auto&quot;&gt;
    &lt;div class=&quot;mt-3&quot;&gt;
      &lt;h6 class=&quot;text-right&quot;&gt;Right (end) alignment&lt;/h6&gt;
      &lt;b-pagination v-model=&quot;currentPage&quot; :total-rows=&quot;rows&quot; align=&quot;right&quot;&gt;&lt;/b-pagination&gt;
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
        <h6 class="text-right">Right (end) alignment</h6>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          align="right"
        ></b-pagination>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "RightAlignmentPagination",

  data: () => ({
    rows: 100,
    currentPage: 3,
  }),
  components: { BaseCard },
};
</script>