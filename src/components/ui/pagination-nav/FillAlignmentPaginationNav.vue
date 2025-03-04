<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Fill Alignment -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard
    title="Fill Alignment"
    subtitle="Change the alignment to center, right (right is an alias for end), or fill by setting the prop align to the appropriate value."
    modalid="modal-7"
    modaltitle="Fill Alignment"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div class=&quot;overflow-auto&quot;&gt;
  &lt;h6 class=&quot;text-center&quot;&gt;Fill alignment&lt;/h6&gt;
  &lt;b-pagination-nav
    number-of-pages=&quot;10&quot;
    base-url=&quot;#&quot;
    align=&quot;fill&quot;&gt;
  &lt;/b-pagination-nav&gt;
&lt;/div&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="overflow-auto">
        <h6 class="text-center">Fill alignment</h6>
        <b-pagination-nav
          number-of-pages="10"
          base-url="#"
          align="fill">
        </b-pagination-nav>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "FillAlignmentPaginationNav",

  data: () => ({}),
  components: { BaseCard },
};
</script>