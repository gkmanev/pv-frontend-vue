<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Button size -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard
    title="Button size"
    subtitle="Optionally change from the default button size by setting the size prop to either 'sm' for smaller buttons or 'lg' for larger buttons."
    modalid="modal-4"
    modaltitle="Button size"
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
      &lt;h6&gt;Small&lt;/h6&gt;
      &lt;b-pagination v-model=&quot;currentPage&quot; :total-rows=&quot;rows&quot; size=&quot;sm&quot;&gt;&lt;/b-pagination&gt;
    &lt;/div&gt;

    &lt;div class=&quot;mt-3&quot;&gt;
      &lt;h6&gt;Default&lt;/h6&gt;
      &lt;b-pagination v-model=&quot;currentPage&quot; :total-rows=&quot;rows&quot;&gt;&lt;/b-pagination&gt;
    &lt;/div&gt;

    &lt;div class=&quot;mt-3&quot;&gt;
      &lt;h6&gt;Large&lt;/h6&gt;
      &lt;b-pagination v-model=&quot;currentPage&quot; :total-rows=&quot;rows&quot; size=&quot;lg&quot;&gt;&lt;/b-pagination&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        rows: 100,
        currentPage: 1
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
          <h6>Small</h6>
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            size="sm"
          ></b-pagination>
        </div>

        <div class="mt-3">
          <h6>Default</h6>
          <b-pagination v-model="currentPage" :total-rows="rows"></b-pagination>
        </div>

        <div class="mt-3">
          <h6>Large</h6>
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            size="lg"
          ></b-pagination>
        </div>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "ButtonSizePagination",

  data: () => ({
    rows: 100,
    currentPage: 1,
  }),
  components: { BaseCard },
};
</script>