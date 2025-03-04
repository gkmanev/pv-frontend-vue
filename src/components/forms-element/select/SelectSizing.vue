<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Select sizing -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Select sizing"
    subtitle="You can use the select-size prop to switch the custom select into a select list-box, rather than a dropdown."
    modalid="modal-5"
    modaltitle="Select sizing"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-select v-model=&quot;selected&quot; :options=&quot;options&quot; :select-size=&quot;4&quot;&gt;&lt;/b-form-select&gt;
    &lt;div class=&quot;mt-3&quot;&gt;Selected: &lt;strong&gt;{{ selected }}&lt;/strong&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Please select some item' },
          { value: 'a', text: 'This is option a' },
          { value: 'b', text: 'Default Selected Option b' },
          { value: 'c', text: 'This is option c' },
          { value: 'd', text: 'This one is disabled', disabled: true },
          { value: 'e', text: 'This is option e' },
          { value: 'e', text: 'This is option f' }
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
  name: "SelectSizing",

  data: () => ({
    selected: null,
    options: [
      { value: null, text: "Please select some item" },
      { value: "a", text: "This is option a" },
      { value: "b", text: "Default Selected Option b" },
      { value: "c", text: "This is option c" },
      { value: "d", text: "This one is disabled", disabled: true },
      { value: "e", text: "This is option e" },
      { value: "e", text: "This is option f" },
    ],
  }),
  components: { BaseCard },
};
</script>