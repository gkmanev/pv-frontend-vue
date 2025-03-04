<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Minimum and maximum dates -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Minimum and maximum dates"
    subtitle="Restrict the calendar range via the min and max props. The props accept a date string in the format of YYYY-MM-DD or a Date object."
    modalid="modal-4"
    modaltitle="Minimum and maximum dates"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-datepicker v-model=&quot;value&quot; :min=&quot;min&quot; :max=&quot;max&quot; locale=&quot;en&quot;&gt;&lt;/b-form-datepicker&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      const now = new Date()
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      // 15th two months prior
      const minDate = new Date(today)
      minDate.setMonth(minDate.getMonth() - 2)
      minDate.setDate(15)
      // 15th in two months
      const maxDate = new Date(today)
      maxDate.setMonth(maxDate.getMonth() + 2)
      maxDate.setDate(15)

      return {
        value: '',
        min: minDate,
        max: maxDate
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
        :min="min"
        :max="max"
        locale="en"
      ></b-form-datepicker>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "MinimumMaximumDatepicker",

  data() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    // 15th two months prior
    const minDate = new Date(today);
    minDate.setMonth(minDate.getMonth() - 2);
    minDate.setDate(15);
    // 15th in two months
    const maxDate = new Date(today);
    maxDate.setMonth(maxDate.getMonth() + 2);
    maxDate.setDate(15);

    return {
      value: "",
      min: minDate,
      max: maxDate,
    };
  },
  components: { BaseCard },
};
</script>