<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Button only mode -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Button only mode"
    subtitle="Use the button-only prop to render the datepicker as a dropdown button."
    modalid="modal-8"
    modaltitle="Button only mode"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;label for=&quot;example-input&quot;&gt;Choose a date&lt;/label&gt;
    &lt;b-input-group class=&quot;mb-3&quot;&gt;
      &lt;b-form-input
        id=&quot;example-input&quot;
        v-model=&quot;value&quot;
        type=&quot;text&quot;
        placeholder=&quot;YYYY-MM-DD&quot;
        autocomplete=&quot;off&quot;
      &gt;&lt;/b-form-input&gt;
      &lt;b-input-group-append&gt;
        &lt;b-form-datepicker
          v-model=&quot;value&quot;
          button-only
          right
          locale=&quot;en-US&quot;
          aria-controls=&quot;example-input&quot;
          @context=&quot;onContext&quot;
        &gt;&lt;/b-form-datepicker&gt;
      &lt;/b-input-group-append&gt;
    &lt;/b-input-group&gt;
    &lt;p class=&quot;mb-1&quot;&gt;Value: '{{ value }}'&lt;/p&gt;
    &lt;p class=&quot;mb-1&quot;&gt;Selected: '{{ selected }}'&lt;/p&gt;
    &lt;p&gt;Formatted: '{{ formatted }}'&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: '',
        formatted: '',
        selected: ''
      }
    },
    methods: {
      onContext(ctx) {
        // The date formatted in the locale, or the `label-no-date-selected` string
        this.formatted = ctx.selectedFormatted
        // The following will be an empty string until a valid date is entered
        this.selected = ctx.selectedYMD
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
      <label for="example-input">Choose a date</label>
      <b-input-group class="mb-3">
        <b-form-input
          id="example-input"
          v-model="value"
          type="text"
          placeholder="YYYY-MM-DD"
          autocomplete="off"
        ></b-form-input>
        <b-input-group-append>
          <b-form-datepicker
            v-model="value"
            button-only
            right
            locale="en-US"
            aria-controls="example-input"
            @context="onContext"
          ></b-form-datepicker>
        </b-input-group-append>
      </b-input-group>
      <p class="mb-1">Value: '{{ value }}'</p>
      <p class="mb-1">Selected: '{{ selected }}'</p>
      <p>Formatted: '{{ formatted }}'</p>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ButtonOnlyModeDatepicker",

  data: () => ({
    value: "",
    formatted: "",
    selected: "",
  }),
  components: { BaseCard },
  methods: {
    onContext(ctx) {
      // The date formatted in the locale, or the `label-no-date-selected` string
      this.formatted = ctx.selectedFormatted;
      // The following will be an empty string until a valid date is entered
      this.selected = ctx.selectedYMD;
    },
  },
};
</script>