<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Min, max, and step -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Min, max, and step"
    subtitle="Spinbuttons have a default range from 1 to 100, which can be changed by setting the min and max props. "
    modalid="modal-2"
    modaltitle="Min, max, and step"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;label for=&quot;sb-step&quot;&gt;Spin button with step of 0.25&lt;/label&gt;
    &lt;b-form-spinbutton
      id=&quot;sb-step&quot;
      v-model=&quot;value&quot;
      min=&quot;0&quot;
      max=&quot;10&quot;
      step=&quot;0.25&quot;
    &gt;&lt;/b-form-spinbutton&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: 0
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
      <label for="sb-step">Spin button with step of 0.25</label>
      <b-form-spinbutton
        id="sb-step"
        v-model="value"
        min="0"
        max="10"
        step="0.25"
      ></b-form-spinbutton>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "MinMaxStepSpinButton",

  data: () => ({
    value: 0,
  }),
  components: { BaseCard },
};
</script>