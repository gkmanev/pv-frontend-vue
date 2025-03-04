<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Button size -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard
    title="Button size"
    subtitle="Optionally change from the default button size by setting the size prop to either 'sm' for smaller buttons or 'lg' for larger buttons."
    modalid="modal-5"
    modaltitle="Button size"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div class=&quot;overflow-auto&quot;&gt;
  &lt;div&gt;
    &lt;h6&gt;Small&lt;/h6&gt;
    &lt;b-pagination-nav
      size=&quot;sm&quot;
      number-of-pages=&quot;10&quot;
      base-url=&quot;#&quot;
    &gt;&lt;/b-pagination-nav&gt;
  &lt;/div&gt;

  &lt;div class=&quot;mt-3&quot;&gt;
    &lt;h6&gt;Default&lt;/h6&gt;
    &lt;b-pagination-nav
      number-of-pages=&quot;10&quot;
      base-url=&quot;#&quot;
    &gt;&lt;/b-pagination-nav&gt;
  &lt;/div&gt;

  &lt;div class=&quot;mt-3&quot;&gt;
    &lt;h6&gt;Large&lt;/h6&gt;
    &lt;b-pagination-nav
      size=&quot;lg&quot;
      number-of-pages=&quot;10&quot;
      base-url=&quot;#&quot;
    &gt;&lt;/b-pagination-nav&gt;
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
          <h6>Small</h6>
          <b-pagination-nav
            size="sm"
            number-of-pages="10"
            base-url="#"
          ></b-pagination-nav>
        </div>

        <div class="mt-3">
          <h6>Default</h6>
          <b-pagination-nav
            number-of-pages="10"
            base-url="#"
          ></b-pagination-nav>
        </div>

        <div class="mt-3">
          <h6>Large</h6>
          <b-pagination-nav
            size="lg"
            number-of-pages="10"
            base-url="#"
          ></b-pagination-nav>
        </div>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "ButtonSizePaginationNav",

  data: () => ({}),
  components: { BaseCard },
};
</script>