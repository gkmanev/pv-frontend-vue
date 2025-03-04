<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Validation states -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Validation states"
    subtitle="<b-form-datepicker> supports invalid and valid styling via the boolean state prop. "
    modalid="modal-5"
    modaltitle="Validation states"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;label for=&quot;datepicker-invalid&quot;&gt;Choose a date (invalid style)&lt;/label&gt;
    &lt;b-form-datepicker id=&quot;datepicker-invalid&quot; :state=&quot;false&quot; class=&quot;mb-2&quot;&gt;&lt;/b-form-datepicker&gt;
    &lt;label for=&quot;datepicker-valid&quot;&gt;Choose a date (valid style)&lt;/label&gt;
    &lt;b-form-datepicker id=&quot;datepicker-valid&quot; :state=&quot;true&quot;&gt;&lt;/b-form-datepicker&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <label for="datepicker-invalid">Choose a date (invalid style)</label>
      <b-form-datepicker
        id="datepicker-invalid"
        :state="false"
        class="mb-2"
      ></b-form-datepicker>
      <label for="datepicker-valid">Choose a date (valid style)</label>
      <b-form-datepicker
        id="datepicker-valid"
        :state="true"
      ></b-form-datepicker>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ValidationStatesDatepicker",

  data: () => ({
    status: "not_accepted",
  }),
  components: { BaseCard },
};
</script>