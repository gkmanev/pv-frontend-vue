<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Basic Pagination -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard
    title="Basic Pagination"
    subtitle="Quick first, previous, next, last, and page buttons for pagination control of another component."
    modalid="modal-3"
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
    &lt;b-pagination-nav
      :link-gen=&quot;linkGen&quot;
      :page-gen=&quot;pageGen&quot;
      :number-of-pages=&quot;links.length&quot;
    &gt;&lt;/b-pagination-nav&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        links: ['#foo', '#bar', '#baz', '#faz']
      }
    },
    methods: {
      linkGen(pageNum) {
        return this.links[pageNum - 1]
      },
      pageGen(pageNum) {
        return this.links[pageNum - 1].slice(1)
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
        <b-pagination-nav
          :link-gen="linkGen"
          :page-gen="pageGen"
          :number-of-pages="links.length"
        ></b-pagination-nav>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "BasicPaginationNav",

  data: () => ({
    links: ["#foo", "#bar", "#baz", "#faz"],
  }),
  components: { BaseCard },
  methods: {
    linkGen(pageNum) {
      return this.links[pageNum - 1];
    },
    pageGen(pageNum) {
      return this.links[pageNum - 1].slice(1);
    },
  },
};
</script>