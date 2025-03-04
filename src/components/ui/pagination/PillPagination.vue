<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Pill style -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard
    title="Pill style"
    subtitle="Easily switch to pill style buttons by setting the pills prop"
    modalid="modal-8"
    modaltitle="Pill style"
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
      &lt;h6&gt;Small Pills&lt;/h6&gt;
      &lt;b-pagination v-model=&quot;currentPage&quot; pills :total-rows=&quot;rows&quot; size=&quot;sm&quot;&gt;&lt;/b-pagination&gt;
    &lt;/div&gt;

    &lt;div class=&quot;mt-3&quot;&gt;
      &lt;h6&gt;Default Pills&lt;/h6&gt;
      &lt;b-pagination v-model=&quot;currentPage&quot; pills :total-rows=&quot;rows&quot;&gt;&lt;/b-pagination&gt;
    &lt;/div&gt;

    &lt;div class=&quot;mt-3&quot;&gt;
      &lt;h6&gt;Large Pills&lt;/h6&gt;
      &lt;b-pagination v-model=&quot;currentPage&quot; pills :total-rows=&quot;rows&quot; size=&quot;lg&quot;&gt;&lt;/b-pagination&gt;
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
          <h6>Small Pills</h6>
          <b-pagination
            v-model="currentPage"
            pills
            :total-rows="rows"
            size="sm"
          ></b-pagination>
        </div>

        <div class="mt-3">
          <h6>Default Pills</h6>
          <b-pagination
            v-model="currentPage"
            pills
            :total-rows="rows"
          ></b-pagination>
        </div>

        <div class="mt-3">
          <h6>Large Pills</h6>
          <b-pagination
            v-model="currentPage"
            pills
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
  name: "PillPagination",

  data: () => ({
    rows: 100,
    currentPage: 1,
  }),
  components: { BaseCard },
};
</script>