<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Multiple select -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Multiple select"
    subtitle="In multiple mode, <b-form-select> always returns an array of option values. You must provide an array reference as your v-model when in multiple mode."
    modalid="modal-6"
    modaltitle="Multiple select"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-select v-model=&quot;selected&quot; :options=&quot;options&quot; multiple :select-size=&quot;4&quot;&gt;&lt;/b-form-select&gt;
    &lt;div class=&quot;mt-3&quot;&gt;Selected: &lt;strong&gt;{{ selected }}&lt;/strong&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        selected: ['b'], // Array reference
        options: [
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Default Selected Option' },
          { value: 'c', text: 'This is another option' },
          { value: 'd', text: 'This one is disabled', disabled: true },
          { value: 'e', text: 'This is option e' },
          { value: 'f', text: 'This is option f' },
          { value: 'g', text: 'This is option g' }
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
      <b-form-select
        v-model="selected"
        :options="options"
        multiple
        :select-size="4"
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
  name: "MultipleSelect",

  data: () => ({
    selected: ["b"], // Array reference
    options: [
      { value: "a", text: "This is First option" },
      { value: "b", text: "Default Selected Option" },
      { value: "c", text: "This is another option" },
      { value: "d", text: "This one is disabled", disabled: true },
      { value: "e", text: "This is option e" },
      { value: "f", text: "This is option f" },
      { value: "g", text: "This is option g" },
    ],
  }),
  components: { BaseCard },
};
</script>