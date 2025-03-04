<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Spinner color variants -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Spinner color variants"
    subtitle="Spinners use currentColor for their color, meaning it inherits the current font color. You can customize the color using the standard text color variants using the variant prop."
    modalid="modal-7"
    modaltitle="Spinner color variants"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;div class=&quot;text-center mb-3 d-flex justify-content-between&quot;&gt;
      &lt;b-spinner
        v-for=&quot;variant in variants&quot;
        :variant=&quot;variant&quot;
        :key=&quot;variant&quot;
      &gt;&lt;/b-spinner&gt;
    &lt;/div&gt;

    &lt;div class=&quot;text-center d-flex justify-content-between&quot;&gt;
      &lt;b-spinner
        v-for=&quot;variant in variants&quot;
        :variant=&quot;variant&quot;
        :key=&quot;variant&quot;
        type=&quot;grow&quot;
      &gt;&lt;/b-spinner&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        variants: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark']
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
      <div class="text-center mb-3 d-flex justify-content-between">
        <b-spinner
          v-for="variant in variants"
          :variant="variant"
          :key="variant"
        ></b-spinner>
      </div>

      <div class="text-center d-flex justify-content-between">
        <b-spinner
          v-for="variant in variants"
          :variant="variant"
          :key="variant"
          type="grow"
        ></b-spinner>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "SpinnerVarients",

  data: () => ({
    variants: [
      "primary",
      "secondary",
      "danger",
      "warning",
      "success",
      "info",
      "light",
      "dark",
    ],
  }),
  components: { BaseCard },
};
</script>