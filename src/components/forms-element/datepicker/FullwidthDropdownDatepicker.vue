<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Full width calendar dropdown -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Full width calendar dropdown"
    subtitle="To create a full width calendar dropdown (where the width matches the input width), simply set the menu-class prop to 'w-100' and set the calendar-width prop to '100%'"
    modalid="modal-10"
    modaltitle="Full width calendar dropdown"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;label for=&quot;datepicker-full-width&quot;&gt;Choose a date&lt;/label&gt;
    &lt;b-form-datepicker
      id=&quot;datepicker-full-width&quot;
      v-model=&quot;value&quot;
      menu-class=&quot;w-100&quot;
      calendar-width=&quot;100%&quot;
      class=&quot;mb-2&quot;
    &gt;&lt;/b-form-datepicker&gt;
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
      <label for="datepicker-full-width">Choose a date</label>
      <b-form-datepicker
        id="datepicker-full-width"
        v-model="value"
        menu-class="w-100"
        calendar-width="100%"
        class="mb-2"
      ></b-form-datepicker>
      <p>Value: '{{ value }}'</p>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FullwidthDropdownDatepicker",

  data: () => ({
    value: "",
  }),
  components: { BaseCard },
};
</script>