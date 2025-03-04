<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Goto first/last button type -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard
    title="Goto first/last button type"
    subtitle="If you prefer to have buttons with the first and last page number to go to the corresponding page, use the first-number and last-number props."
    modalid="modal-7"
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
      &lt;b-pagination
        v-model=&quot;currentPage&quot;
        :total-rows=&quot;rows&quot;
        :per-page=&quot;perPage&quot;
        first-number
      &gt;&lt;/b-pagination&gt;
    &lt;/div&gt;

    &lt;div class=&quot;mt-3&quot;&gt;
      &lt;h6&gt;Goto last button number&lt;/h6&gt;
      &lt;b-pagination
        v-model=&quot;currentPage&quot;
        :total-rows=&quot;rows&quot;
        :per-page=&quot;perPage&quot;
        last-number
      &gt;&lt;/b-pagination&gt;
    &lt;/div&gt;

    &lt;div class=&quot;mt-3&quot;&gt;
      &lt;h6&gt;Goto first and last button number&lt;/h6&gt;
      &lt;b-pagination
        v-model=&quot;currentPage&quot;
        :total-rows=&quot;rows&quot;
        :per-page=&quot;perPage&quot;
        first-number
        last-number
      &gt;&lt;/b-pagination&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        rows: 100,
        perPage: 1,
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
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            first-number
          ></b-pagination>
        </div>

        <div class="mt-3">
          <h6>Goto last button number</h6>
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            last-number
          ></b-pagination>
        </div>

        <div class="mt-3">
          <h6>Goto first and last button number</h6>
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            first-number
            last-number
          ></b-pagination>
        </div>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "FirstLastButtonPagination",

  data: () => ({
    rows: 100,
    perPage: 1,
    currentPage: 5,
  }),
  components: { BaseCard },
};
</script>