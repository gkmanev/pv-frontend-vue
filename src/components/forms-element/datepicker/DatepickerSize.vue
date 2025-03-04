<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Datepicker Size -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Datepicker Size"
    subtitle="Set the size prop to 'sm' for a smaller form control, or 'lg' for a larger form form control."
    modalid="modal-6"
    modaltitle="Datepicker Size"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;label for=&quot;datepicker-sm&quot;&gt;Small date picker&lt;/label&gt;
    &lt;b-form-datepicker id=&quot;datepicker-sm&quot; size=&quot;sm&quot; locale=&quot;en&quot; class=&quot;mb-2&quot;&gt;&lt;/b-form-datepicker&gt;
    &lt;label for=&quot;datepicker-lg&quot;&gt;Large date picker&lt;/label&gt;
    &lt;b-form-datepicker id=&quot;datepicker-lg&quot; size=&quot;lg&quot; locale=&quot;en&quot;&gt;&lt;/b-form-datepicker&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <label for="datepicker-sm">Small date picker</label>
      <b-form-datepicker
        id="datepicker-sm"
        size="sm"
        locale="en"
        class="mb-2"
      ></b-form-datepicker>
      <label for="datepicker-lg">Large date picker</label>
      <b-form-datepicker
        id="datepicker-lg"
        size="lg"
        locale="en"
      ></b-form-datepicker>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "DatepickerSize",

  data: () => ({
    status: "not_accepted",
  }),
  components: { BaseCard },
};
</script>