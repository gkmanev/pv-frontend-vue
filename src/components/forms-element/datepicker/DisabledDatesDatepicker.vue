<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Disabling dates -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Disabling dates"
    subtitle="If you need to disable specific dates within the date picker, specify a function reference to the date-disabled-fn prop. "
    modalid="modal-2"
    modaltitle="Disabling dates"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-datepicker v-model=&quot;value&quot; :date-disabled-fn=&quot;dateDisabled&quot; locale=&quot;en&quot;&gt;&lt;/b-form-datepicker&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: ''
      }
    },
    methods: {
      dateDisabled(ymd, date) {
        // Disable weekends (Sunday = `0`, Saturday = `6`) and
        // disable days that fall on the 13th of the month
        const weekday = date.getDay()
        const day = date.getDate()
        // Return `true` if the date should be disabled
        return weekday === 0 || weekday === 6 || day === 13
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
      <b-form-datepicker
        v-model="value"
        :date-disabled-fn="dateDisabled"
        locale="en"
      ></b-form-datepicker>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "DisabledDatesDatepicker",

  data: () => ({
    value: "",
  }),
  components: { BaseCard },
  methods: {
    dateDisabled(ymd, date) {
      // Disable weekends (Sunday = `0`, Saturday = `6`) and
      // disable days that fall on the 13th of the month
      const weekday = date.getDay();
      const day = date.getDate();
      // Return `true` if the date should be disabled
      return weekday === 0 || weekday === 6 || day === 13;
    },
  },
};
</script>