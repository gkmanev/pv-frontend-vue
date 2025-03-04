<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Optional controls -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Optional controls"
    subtitle="Add optional control buttons to the bottom of the calendar popup via the props now-button or reset-button. "
    modalid="modal-6"
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
    &lt;label for=&quot;timepicker-buttons&quot;&gt;Time picker with optional footer buttons&lt;/label&gt;
    &lt;b-form-timepicker
      id=&quot;timepicker-buttons&quot;
      now-button
      reset-button
      locale=&quot;en&quot;
    &gt;&lt;/b-form-timepicker&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <label for="timepicker-buttons"
        >Time picker with optional footer buttons</label
      >
      <b-form-timepicker
        id="timepicker-buttons"
        now-button
        reset-button
        locale="en"
      ></b-form-timepicker>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "OptionalControlTimepicker",

  data: () => ({}),
  components: { BaseCard },
};
</script>