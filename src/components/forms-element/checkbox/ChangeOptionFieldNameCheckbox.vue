<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Changing the option field names -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Changing the option field names"
    subtitle="you can easily change them by setting the text-field, html-field, value-field, and disabled-field props to a string that contains the property name you would like to use"
    modalid="modal-3"
    modaltitle="Changing the option field names"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-checkbox-group
      v-model=&quot;selected&quot;
      :options=&quot;options&quot;
      class=&quot;mb-3&quot;
      value-field=&quot;item&quot;
      text-field=&quot;name&quot;
      disabled-field=&quot;notEnabled&quot;
    &gt;&lt;/b-form-checkbox-group&gt;
    &lt;div class=&quot;mt-3&quot;&gt;Selected: &lt;strong&gt;{{ selected }}&lt;/strong&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        selected: [],
        options: [
          { item: 'A', name: 'Option A' },
          { item: 'B', name: 'Option B' },
          { item: 'D', name: 'Option C', notEnabled: true },
          { item: { d: 1 }, name: 'Option D' }
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
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        class="mb-3"
        value-field="item"
        text-field="name"
        disabled-field="notEnabled"
      ></b-form-checkbox-group>
      <div class="mt-3">
        Selected: <strong>{{ selected }}</strong>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ChangeOptionFieldNameCheckbox",

  data: () => ({
    selected: [],
    options: [
      { item: "A", name: "Option A" },
      { item: "B", name: "Option B" },
      { item: "D", name: "Option C", notEnabled: true },
      { item: { d: 1 }, name: "Option D" },
    ],
  }),
  components: { BaseCard },
};
</script>