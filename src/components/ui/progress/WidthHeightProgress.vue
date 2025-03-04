<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Width and height -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Width and height"
    subtitle="<b-progress> will always expand to the maximum with of its parent container."
    modalid="modal-7"
    modaltitle="Width and height"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;h5&gt;Default width&lt;/h5&gt;
    &lt;b-progress :value=&quot;value&quot; class=&quot;mb-3&quot;&gt;&lt;/b-progress&gt;

    &lt;h5&gt;Custom widths&lt;/h5&gt;
    &lt;b-progress :value=&quot;value&quot; class=&quot;w-75 mb-2&quot;&gt;&lt;/b-progress&gt;
    &lt;b-progress :value=&quot;value&quot; class=&quot;w-50 mb-2&quot;&gt;&lt;/b-progress&gt;
    &lt;b-progress :value=&quot;value&quot; class=&quot;w-25&quot;&gt;&lt;/b-progress&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: 75
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
      <h5>Default width</h5>
      <b-progress :value="value" class="mb-3"></b-progress>

      <h5>Custom widths</h5>
      <b-progress :value="value" class="w-75 mb-2"></b-progress>
      <b-progress :value="value" class="w-50 mb-2"></b-progress>
      <b-progress :value="value" class="w-25"></b-progress>
      <h5 class="mt-3">Default height</h5>
      <b-progress
        :value="value"
        height="8px"
        show-progress
        class="mb-3"
      ></b-progress>

      <h5>Custom heights</h5>
      <b-progress
        height="2rem"
        :value="value"
        show-progress
        class="mb-2"
      ></b-progress>
      <b-progress
        height="20px"
        :value="value"
        show-progress
        class="mb-2"
      ></b-progress>
      <b-progress height="2px" :value="value"></b-progress>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "WidthHeightProgress",

  data: () => ({
    value: 75,
  }),
  components: { BaseCard },
};
</script>