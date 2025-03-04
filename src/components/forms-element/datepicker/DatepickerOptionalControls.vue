<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Optional controls -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Optional controls"
    subtitle="Add optional control buttons to the bottom of the calendar popup via the props today-button, reset-button and close-button."
    modalid="modal-7"
    modaltitle="Optional controls"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;label for=&quot;datepicker-buttons&quot;&gt;Date picker with optional footer buttons&lt;/label&gt;
    &lt;b-form-datepicker
      id=&quot;datepicker-buttons&quot;
      today-button
      reset-button
      close-button
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
      <label for="datepicker-buttons"
        >Date picker with optional footer buttons</label
      >
      <b-form-datepicker
        id="datepicker-buttons"
        today-button
        reset-button
        close-button
        locale="en"
      ></b-form-datepicker>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "DatepickerOptionalControls",

  data: () => ({
    status: "not_accepted",
  }),
  components: { BaseCard },
};
</script>