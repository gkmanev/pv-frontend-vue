<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Individual Checkbox button -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Individual Checkbox button"
    subtitle="A single checkbox can be rendered with a button appearance by setting the prop button to true"
    modalid="modal-7"
    modaltitle="Individual Checkbox button"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-checkbox v-model=&quot;checked1&quot; name=&quot;check-button&quot; button button-variant=&quot;primary&quot;&gt;
      Button Checkbox &lt;b&gt;(Checked: {{ checked1 }})&lt;/b&gt;
    &lt;/b-form-checkbox&gt;
    &lt;b-form-checkbox v-model=&quot;checked2&quot; name=&quot;check-button&quot; button button-variant=&quot;info&quot;&gt;
      Button Checkbox &lt;b&gt;(Checked: {{ checked2 }})&lt;/b&gt;
    &lt;/b-form-checkbox&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        checked1: false,
        checked2: false
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
      <div class="btn-grp">
        <b-form-checkbox
          v-model="checked1"
          name="check-button"
          button-variant="primary"
          button
        >
          Button Checkbox <b>(Checked: {{ checked1 }})</b>
        </b-form-checkbox>
        <b-form-checkbox
          v-model="checked2"
          name="check-button"
          button
          button-variant="info"
        >
          Button Checkbox <b>(Checked: {{ checked2 }})</b>
        </b-form-checkbox>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "CheckboxwithButton",

  data: () => ({
    checked1: false,
    checked2: false,
  }),
  components: { BaseCard },
};
</script>