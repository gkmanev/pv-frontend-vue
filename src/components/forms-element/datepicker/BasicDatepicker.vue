<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Basic Datepicker -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Basic Datepicker"
    subtitle="<b-form-datepicker> is a BootstrapVue custom date picker input form control, which provides full WAI-ARIA compliance and internationalization support."
    modalid="modal-1"
    modaltitle="Basic Datepicker"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;label for=&quot;example-datepicker&quot;&gt;Choose a date&lt;/label&gt;
    &lt;b-form-datepicker id=&quot;example-datepicker&quot; v-model=&quot;value&quot; class=&quot;mb-2&quot;&gt;&lt;/b-form-datepicker&gt;
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
      <label for="example-datepicker">Choose a date</label>
      <b-form-datepicker
        id="example-datepicker"
        v-model="value"
        class="mb-2"
      ></b-form-datepicker>
      <p>Value: '{{ value }}'</p>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "BasicDatepicker",

  data: () => ({
    value: "",
  }),
  components: { BaseCard },
};
</script>