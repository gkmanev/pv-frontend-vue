<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Standard (single) select -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Standard (single) select"
    subtitle="In non multiple mode, <b-form-select> returns the a single value of the currently selected option."
    modalid="modal-4"
    modaltitle="Standard (single) select"
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
          { value: null, text: 'Please select some item' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Default Selected Option' },
          { value: 'c', text: 'This is another option' },
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
      <div class="mt-3">
        Selected: <strong>{{ selected }}</strong>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "StandardSelect",

  data: () => ({
    selected: null,
    options: [
      { value: null, text: "Please select some item" },
      { value: "a", text: "This is First option" },
      { value: "b", text: "Default Selected Option" },
      { value: "c", text: "This is another option" },
      { value: "d", text: "This one is disabled", disabled: true },
    ],
  }),
  components: { BaseCard },
};
</script>