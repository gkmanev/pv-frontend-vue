<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Stacked Checkbox -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Stacked Checkbox"
    modalid="modal-5"
    modaltitle="Stacked Checkbox"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    

    &lt;b-form-group
      label=&quot;Form-checkbox-group stacked checkboxes&quot;
      v-slot=&quot;{ ariaDescribedby }&quot;
    &gt;
      &lt;b-form-checkbox-group
        v-model=&quot;selected&quot;
        :options=&quot;options&quot;
        :aria-describedby=&quot;ariaDescribedby&quot;
        name=&quot;flavour-2a&quot;
        stacked
      &gt;&lt;/b-form-checkbox-group&gt;
    &lt;/b-form-group&gt;

    &lt;b-form-group
      label=&quot;Individual stacked checkboxes (default)&quot;
      v-slot=&quot;{ ariaDescribedby }&quot;
    &gt;
      &lt;b-form-checkbox
        v-for=&quot;option in options&quot;
        v-model=&quot;selected&quot;
        :key=&quot;option.value&quot;
        :value=&quot;option.value&quot;
        :aria-describedby=&quot;ariaDescribedby&quot;
        name=&quot;flavour-3a&quot;
      &gt;
        {{ option.text }}
      &lt;/b-form-checkbox&gt;
    &lt;/b-form-group&gt;

  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        selected: [], // Must be an array reference!
        options: [
      { text: &quot;Xtreme&quot;, value: &quot;xtreme&quot; },
      { text: &quot;Ample&quot;, value: &quot;ample&quot; },
    ],
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
      <b-form-group
        label="Form-checkbox-group stacked checkboxes"
        v-slot="{ ariaDescribedby }"
      >
        <b-form-checkbox-group
          v-model="selected"
          :options="options"
          :aria-describedby="ariaDescribedby"
          name="flavour-2a"
          stacked
        ></b-form-checkbox-group>
      </b-form-group>

      <b-form-group
        label="Individual stacked checkboxes (default)"
        v-slot="{ ariaDescribedby }"
      >
        <b-form-checkbox
          v-for="option in options"
          v-model="selected"
          :key="option.value"
          :value="option.value"
          :aria-describedby="ariaDescribedby"
          name="flavour-3a"
        >
          {{ option.text }}
        </b-form-checkbox>
      </b-form-group>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "StackedCheckbox",

  data: () => ({
    selected: [], // Must be an array reference!
    option: [],
    options: [
      { text: "Xtreme", value: "xtreme" },
      { text: "Ample", value: "ample" },
    ],
  }),
  components: { BaseCard },
};
</script>