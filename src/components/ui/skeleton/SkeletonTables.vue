<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Table -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Table"
    subtitle="<b-skeleton-table> allows you to scaffold a basic table structure by utilizing the rows and columns props to define the size of the table."
    modalid="modal-5"
    modaltitle="Table"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-skeleton-table
  :rows=&quot;11&quot;
  :columns=&quot;4&quot;
  :table-props=&quot;{ bordered: true, striped: true }&quot;&gt;
&lt;/b-skeleton-table&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-skeleton-table
        :rows="11"
        :columns="4"
        :table-props="{ bordered: true, striped: true }">
      </b-skeleton-table>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "SkeletonTables",

  data: () => ({}),
  components: { BaseCard },
};
</script>