<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Form Select -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Form Select"
    subtitle="Bootstrap custom <select> using custom styles. Optionally specify options based on an array, array of objects, or an object."
    modalid="modal-1"
    modaltitle="Form Select"
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
    &lt;b-form-select v-model=&quot;selected&quot; :options=&quot;options&quot; size=&quot;sm&quot; class=&quot;mt-3&quot;&gt;&lt;/b-form-select&gt;
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
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
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
      <b-form-select
        v-model="selected"
        :options="options"
        size="sm"
        class="mt-3"
      ></b-form-select>
      <div class="mt-3">
        Selected: <strong>{{ selected }}</strong>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "BasicSelect",

  data: () => ({
    selected: null,
    options: [
      { value: null, text: "Please select an option" },
      { value: "a", text: "This is First option" },
      { value: "b", text: "Selected Option" },
      { value: { C: "3PO" }, text: "This is an option with object value" },
      { value: "d", text: "This one is disabled", disabled: true },
    ],
  }),
  components: { BaseCard },
};
</script>