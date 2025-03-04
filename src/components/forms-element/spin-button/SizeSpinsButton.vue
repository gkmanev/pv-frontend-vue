<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Size -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Size"
    subtitle="As with other form controls, <b-form-spinbutton> supports small and large sizing via setting the size prop to either 'sm' or 'lg', respectively."
    modalid="modal-9"
    modaltitle="Size"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;label for=&quot;sb-small&quot;&gt;Spin button - Small size&lt;/label&gt;
    &lt;b-form-spinbutton id=&quot;sb-small&quot; size=&quot;sm&quot; placeholder=&quot;--&quot; class=&quot;mb-2&quot;&gt;&lt;/b-form-spinbutton&gt;

    &lt;label for=&quot;sb-default&quot;&gt;Spin button - Default size&lt;/label&gt;
    &lt;b-form-spinbutton id=&quot;sb-default&quot; placeholder=&quot;--&quot; class=&quot;mb-2&quot;&gt;&lt;/b-form-spinbutton&gt;

    &lt;label for=&quot;sb-large&quot;&gt;Spin button - Large size&lt;/label&gt;
    &lt;b-form-spinbutton id=&quot;sb-large&quot; size=&quot;lg&quot; placeholder=&quot;--&quot; class=&quot;mb-2&quot;&gt;&lt;/b-form-spinbutton&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <label for="sb-small">Spin button - Small size</label>
      <b-form-spinbutton
        id="sb-small"
        size="sm"
        placeholder="--"
        class="mb-2"
      ></b-form-spinbutton>

      <label for="sb-default">Spin button - Default size</label>
      <b-form-spinbutton
        id="sb-default"
        placeholder="--"
        class="mb-2"
      ></b-form-spinbutton>

      <label for="sb-large">Spin button - Large size</label>
      <b-form-spinbutton
        id="sb-large"
        size="lg"
        placeholder="--"
        class="mb-2"
      ></b-form-spinbutton>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "SizeSpinsButton",

  data: () => ({}),
  components: { BaseCard },
};
</script>