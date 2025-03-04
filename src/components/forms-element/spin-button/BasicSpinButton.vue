<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Basic Spinbutton -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Basic Spinbutton"
    subtitle="Spin buttons are a BootstrapVue custom numerical range form control. "
    modalid="modal-1"
    modaltitle="Basic Spinbutton"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;label for=&quot;demo-sb&quot;&gt;Spin Button&lt;/label&gt;
    &lt;b-form-spinbutton id=&quot;demo-sb&quot; v-model=&quot;value&quot; min=&quot;1&quot; max=&quot;100&quot;&gt;&lt;/b-form-spinbutton&gt;
    &lt;p&gt;Value: {{ value }}&lt;/p&gt;
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
      <label for="demo-sb">Spin Button</label>
      <b-form-spinbutton
        id="demo-sb"
        v-model="value"
        min="1"
        max="100"
      ></b-form-spinbutton>
      <p>Value: {{ value }}</p>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "BasicSpinButton",

  data: () => ({
    value: 50,
  }),
  components: { BaseCard },
};
</script>