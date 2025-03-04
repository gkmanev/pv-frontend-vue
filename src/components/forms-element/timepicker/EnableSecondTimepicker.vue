<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Enabling of seconds spinbutton -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Enabling of seconds spinbutton"
    subtitle="To enable the section of seconds, set the show-seconds prop to true to enable the seconds selection spinbutton."
    modalid="modal-5"
    modaltitle="Enabling of seconds spinbutton"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-timepicker v-model=&quot;value&quot; show-seconds locale=&quot;en&quot;&gt;&lt;/b-form-timepicker&gt;
    &lt;div class=&quot;mt-2&quot;&gt;Value: '{{ value }}'&lt;/div&gt;
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
      <b-form-timepicker
        v-model="value"
        show-seconds
        locale="en"
      ></b-form-timepicker>
      <div class="mt-2">Value: '{{ value }}'</div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "EnableSecondTimepicker",

  data: () => ({
    value: "",
  }),
  components: { BaseCard },
};
</script>