<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Validation states -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Validation states"
    subtitle="<b-form-timepicker> supports invalid and valid styling via the boolean state prop. Setting state to boolean false will style the input as invalid"
    modalid="modal-3"
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
    &lt;label for=&quot;timepicker-invalid&quot;&gt;Choose a time (invalid style)&lt;/label&gt;
    &lt;b-form-timepicker id=&quot;datepicker-invalid&quot; :state=&quot;false&quot; class=&quot;mb-2&quot;&gt;&lt;/b-form-timepicker&gt;

    &lt;label for=&quot;timepicker-valid&quot;&gt;Choose a time (valid style)&lt;/label&gt;
    &lt;b-form-timepicker id=&quot;datepicker-valid&quot; :state=&quot;true&quot;&gt;&lt;/b-form-timepicker&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <label for="timepicker-invalid">Choose a time (invalid style)</label>
      <b-form-timepicker
        id="datepicker-invalid"
        :state="false"
        class="mb-2"
      ></b-form-timepicker>

      <label for="timepicker-valid">Choose a time (valid style)</label>
      <b-form-timepicker
        id="datepicker-valid"
        :state="true"
      ></b-form-timepicker>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ValidationTimepicker",

  data: () => ({}),
  components: { BaseCard },
};
</script>