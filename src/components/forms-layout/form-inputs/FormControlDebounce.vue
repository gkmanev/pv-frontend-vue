<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Input with Debounce -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Input with Debounce"
    modalid="modal-36"
    modaltitle="Input with Debounce"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-input v-model=&quot;value&quot; type=&quot;text&quot; debounce=&quot;500&quot;&gt;&lt;/b-form-input&gt;
    &lt;div class=&quot;mt-2&quot;&gt;Value: &quot;{{ value }}&quot;&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: ''
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
      <b-form-input v-model="value" type="text" debounce="500"></b-form-input>
      <div class="mt-2">Value: "{{ value }}"</div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FormControlDebounce",

  data: () => ({
    value: "",
  }),
  components: { BaseCard },
};
</script>