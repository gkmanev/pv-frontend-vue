<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Date string format -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Date string format"
    subtitle="To change format options of the displayed date text inside the component."
    modalid="modal-9"
    modaltitle="Date string format"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;label for=&quot;datepicker-dateformat1&quot;&gt;Custom date format&lt;/label&gt;
    &lt;b-form-datepicker
      id=&quot;datepicker-dateformat1&quot;
      :date-format-options=&quot;{ year: 'numeric', month: 'short', day: '2-digit', weekday: 'short' }&quot;
      locale=&quot;en&quot;
    &gt;&lt;/b-form-datepicker&gt;

    &lt;label class=&quot;mt-3&quot; for=&quot;datepicker-dateformat2&quot;&gt;Short date format&lt;/label&gt;
    &lt;b-form-datepicker
      id=&quot;datepicker-dateformat2&quot;
      :date-format-options=&quot;{ year: 'numeric', month: 'numeric', day: 'numeric' }&quot;
      locale=&quot;en&quot;
    &gt;&lt;/b-form-datepicker&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <label for="datepicker-dateformat1">Custom date format</label>
      <b-form-datepicker
        id="datepicker-dateformat1"
        :date-format-options="{
          year: 'numeric',
          month: 'short',
          day: '2-digit',
          weekday: 'short',
        }"
        locale="en"
      ></b-form-datepicker>

      <label class="mt-3" for="datepicker-dateformat2">Short date format</label>
      <b-form-datepicker
        id="datepicker-dateformat2"
        :date-format-options="{
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        }"
        locale="en"
      ></b-form-datepicker>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "DateformatDatepicker",

  data: () => ({
    status: "not_accepted",
  }),
  components: { BaseCard },
};
</script>