<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Debounce support -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Debounce support"
    subtitle="As an alternative to the lazy modifier prop, <b-form-textarea> optionally supports debouncing user input."
    modalid="modal-7"
    modaltitle="Debounce support"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-textarea v-model=&quot;value&quot; debounce=&quot;500&quot; rows=&quot;3&quot; max-rows=&quot;5&quot;&gt;&lt;/b-form-textarea&gt;
    &lt;pre class=&quot;mt-2 mb-0&quot;&gt;{{ value }}&lt;/pre&gt;
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
      <b-form-textarea
        v-model="value"
        debounce="500"
        rows="3"
        max-rows="5"
      ></b-form-textarea>
      <pre class="mt-2 mb-0">{{ value }}</pre>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "DebounceTextarea",

  data: () => ({
    value: "",
  }),
  components: { BaseCard },
};
</script>