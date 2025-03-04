<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Number wrapping -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Number wrapping"
    subtitle="when the value is increased to the max value, it pressing the increment button will have no effect."
    modalid="modal-3"
    modaltitle="Number wrapping"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;label for=&quot;sb-wrap&quot;&gt;Wrapping value spin button&lt;/label&gt;
    &lt;b-form-spinbutton id=&quot;sb-wrap&quot; wrap min=&quot;1&quot; max=&quot;25&quot; placeholder=&quot;--&quot;&gt;&lt;/b-form-spinbutton&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <label for="sb-wrap">Wrapping value spin button</label>
      <b-form-spinbutton
        id="sb-wrap"
        wrap
        min="1"
        max="25"
        placeholder="--"
      ></b-form-spinbutton>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "NumberWrapSpinButton",

  data: () => ({}),
  components: { BaseCard },
};
</script>