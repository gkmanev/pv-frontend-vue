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
&lt;div class=&quot;overflow-auto&quot;&gt;
  &lt;h6&gt;Left alignment (default)&lt;/h6&gt;
  &lt;b-pagination-nav number-of-pages=&quot;10&quot; base-url=&quot;#&quot;&gt;&lt;/b-pagination-nav&gt;
&lt;/div&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="overflow-auto">
        <h6>Left alignment (default)</h6>
        <b-pagination-nav number-of-pages="10" base-url="#"></b-pagination-nav>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "AlignmentPaginationNav",

  data: () => ({}),
  components: { BaseCard },
};
</script>