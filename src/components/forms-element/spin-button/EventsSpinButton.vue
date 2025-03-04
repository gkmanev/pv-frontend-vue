<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Events -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Events"
    subtitle="The input event is used to update the v-model and is emitted any time the value changes."
    modalid="modal-8"
    modaltitle="Events"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;label for=&quot;sb-input&quot;&gt;Spin button - input and change events&lt;/label&gt;
    &lt;b-form-spinbutton
      id=&quot;sb-input&quot;
      v-model=&quot;value1&quot;
      @change=&quot;value2 = $event&quot;
      wrap
    &gt;&lt;/b-form-spinbutton&gt;
    &lt;p&gt;Input event: {{ value1 }}&lt;/p&gt;
    &lt;p&gt;Change event: {{ value2 }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: 0,
        value2: null
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
      <label for="sb-input">Spin button - input and change events</label>
      <b-form-spinbutton
        id="sb-input"
        v-model="value1"
        @change="value2 = $event"
        wrap
      ></b-form-spinbutton>
      <p>Input event: {{ value1 }}</p>
      <p>Change event: {{ value2 }}</p>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "EventsSpinButton",

  data: () => ({
    value1: 0,
    value2: null,
  }),
  components: { BaseCard },
};
</script>