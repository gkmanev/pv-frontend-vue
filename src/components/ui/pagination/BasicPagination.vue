<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Basic Pagination -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard
    title="Basic Pagination"
    subtitle="Quick first, previous, next, last, and page buttons for pagination control of another component."
    modalid="modal-2"
    modaltitle="Basic Pagination"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div class=&quot;overflow-auto&quot;&gt;
    &lt;b-pagination
      v-model=&quot;currentPage&quot;
      :total-rows=&quot;rows&quot;
      :per-page=&quot;perPage&quot;
      aria-controls=&quot;my-table&quot;
    &gt;&lt;/b-pagination&gt;

    &lt;p class=&quot;mt-3&quot;&gt;Current Page: {{ currentPage }}&lt;/p&gt;

    &lt;b-table
      id=&quot;my-table&quot;
      :items=&quot;items&quot;
      :per-page=&quot;perPage&quot;
      :current-page=&quot;currentPage&quot;
      small
    &gt;&lt;/b-table&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        perPage: 3,
        currentPage: 1,
        items: [
          { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
          { id: 3, first_name: 'Barney', last_name: 'Rubble' },
          { id: 4, first_name: 'Betty', last_name: 'Rubble' },
          { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
          { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
          { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
        ]
      }
    },
    computed: {
      rows() {
        return this.items.length
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
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>

        <p class="mt-3">Current Page: {{ currentPage }}</p>

        <b-table
          id="my-table"
          :items="items"
          :per-page="perPage"
          :current-page="currentPage"
          small
        ></b-table>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "BasicPagination",

  data: () => ({
    perPage: 3,
    currentPage: 1,
    items: [
      { id: 1, first_name: "Fred", last_name: "Flintstone" },
      { id: 2, first_name: "Wilma", last_name: "Flintstone" },
      { id: 3, first_name: "Barney", last_name: "Rubble" },
      { id: 4, first_name: "Betty", last_name: "Rubble" },
      { id: 5, first_name: "Pebbles", last_name: "Flintstone" },
      { id: 6, first_name: "Bamm Bamm", last_name: "Rubble" },
      { id: 7, first_name: "The Great", last_name: "Gazzoo" },
      { id: 8, first_name: "Rockhead", last_name: "Slate" },
      { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
    ],
  }),
  components: { BaseCard },
  computed: {
    rows() {
      return this.items.length;
    },
  },
};
</script>