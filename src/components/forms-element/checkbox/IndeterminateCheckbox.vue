<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Single Indeterminate checkbox -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Single Indeterminate checkbox"
    subtitle="Normally a checkbox input can only have two states: checked or unchecked. "
    modalid="modal-10"
    modaltitle="Single Indeterminate checkbox"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-checkbox v-model=&quot;checked&quot; :indeterminate.sync=&quot;indeterminate&quot;&gt;
      Click me to see what happens
    &lt;/b-form-checkbox&gt;

    &lt;div class=&quot;mt-3&quot;&gt;
      Checked: &lt;strong&gt;{{ checked }}&lt;/strong&gt;&lt;br&gt;
      Indeterminate: &lt;strong&gt;{{ indeterminate }}&lt;/strong&gt;
    &lt;/div&gt;

    &lt;b-button @click=&quot;toggleIndeterminate&quot;&gt;Toggle Indeterminate State&lt;/b-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        checked: true,
        indeterminate: true
      }
    },
    methods: {
      toggleIndeterminate() {
        this.indeterminate = !this.indeterminate
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
      <b-form-checkbox v-model="checked" :indeterminate.sync="indeterminate">
        Click me to see what happens
      </b-form-checkbox>

      <div class="mt-3">
        Checked: <strong>{{ checked }}</strong
        ><br />
        Indeterminate: <strong>{{ indeterminate }}</strong>
      </div>

      <b-button variant="primary" class="mt-3" @click="toggleIndeterminate"
        >Toggle Indeterminate State</b-button
      >
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "IndeterminateCheckbox",

  data: () => ({
    checked: true,
    indeterminate: true,
  }),
  components: { BaseCard },
  methods: {
    toggleIndeterminate() {
      this.indeterminate = !this.indeterminate;
    },
  },
};
</script>