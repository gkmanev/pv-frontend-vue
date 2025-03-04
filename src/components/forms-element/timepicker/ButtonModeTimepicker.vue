<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Button only mode -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Button only mode"
    subtitle="Use the button-only prop to render the timepicker as a dropdown button."
    modalid="modal-7"
    modaltitle="Button only mode"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;label for=&quot;example-input&quot;&gt;Choose a time&lt;/label&gt;
    &lt;b-input-group class=&quot;mb-3&quot;&gt;
      &lt;b-form-input
        id=&quot;example-input&quot;
        v-model=&quot;value&quot;
        type=&quot;text&quot;
        placeholder=&quot;HH:mm:ss&quot;
      &gt;&lt;/b-form-input&gt;
      &lt;b-input-group-append&gt;
        &lt;b-form-timepicker
          v-model=&quot;value&quot;
          button-only
          right
          show-seconds
          locale=&quot;en&quot;
          aria-controls=&quot;example-input&quot;
        &gt;&lt;/b-form-timepicker&gt;
      &lt;/b-input-group-append&gt;
    &lt;/b-input-group&gt;
    &lt;p&gt;Value: '{{ value }}'&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: ''
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
      <label for="example-input">Choose a time</label>
      <b-input-group class="mb-3">
        <b-form-input
          id="example-input"
          v-model="value"
          type="text"
          placeholder="HH:mm:ss"
        ></b-form-input>
        <b-input-group-append>
          <b-form-timepicker
            v-model="value"
            button-only
            right
            show-seconds
            locale="en"
            aria-controls="example-input"
          ></b-form-timepicker>
        </b-input-group-append>
      </b-input-group>
      <p>Value: '{{ value }}'</p>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ButtonModeTimepicker",

  data: () => ({
    value: "",
  }),
  components: { BaseCard },
};
</script>