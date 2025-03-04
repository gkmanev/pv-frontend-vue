<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Vertical Spin Button -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Vertical Spin Button"
    subtitle="Spinbuttons can be oriented in vertical mode"
    modalid="modal-5"
    modaltitle="Vertical Spin Button"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;label for=&quot;sb-vertical&quot;&gt;Vertical spin button&lt;/label&gt;&lt;br&gt;
    &lt;b-form-spinbutton id=&quot;sb-vertical&quot; v-model=&quot;value&quot; vertical&gt;&lt;/b-form-spinbutton&gt;
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
      <label for="sb-vertical">Vertical spin button</label><br />
      <b-form-spinbutton
        id="sb-vertical"
        v-model="value"
        vertical
      ></b-form-spinbutton>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "VerticalSpinButton",

  data: () => ({
    value: 50,
  }),
  components: { BaseCard },
};
</script>