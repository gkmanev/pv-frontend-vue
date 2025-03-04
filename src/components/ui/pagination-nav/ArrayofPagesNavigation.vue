<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Providing an array of pages -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard
    title="Providing an array of pages"
    subtitle="Rather than using number-of-pages to auto generate page links, you can pass an array of links via the pages prop."
    modalid="modal-2"
    modaltitle="Providing an array of pages"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;b-pagination-nav :pages=&quot;pages1&quot; use-router&gt;&lt;/b-pagination-nav&gt;
  &lt;b-pagination-nav :pages=&quot;pages2&quot; use-router&gt;&lt;/b-pagination-nav&gt;
  &lt;b-pagination-nav :pages=&quot;pages3&quot; use-router&gt;&lt;/b-pagination-nav&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      // Simple array of strings
      pages1: ['?page=1', '?page=2', '?page=3'],
      // Array of objects with string links
      pages2: [
        { link: '?page=1', text: 'One' },
        { link: '?page=2', text: 'Two' },
        { link: '?page=3', text: 'Three' }
      ],
      // Array of objects with router `to` locations
      pages3: [
        { link: { query: { page: 1 } }, text: 'Page 1' },
        { link: { query: { page: 2 } }, text: 'Page 2' },
        { link: { query: { page: 3 } }, text: 'Page 3' }
      ]
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
        <b-pagination-nav :pages="pages1" use-router></b-pagination-nav>
        <b-pagination-nav :pages="pages2" use-router></b-pagination-nav>
        <b-pagination-nav :pages="pages3" use-router></b-pagination-nav>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "ArrayofPagesNavigation",

  data: () => ({
    // Simple array of strings
    pages1: ["?page=1", "?page=2", "?page=3"],
    // Array of objects with string links
    pages2: [
      { link: "?page=1", text: "One" },
      { link: "?page=2", text: "Two" },
      { link: "?page=3", text: "Three" },
    ],
    // Array of objects with router `to` locations
    pages3: [
      { link: { query: { page: 1 } }, text: "Page 1" },
      { link: { query: { page: 2 } }, text: "Page 2" },
      { link: { query: { page: 3 } }, text: "Page 3" },
    ],
  }),
  components: { BaseCard },
};
</script>