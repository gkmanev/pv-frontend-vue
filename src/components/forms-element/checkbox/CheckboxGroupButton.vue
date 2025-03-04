<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Grouped button style checkboxes -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Grouped button style checkboxes"
    subtitle="Render groups of checkboxes with the look of a button-group by setting the prop buttons on <b-form-checkbox-group>."
    modalid="modal-8"
    modaltitle="Grouped button style checkboxes"
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
      label=&quot;Button-group style checkboxes&quot;
      v-slot=&quot;{ ariaDescribedby }&quot;
    &gt;
      &lt;b-form-checkbox-group
        v-model=&quot;selected&quot;
        :options=&quot;options&quot;
        :aria-describedby=&quot;ariaDescribedby&quot;
        name=&quot;buttons-1&quot;
        buttons
      &gt;&lt;/b-form-checkbox-group&gt;
    &lt;/b-form-group&gt;

    &lt;b-form-group
      label=&quot;Button-group style checkboxes with variant primary and large buttons&quot;
      v-slot=&quot;{ ariaDescribedby }&quot;
    &gt;
      &lt;b-form-checkbox-group
        v-model=&quot;selected&quot;
        :options=&quot;options&quot;
        :aria-describedby=&quot;ariaDescribedby&quot;
        buttons
        button-variant=&quot;primary&quot;
        size=&quot;lg&quot;
        name=&quot;buttons-2&quot;
      &gt;&lt;/b-form-checkbox-group&gt;
    &lt;/b-form-group&gt;

    &lt;b-form-group
      label=&quot;Stacked (vertical) button-group style checkboxes&quot;
      v-slot=&quot;{ ariaDescribedby }&quot;
    &gt;
      &lt;b-form-checkbox-group
        v-model=&quot;selected&quot;
        :options=&quot;options&quot;
        :aria-describedby=&quot;ariaDescribedby&quot;
        stacked
        buttons
      &gt;&lt;/b-form-checkbox-group&gt;
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
          { text: &quot;Monster&quot;, value: &quot;monster&quot; },
          { text: &quot;Ample&quot;, value: &quot;ample&quot; },
          { text: &quot;Material Pro&quot;, value: &quot;materialpro&quot; },
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
      <b-form-group
        label="Button-group style checkboxes"
        v-slot="{ ariaDescribedby }"
      >
        <b-form-checkbox-group
          v-model="selected"
          :options="options"
          :aria-describedby="ariaDescribedby"
          button-variant="success"
          name="buttons-1"
          buttons
        ></b-form-checkbox-group>
      </b-form-group>

      <b-form-group
        label="Button-group style checkboxes with variant primary and large buttons"
        v-slot="{ ariaDescribedby }"
      >
        <b-form-checkbox-group
          v-model="selected"
          :options="options"
          :aria-describedby="ariaDescribedby"
          buttons
          button-variant="primary"
          size="lg"
          name="buttons-2"
        ></b-form-checkbox-group>
      </b-form-group>

      <b-form-group
        label="Stacked (vertical) button-group style checkboxes"
        v-slot="{ ariaDescribedby }"
      >
        <b-form-checkbox-group
          v-model="selected"
          :options="options"
          :aria-describedby="ariaDescribedby"
          button-variant="info"
          stacked
          buttons
        ></b-form-checkbox-group>
      </b-form-group>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "CheckboxGroupButton",

  data: () => ({
    selected: [], // Must be an array reference!
    options: [
      { text: "Xtreme", value: "xtreme" },
      { text: "Monster", value: "monster" },
      { text: "Ample", value: "ample" },
      { text: "Material Pro", value: "materialpro" },
    ],
  }),
  components: { BaseCard },
};
</script>