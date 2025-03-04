<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Basic Timepicker -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Basic Timepicker"
    subtitle="<b-form-timepicker> is a BootstrapVue custom time picker input form control, which provides full WAI-ARIA compliance and internationalization support."
    modalid="modal-1"
    modaltitle="Basic Timepicker"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-timepicker v-model=&quot;value&quot; locale=&quot;en&quot;&gt;&lt;/b-form-timepicker&gt;
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
      <b-form-timepicker v-model="value" locale="en"></b-form-timepicker>
      <div class="mt-2">Value: '{{ value }}'</div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "BasicTimepicker",

  data: () => ({
    value: "",
  }),
  components: { BaseCard },
};
</script>