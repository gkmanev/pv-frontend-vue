<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Options Prop -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Options Prop"
    subtitle="For cross browser consistency, <b-form-checkbox-group> and <b-form-checkbox> use Bootstrap's custom checkbox input to replace the browser default checkbox input."
    modalid="modal-2"
    modaltitle="Options Prop"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-select v-model=&quot;selected&quot; :options=&quot;options&quot;&gt;&lt;/b-form-select&gt;
    &lt;div class=&quot;mt-3&quot;&gt;Selected: &lt;strong&gt;{{ selected }}&lt;/strong&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option', disabled: true },
          {
            label: 'Grouped options',
            options: [
              { value: { C: '3PO' }, text: 'Option with object value' },
              { value: { R: '2D2' }, text: 'Another option with object value' }
            ]
          }
        ]
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
      <b-form-select v-model="selected" :options="options"></b-form-select>
      <div class="mt-3">
        Selected: <strong>{{ selected }}</strong>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "OptionspropSelect",

  data: () => ({
    selected: null,
    options: [
      { value: null, text: "Please select an option" },
      { value: "a", text: "This is First option" },
      { value: "b", text: "Selected Option", disabled: true },
      {
        label: "Grouped options",
        options: [
          { value: { C: "3PO" }, text: "Option with object value" },
          { value: { R: "2D2" }, text: "Another option with object value" },
        ],
      },
    ],
  }),
  components: { BaseCard },
};
</script>