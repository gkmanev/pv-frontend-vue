<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Goto first/last button type -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard
    title="Goto first/last button type"
    subtitle="If you prefer to have buttons with the first and last page number to go to the corresponding page, use the first-number and last-number props."
    modalid="modal-8"
    modaltitle="Goto first/last button type"
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
      &lt;h6&gt;Goto first button number&lt;/h6&gt;
      &lt;b-pagination-nav
        v-model=&quot;currentPage&quot;
        :number-of-pages=&quot;pages&quot;
        base-url=&quot;#&quot;
        first-number
      &gt;&lt;/b-pagination-nav&gt;
    &lt;/div&gt;

    &lt;div class=&quot;mt-3&quot;&gt;
      &lt;h6&gt;Goto last button number&lt;/h6&gt;
      &lt;b-pagination-nav
        v-model=&quot;currentPage&quot;
        :number-of-pages=&quot;pages&quot;
        base-url=&quot;#&quot;
        last-number
      &gt;&lt;/b-pagination-nav&gt;
    &lt;/div&gt;

    &lt;div class=&quot;mt-3&quot;&gt;
      &lt;h6&gt;Goto first and last button number&lt;/h6&gt;
      &lt;b-pagination-nav
        v-model=&quot;currentPage&quot;
        :number-of-pages=&quot;pages&quot;
        base-url=&quot;#&quot;
        first-number
        last-number
      &gt;&lt;/b-pagination-nav&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        pages: 100,
        currentPage: 5
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
        <div>
          <h6>Goto first button number</h6>
          <b-pagination-nav
            v-model="currentPage"
            :number-of-pages="pages"
            base-url="#"
            first-number>
          </b-pagination-nav>
        </div>

        <div class="mt-3">
          <h6>Goto last button number</h6>
          <b-pagination-nav
            v-model="currentPage"
            :number-of-pages="pages"
            base-url="#"
            last-number>
          </b-pagination-nav>
        </div>

        <div class="mt-3">
          <h6>Goto first and last button number</h6>
          <b-pagination-nav
            v-model="currentPage"
            :number-of-pages="pages"
            base-url="#"
            first-number
            last-number>
          </b-pagination-nav>
        </div>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "FirstLastButtonPaginationNav",

  data: () => ({
    pages: 100,
    currentPage: 5,
  }),
  components: { BaseCard },
};
</script>