<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Size Timepicker -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Size Timepicker"
    subtitle="Set the size prop to 'sm' for a smaller form control, or 'lg' for a larger form form control."
    modalid="modal-4"
    modaltitle="Size Timepicker"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;label for=&quot;timepicker-sm&quot;&gt;Small time picker&lt;/label&gt;
    &lt;b-form-timepicker id=&quot;timepicker-sm&quot; size=&quot;sm&quot; locale=&quot;en&quot; class=&quot;mb-2&quot;&gt;&lt;/b-form-timepicker&gt;

    &lt;label for=&quot;timepicker-lg&quot;&gt;Large time picker&lt;/label&gt;
    &lt;b-form-timepicker id=&quot;timepicker-lg&quot; size=&quot;lg&quot; locale=&quot;en&quot;&gt;&lt;/b-form-timepicker&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <label for="timepicker-sm">Small time picker</label>
      <b-form-timepicker
        id="timepicker-sm"
        size="sm"
        locale="en"
        class="mb-2"
      ></b-form-timepicker>

      <label for="timepicker-lg">Large time picker</label>
      <b-form-timepicker
        id="timepicker-lg"
        size="lg"
        locale="en"
      ></b-form-timepicker>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "SizeTimepicker",

  data: () => ({}),
  components: { BaseCard },
};
</script>