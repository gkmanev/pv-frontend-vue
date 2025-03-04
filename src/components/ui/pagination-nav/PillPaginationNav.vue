<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Pill style -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard
    title="Pill style"
    subtitle="Easily switch to pill style buttons by setting the pills prop"
    modalid="modal-9"
    modaltitle="Pill style"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div class=&quot;overflow-auto&quot;&gt;
  &lt;div&gt;
    &lt;h6&gt;Small Pills&lt;/h6&gt;
    &lt;b-pagination-nav
      pills
      size=&quot;sm&quot;
      number-of-pages=&quot;10&quot;
      base-url=&quot;#&quot;&gt;
    &lt;/b-pagination-nav&gt;
  &lt;/div&gt;

  &lt;div class=&quot;mt-3&quot;&gt;
    &lt;h6&gt;Default Pills&lt;/h6&gt;
    &lt;b-pagination-nav
      pills
      number-of-pages=&quot;10&quot;
      base-url=&quot;#&quot;&gt;
    &lt;/b-pagination-nav&gt;
  &lt;/div&gt;

  &lt;div class=&quot;mt-3&quot;&gt;
    &lt;h6&gt;Large Pills&lt;/h6&gt;
    &lt;b-pagination-nav
      pills
      size=&quot;lg&quot;
      number-of-pages=&quot;10&quot;
      base-url=&quot;#&quot;&gt;
    &lt;/b-pagination-nav&gt;
  &lt;/div&gt;
&lt;/div&gt;
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
          <b-pagination-nav
            pills
            size="sm"
            number-of-pages="10"
            base-url="#">
          </b-pagination-nav>
        </div>

        <div class="mt-3">
          <h6>Default Pills</h6>
          <b-pagination-nav
            pills
            number-of-pages="10"
            base-url="#">
          </b-pagination-nav>
        </div>

        <div class="mt-3">
          <h6>Large Pills</h6>
          <b-pagination-nav
            pills
            size="lg"
            number-of-pages="10"
            base-url="#">
          </b-pagination-nav>
        </div>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "PillPaginationNav",

  data: () => ({}),
  components: { BaseCard },
};
</script>