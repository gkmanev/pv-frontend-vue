<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Inline Spinbutton -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Inline Spinbutton"
    modalid="modal-4"
    modaltitle="Inline Spinbutton"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;label for=&quot;sb-inline&quot;&gt;Inline spin button&lt;/label&gt;
    &lt;b-form-spinbutton id=&quot;sb-inline&quot; v-model=&quot;value&quot; inline&gt;&lt;/b-form-spinbutton&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: 50
      }
    }
  }
&lt;/script&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <label for="sb-inline" class="mr-2">Inline spin button</label>
      <b-form-spinbutton
        id="sb-inline"
        v-model="value"
        inline
      ></b-form-spinbutton>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "InlineSpinButton",

  data: () => ({
    value: 50,
  }),
  components: { BaseCard },
};
</script>